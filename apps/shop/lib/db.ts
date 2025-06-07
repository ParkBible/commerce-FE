import { Pool } from "pg";

declare global {
    var __db: Pool | undefined;
}

let db: Pool;

if (process.env.NODE_ENV === "production") {
    db = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
} else {
    if (!global.__db) {
        global.__db = new Pool({
            connectionString: process.env.DATABASE_URL || "postgresql://username:password@localhost:5432/commerce",
        });
    }
    db = global.__db;
}

export { db };
