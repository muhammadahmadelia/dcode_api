import express from 'express';
import { connection } from '../database/connection.js';


const manufacturerCategoriesRouter = express.Router();

manufacturerCategoriesRouter.get('/', async (req, res) => {
    const query = 'SELECT * from products';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturerCategoriesRouter.post('/', async (req, res) => {

    const query = 'SELECT * from products';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturerCategoriesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const category = req.query.category;
    const country = req.query.country;
    const query = 'SELECT * from products';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturerCategoriesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const category = req.query.category;
    const country = req.query.country;
    const query = 'SELECT * from products';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturerCategoriesRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const category = req.query.category;
    const country = req.query.country;
    const query = 'SELECT * from products';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});


export { manufacturerCategoriesRouter };