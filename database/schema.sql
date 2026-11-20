CREATE DATABASE IF NOT EXISTS gleanagro
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE gleanagro;

CREATE TABLE IF NOT EXISTS form_submissions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  organization VARCHAR(200) NULL,
  inquiry_role VARCHAR(40) NOT NULL,
  produce_interest VARCHAR(255) NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_form_submissions_submitted_at (submitted_at),
  KEY idx_form_submissions_email (email)
) ENGINE=InnoDB;
