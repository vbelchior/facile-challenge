module.exports = {
    "url":process.env.DATABASE_URL,
    "type": "postgres",
    "entities": ["dist/models/**/*.js"],
    "migrations": ["dist/database/migrations/**/*.js"],
    "synchronize": true,
    "cli": {
        "migrationsDir":[
            "src/database/migrations/"
        ],
        "entitiesDir":"src/models"
    }
}

