import express from 'express';
import { connection } from '../database/connection.js';


const manufacturersRouter = express.Router();

manufacturersRouter.get('/', async (req, res) => {
    const query = 'SELECT * from manufacturers';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database"});
            console.log(err);
        }
    });
});


manufacturersRouter.get('/categories', async (req, res) => {
    const query = 'SELECT * from manufacturers';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturersRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * from manufacturers';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturersRouter.post('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * from manufacturers';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturersRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * from manufacturers';
    connection.query(query, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturersRouter.update('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * from manufacturers';
    connection.query(query, (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

manufacturersRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * from manufacturers';
    connection.query(query, async (err, result) => {
        if (!err) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ msg: "Failed to get benefits frame from database" });
            console.log(err);
        }
    });
});

export { manufacturersRouter };