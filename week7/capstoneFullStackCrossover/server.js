//Dependencies
const express = require('express');
const app = express();
const { Pool } = require('pg/lib');
const postgre = require('pg').Pool;

//Express port
const PORT = 9000;

//Express middleware
app.use(express.json())

//Connection string for PostgreSQL
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'mtg_decks',
    password: 'e36010099150113',
    port: 5432
})

//Connect to PostgreSQL
pool.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to PostgreSQL')
});

//Express route to create a new database in PostgreSQL
app.get('/createDB', (req, res) => {
    let sql = "CREATE DATABASE mtg_decks";
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('New database created successfully');
        console.log('New database created successfully');
    })
})

//Express route to create a new table in the PostgreSQL database
app.get('/createTable', (req, res) => {
    let sql = "CREATE TABLE cards ( card_name VARCHAR(50), img_url VARCHAR, colors VARCHAR(30), mana_cost INT, description VARCHAR, card_count INT, deck VARCHAR, PRIMARY KEY(card_name) )";
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('New table created successfully');
        console.log('New table created successfully');
    })
})

//Express route to insert data into the new table in the PostgreSQL database
app.post('/insertData', (req, res) => {
    let sql = `INSERT INTO cards(card_name, img_url, colors, mana_cost, description, card_count, deck) VALUES('${req.body.card_name}', '${req.body.img_url}', '${req.body.colors}', ${req.body.mana_cost}, '${req.body.description}', ${req.body.card_count}, '${req.body.deck}')`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
        console.log('Data inserted successfully');
    })
})

//Express route to SELECT query of Custom Added Cards
app.get('/get/:deckname', (req, res) => {
    let sql = `SELECT * FROM cards WHERE deck = '${req.params.deckname}'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
        console.log('Data selected successfully');
    })
})

//Express route to use a SELECT query on the PostgreSQL database (w/o WHERE clause)
app.get('/getAllCards', (req, res) => {
    let sql = "SELECT * FROM cards";
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
        console.log('Data selected successfully');
    })
})

//Express route to use a SELECT query on the PostgreSQL database (with WHERE clause)
app.get('/getCard/:name', (req, res) => {
    let sql = `SELECT * FROM cards WHERE card_name = '${req.params.name}'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Data selected successfully');
        console.log('Data selected successfully');
    })
})

//Express route to use a SELECT query on the PostgreSQL database for SQUIRREL DECK
app.get('/getSquirrel', (req, res) => {
    let sql = `SELECT * FROM cards WHERE deck = 'Squirrel'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
        console.log('Data selected successfully');
    })
})

//Express route to use a SELECT query on the PostgreSQL database for DA YEET FLEET DECK
app.get('/getDaYeetFleet', (req, res) => {
    let sql = `SELECT * FROM cards WHERE deck = 'Da Yeet Fleet'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
        console.log('Data selected successfully');
    })
})

//Express route to use a SELECT query on the PostgreSQL database for RICOCHET DECK
app.get('/getRicochet', (req, res) => {
    let sql = `SELECT * FROM cards WHERE deck = 'Ricochet'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.rows);
        console.log('Data selected successfully');
    })
})

//Express route to use an UPDATE statement on the PostgreSQL database
app.put('/updateCard/:name', (req, res) => {
    let sql = `UPDATE cards SET card_count = ${req.body.card_count} WHERE card_name = '${req.params.name}'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Data updated successfully');
        console.log('Data updated successfully');
    })
})

//Express route to use the DELETE statement on the PostgreSQL database
app.delete('/deleteCard/:name', (req, res) => {
    let sql = `DELETE FROM cards WHERE card_name = '${req.params.name}'`;
    pool.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Data removed successfully');
        console.log('Data removed successfully');
    })
})

//Listen on port with Express
app.listen(PORT, () => {
    console.log('Connected to Express')
})