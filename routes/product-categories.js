import express from 'express';
import { connection } from '../database/connection.js';


const productCategoriesRouter = express.Router();

// GET api to get all the product-categories
productCategoriesRouter.get('/', async (req, res) => {
    const query = `SELECT * FROM product-categories`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get product categories" });
            console.log(err);
        }
    });
});

// POST api to insert new row to product-categories
productCategoriesRouter.post('/', async (req, res) => {
    const { label, created, updated } = req.body;
    const query = `INSERT INTO product-categories (label, created, updated) VALUES ("${label}", ${created}, ${updated})`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert product category" });
            console.log(err);
        }
    });
});

// GET api to get row from product-categories on id basis
productCategoriesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM product-categories WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get product category" });
            console.log(err);
        }
    });
});

// PUT api to update row from product-categories on id basis
productCategoriesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { label, updated } = req.body;
    const query = `UPDATE product-categories SET label="${label}, updated=${updated}" WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update product category" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from product-categories on id basis
productCategoriesRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM product-categories WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete product category" });
            console.log(err);
        }
    });
});


export { productCategoriesRouter };