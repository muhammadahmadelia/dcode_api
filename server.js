import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connection } from './database/connection.js';
import { productsRouter } from './routes/products.js';
import { manufacturersRouter } from './routes/manufacturers.js';
import { productCategoriesRouter } from './routes/product-categories.js';
import { manufacturerCategoriesRouter } from './routes/manufacturer-categories.js';
import { mediaRouter } from './routes/media.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/products', productsRouter);
app.use('/manufacturers', manufacturersRouter);
app.use('/product-categories', productCategoriesRouter);
app.use('/manufacturer-categories', manufacturerCategoriesRouter);
app.use('/media', mediaRouter);


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