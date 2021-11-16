import express from 'express';
import { connection } from '../database/connection.js';


const translationRouter = express.Router();

// GET api to get all the translation
translationRouter.get('/', async (req, res) => {
    const query = `SELECT * FROM translation`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get translation" });
            console.log(err);
        }
    });
});

// POST api to insert new row to translation
translationRouter.post('/', async (req, res) => {
    const { text, language, category, source, created, updated } = req.body;
    const query = `INSERT INTO translation (text, language, category, source, created, updated) VALUES ("${text}", ${language}, ${category}, ${source}, ${created}, ${updated})`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert translation" });
            console.log(err);
        }
    });
});

// GET api to get row from translation on id basis
translationRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM translation WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get translation" });
            console.log(err);
        }
    });
});

// PUT api to update row from translation on id basis
translationRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { text, language, category, source, updated } = req.body;
    const query = `UPDATE translation SET text="${text}", language=${language}, category=${category}, source=${source}, updated=${updated} WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update translation" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from translation on id basis
translationRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM translation WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete translation" });
            console.log(err);
        }
    });
});


export { translationRouter };