import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'world',
    password: 'password',
    port: 5432
});

db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        const quiz = res.rows;
        console.log(quiz);
        
    }
    db.end();
})