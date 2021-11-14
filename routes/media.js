import express from 'express';
import { connection } from '../database/connection.js';


const mediaRouter = express.Router();

mediaRouter.get('/', async (req, res) => {
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

mediaRouter.post('/', async (req, res) => {

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

mediaRouter.get('/:id', async (req, res) => {
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

mediaRouter.put('/:id', async (req, res) => {
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

mediaRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM media WHERE id=${id}`;
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to delete record from media" });
            console.log(err);
        }
    });
});


export { mediaRouter };