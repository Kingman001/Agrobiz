# Form submissions

The contact form sends inquiries to the Python API, which stores them in MySQL.
The existing Node server forwards `/api/inquiries` to this API; Vite forwards
that route directly while developing.

## Database setup

Create the database and table:

```sh
mysql -u root -p < database/schema.sql
```

Give the API a dedicated account with insert-only access:

```sql
CREATE USER IF NOT EXISTS 'gleanagro_app'@'127.0.0.1' IDENTIFIED BY 'use-a-unique-password';
GRANT INSERT ON gleanagro.form_submissions TO 'gleanagro_app'@'127.0.0.1';
```

If the account already exists, change its password rather than creating it
again. Match the MySQL account host to the host used by `MYSQL_HOST`; update
both statements if MySQL is on another host.
Copy `.env.example` to `.env` and configure the `MYSQL_*` settings there.
`MYSQL_DATABASE` defaults to `gleanagro`, matching the supplied schema.
Review saved inquiries using an administrative MySQL account:

```sql
SELECT id, full_name, email, phone, organization, inquiry_role,
       produce_interest, message, submitted_at
FROM gleanagro.form_submissions
ORDER BY submitted_at DESC;
```

## Run locally

Install dependencies and start the API from the repository root:

```sh
python3 -m venv .venv
. .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

In another terminal, run the site with `npm run dev`. The form is available at
`/contact`; `GET http://127.0.0.1:8000/api/health` checks that the Python
service is running.

For production, run the Python API alongside `npm start` and set `FORM_API_URL`
to the API's reachable base URL. Keep the API private behind the Node server or
an equivalent reverse proxy. Do not expose database credentials to the browser.

Run backend tests with:

```sh
python3 -m unittest discover -s backend/tests
```
