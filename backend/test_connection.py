
from sqlalchemy import text
from app.database import engine

try:
    with engine.connect() as connection:
        result = connection.execute(
            text("SELECT DATABASE(), VERSION()")
        )
        database, version = result.fetchone()

        print("Database connection successful!")
        print(f"Database: {database}")
        print(f"MariaDB version: {version}")

except Exception as error:
    print("Database connection failed:")
    print(error)
