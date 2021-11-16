import express from 'express';
import { connection } from '../database/connection.js';


const productsRouter = express.Router();

// GET api to get all the products
productsRouter.get('/', async (req, res) => {
    const query = 'SELECT * from products';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get products" });
            console.log(err);
        }
    });
});

// POST api to insert new row to products
productsRouter.post('/', async (req, res) => {
    const { name, description, manufacturer, designer, category, created, updated } = req.body;
    const query = `INSERT INTO products (name, description, manufacturer, designer, category, created, updated) VALUES ("${name}", "${description}", "${manufacturer}", "${designer}", ${category}, ${created}, ${updated});`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert into products" });
            console.log(err);
        }
    });
});

// GET api to get row from products on id basis
productsRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM products WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get this product" });
            console.log(err);
        }
    });
});

// PUT api to update row from products on id basis
productsRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, description, manufacturer, designer, category, updated } = req.body;
    const query = `UPDATE products SET name="${name}", description="${description}", manufacturer="${manufacturer}", designer="${designer}", category=${category}, updated=${updated} WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update product" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from products on id basis
productsRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM products WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete product" });
            console.log(err);
        }
    });
});


export { productsRouter };