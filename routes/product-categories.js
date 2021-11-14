import express from 'express';
import { connection } from '../database/connection.js';


const productCategoriesRouter = express.Router();

productCategoriesRouter.get('/', async (req, res) => {
    const query = `SELECT * FROM media`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

productCategoriesRouter.post('/', async (req, res) => {
    
    const query = `INSERT INTO media () VALUES ()`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

productCategoriesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM media WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

productCategoriesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `UPDATE media SET    WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

productCategoriesRouter.delete('/:id', async (req, res) => {
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


export { productCategoriesRouter };