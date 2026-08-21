import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = Number(process.env.PORT || 3001);
const distPath = path.join(__dirname, 'dist');

const normalizeEnterprise = (enterprise = 'maize') => {
  const map = {
    fishery: 'aquaculture and fishery operations',
    poultry: 'poultry and egg operations',
    cattle: 'cattle and dairy operations',
    maize: 'maize grain production',
    crops: 'crop and grain production',
    catfish: 'aquaculture and catfish operations',
    general: 'mixed agribusiness operations'
  };

  return map[enterprise] || map.maize;
};

const buildFallbackInsight = (payload = {}) => {
  const enterprise = normalizeEnterprise(payload.enterprise || 'maize');
  const farmSize = payload.farmSize || 'small to medium-sized';
  const location = payload.location || 'Kaduna State';
  const goal = payload.goal || 'increase income and reduce waste';
  const budget = Number(payload.budget || 500000);

  const recommendationSummary = `For a ${farmSize} ${enterprise} operation in ${location}, the best plan to achieve ${goal} is to combine better input quality, direct off-take contracts, and low-loss post-harvest handling. This reduces operating risk while preserving margins for smallholder and commercial producers.`;

  const recommendations = [
    `Prioritize certified inputs and climate-smart practices for ${enterprise} to protect quality and output volume.`,
    `Use shared solar and cold-chain storage to lower spoilage and protect margins during peak harvest periods.`,
    `Match production to guaranteed buyer demand so the farm sells at transparent prices instead of forced panic sales.`
  ];

  const nextActions = [
    `Review current ${enterprise} capacity and confirm whether you need tractor leasing, fish pond aeration, or grain drying support.`,
    budget > 2000000
      ? 'Consider a phased expansion with cold-chain support and premium market linkage to secure off-take volumes.'
      : 'Start with a compact production plan, then scale once you have improved market access and storage control.'
  ];

  return {
    summary: recommendationSummary,
    recommendations,
    nextActions,
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY),
    generatedAt: new Date().toISOString()
  };
};

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'glean-agro-ai',
    timestamp: new Date().toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY)
  });
});

app.post('/api/ai/opportunity', async (req, res) => {
  const payload = req.body || {};
  const finalPayload = {
    enterprise: payload.enterprise || 'maize',
    farmSize: payload.farmSize || 'small farmer',
    location: payload.location || 'Kaduna State',
    goal: payload.goal || 'increase income and protect harvests',
    budget: payload.budget || 500000
  };

  let insight = buildFallbackInsight(finalPayload);

  if (process.env.GEMINI_API_KEY) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `You are Glean Agro's agribusiness strategy advisor. Provide a concise, practical recommendation for a farmer or buyer in ${finalPayload.location}. They run a ${finalPayload.farmSize} ${normalizeEnterprise(finalPayload.enterprise)} project, with the goal of ${finalPayload.goal}. Budget available: ${finalPayload.budget} NGN. Recommend 3 actions, 2 priority next steps, and a short summary in plain English. Keep it realistic for Nigeria agriculture.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt
      });

      const text = response?.text || response?.candidates?.map((candidate) => candidate?.content?.parts?.map((part) => part?.text || '').join('')).join(' ') || '';
      if (text) {
        const lines = text
          .split(/\n+/)
          .map((line) => line.trim())
          .filter(Boolean);

        const summary = lines[0] || insight.summary;
        const recommendations = lines
          .slice(1, 4)
          .map((line) => line.replace(/^[-*•\s]+/, ''))
          .filter(Boolean);

        insight = {
          ...insight,
          summary,
          recommendations: recommendations.length ? recommendations : insight.recommendations,
          nextActions: insight.nextActions,
          geminiConfigured: true,
          generatedAt: new Date().toISOString()
        };
      }
    } catch (error) {
      console.warn('Gemini fallback triggered:', error.message);
    }
  }

  res.json(insight);
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('/', (_req, res) => {
    res.json({
      message: 'Glean Agro API is running. Build the frontend to serve static assets via dist/',
      routes: ['/api/health', '/api/ai/opportunity']
    });
  });
}

app.listen(port, '127.0.0.1', () => {
  console.log(`Glean Agro API running on http://127.0.0.1:${port}`);
});
