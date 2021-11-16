import express from 'express';
import { connection } from '../database/connection.js';


const mediaRouter = express.Router();

// GET api to get all the media
mediaRouter.get('/', async (req, res) => {
    const query = `SELECT * FROM media`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get media" });
            console.log(err);
        }
    });
});

// POST api to insert new row to media
mediaRouter.post('/', async (req, res) => {
    const { type, parent, alt, location, scrapeURL, created, updated } = req.body;
    const query = `INSERT INTO media (type, parent, alt, location, scrap-url, created, updated) VALUES ("${type}", ${parent}, "${alt}", "${location}", "${scrapeURL}", ${created}, ${updated})`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to insert media" });
            console.log(err);
        }
    });
});

// GET api to get row from media on id basis
mediaRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM media WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get media" });
            console.log(err);
        }
    });
});

// PUT api to update row from media on id basis
mediaRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { type, parent, alt, location, scrapeURL, updated } = req.body;
    const query = `UPDATE media SET type="${type}", parent=${parent}, alt="${alt}", location="${location}", scrap-url="${scrapeURL}", updated=${updated} WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to update media" });
            console.log(err);
        }
    });
});

// DELETE api to delete row from media on id basis
mediaRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM media WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete media" });
            console.log(err);
        }
    });
});


export { mediaRouter };