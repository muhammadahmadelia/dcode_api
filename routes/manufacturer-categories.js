import express from 'express';
import { connection } from '../database/connection.js';


const manufacturerCategoriesRouter = express.Router();

// GET api to get all the manufacturer-categories
manufacturerCategoriesRouter.get('/', async (req, res) => {
    const query = `SELECT * FROM manufacturer-categories`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get manufacturer categories" });
            console.log(err);
        }
    });
});

// POST api to insert new row to manufacturer-categories
manufacturerCategoriesRouter.post('/', async (req, res) => {
    const { label, created, updated } = req.body;
    const query = `INSERT INTO manufacturer-categories (label, created, updated) VALUES ("${label}", ${created}, ${updated})`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert manufacturer-category" });
            console.log(err);
        }
    });
});

// GET api to get row from manufacturer-categories on id basis
manufacturerCategoriesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM manufacturer-categories WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get manufacturer category" });
            console.log(err);
        }
    });
});

// PUT api to update row from manufacturer-categories on id basis
manufacturerCategoriesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { label, updated } = req.body;
    const query = `UPDATE manufacturer-categories SET label="${label}, updated=${updated}" WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update manufacturer category" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from manufacturer-categories on id basis
manufacturerCategoriesRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM manufacturer-categories WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete manufacturer category" });
            console.log(err);
        }
    });
});


export { manufacturerCategoriesRouter };