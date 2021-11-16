import express from 'express';
import { connection } from '../database/connection.js';


const languagesRouter = express.Router();

// GET api to get all the languages
languagesRouter.get('/', async (req, res) => {
    const query = 'SELECT * FROM languages';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get languages" });
            console.log(err);
        }
    });
});

// POST api to insert new row to manufacturers
languagesRouter.post('/', async (req, res) => {
    const { label, code, created, updated } = req.body;
    const query = `INSERT INTO languages (label, code, created, updated) VALUES ("${label}", "${code}", ${created}, ${updated})`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert languages" });
            console.log(err);
        }
    });
});

// GET api to get row from languages on id basis
languagesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM languages WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get languages" });
            console.log(err);
        }
    });
});

// PUT api to update row from languages on id basis
languagesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { label, code, updated } = req.body;
    const query = `UPDATE languages SET label="${label}", code="${code}", updated=${updated} WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update languages" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from languages on id basis
languagesRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM languages WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete languages" });
            console.log(err);
        }
    });
});


export { languagesRouter };