import express from 'express';
import { connection } from '../database/connection.js';


const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
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


productsRouter.get('/categories', async (req, res) => {
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

productsRouter.get('/:id', async (req, res) => {
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

productsRouter.post('/:id', async (req, res) => {
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

productsRouter.put('/:id', async (req, res) => {
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

productsRouter.update('/:id', async (req, res) => {
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

productsRouter.delete('/:id', async (req, res) => {
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

export { productsRouter };