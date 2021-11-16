import express from 'express';
import { connection } from '../database/connection.js';


const manufacturersRouter = express.Router();

// GET api to get all the manufacturers
manufacturersRouter.get('/', async (req, res) => {
    const query = 'SELECT * FROM manufacturers';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get manufacturers" });
            console.log(err);
        }
    });
});

// POST api to insert new row to manufacturers
manufacturersRouter.post('/', async (req, res) => {
    const { name, country, city, zip, address, email, website, description, categories, pcon, created, updated } = req.body;
    const query = `INSERT INTO manufacturers (name, country, city, zip, address, email, website, description, categories, pcon, created, updated) VALUES ("${name}", "${country}", "${city}", ${zip}, "${address}", "${email}", "${website}", "${description}", ${categories}, "${pcon}", ${created}, ${updated})`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert manufacturer" });
            console.log(err);
        }
    });
});

// GET api to get row from manufacturers on id basis
manufacturersRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM manufacturers WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get manufacturer" });
            console.log(err);
        }
    });
});

// PUT api to update row from manufacturers on id basis
manufacturersRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { name, country, city, zip, address, email, website, description, categories, pcon, updated } = req.body;
    const query = `UPDATE manufacturer SET name="${name}", country="${country}", city="${city}", zip=${zip}, address="${address}", email="${email}", website="${website}", description="${description}", categories=${categories}, pcon="${pcon}", updated=${updated} WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update manufacturer" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from manufacturers on id basis
manufacturersRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM manufacturers WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete manufacturer" });
            console.log(err);
        }
    });
});


export { manufacturersRouter };