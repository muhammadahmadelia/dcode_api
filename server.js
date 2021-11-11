import express from 'express';
import { manufacturersRouter } from './routes/manufacturers.js';
import { productsRouter } from './routes/products.js';

const app = express()

app.use(express.json())


app.use('/manufacturers', manufacturersRouter);
app.use('/products', productsRouter);


const Port = 3000;
connect()
    .then(() => {
        app.listen(Port, console.log(`listening on port :${Port}`));
    })
    .catch((err) => {
        console.error(err);
    });