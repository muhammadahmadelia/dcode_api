import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connection } from './database/connection.js';
import { productsRouter } from './routes/products.js';
import { manufacturersRouter } from './routes/manufacturers.js';
import { productCategoriesRouter } from './routes/product-categories.js';
import { manufacturerCategoriesRouter } from './routes/manufacturer-categories.js';
import { mediaRouter } from './routes/media.js';
import { translationRouter } from './routes/translation.js';
import { signAccessToken, verifyAccessToken, signRefreshToken, verifyRefreshTooken, getUserEmail } from './middleware/authMiddleware.js';

// creating express
const app = express();

// using cors for react, json for request body, url encoded for query, and cookie parser for cookies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/login', async (req, res) =>{
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email="${email}" and password="${password}"`;
    connection.query(query, async (err, result) => {
        if (!err) {
            if (result.length > 0) {
                const accessToken = signAccessToken(email);
                res.cookie('access_token', accessToken, { httpOnly: true });
                const refreshToken = signRefreshToken(email);
                res.cookie('refresh_token', refreshToken, { httpOnly: true });
                res.status(200).json({ msg: 'Successfully logged in' });
            } else {
                res.status(400).json({ msg: "Credentials are not correct" });
            }
        } else {
            res.status(400).json({ msg: "Failed to signed in" });
            console.log(err);
        }
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const query = `INSERT INTO users (email, password) VALUES ("${email}", "${password}")`;
    connection.query(query, async (err, result) => {
        if (!err) {
            if (result.length > 0) {
                const accessToken = signAccessToken(email);
                res.cookie('access_token', accessToken, { httpOnly: true });
                const refreshToken = signRefreshToken(email);
                res.cookie('refresh_token', refreshToken, { httpOnly: true });
                res.status(200).json({ msg: 'Successfully logged in' });
            } else {
                res.status(400).json({ msg: "Credentials are not correct" });
            }
        } else {
            res.status(400).json({ msg: "Failed to signed in" });
            console.log(err);
        }
    });
});

app.get('/token', verifyRefreshTooken, (req, res) => {
    const email = getUserEmail(req.cookies.access_token);
    const accessToken = signAccessToken(email);
    res.cookie('access_token', accessToken, { httpOnly: true });
    res.status(200).json({msg: 'Token is refreshed'});
});


// routing different urls
app.use('/products', verifyAccessToken, productsRouter);
app.use('/manufacturers', verifyAccessToken, manufacturersRouter);
app.use('/product-categories', verifyAccessToken, productCategoriesRouter);
app.use('/manufacturer-categories', verifyAccessToken, manufacturerCategoriesRouter);
app.use('/media', verifyAccessToken, mediaRouter);
app.use('/translation', verifyAccessToken, translationRouter);


connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected as ID ' + connection.threadId);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// GET to get records
// PUT to update
// POST to insert new
// DELETE to delete any