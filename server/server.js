import express from 'express';
import data from './data';
// import path from 'path';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import config from './config';
// import userRoute from './routes/userRoute';
// import productRoute from './routes/productRoute';
// import orderRoute from './routes/orderRoute';

// const mongodbUrl = config.MONGODB_URL;
// mongoose.connect(mongodbUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }).catch((error) => console.log(error.reason));


const app = express();
// app.use(bodyParser.json());

// app.use('/api/users', userRoute);
// app.use('/api/products', productRoute);
// app.use('/api/orders', orderRoute);
// app.get('/api/config/paypal', (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });

// app.use(express.static(path.join(__dirname, '/../client/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
// });

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// app.listen(config.PORT, () => { console.log('Server started at http://localhost:5000'); });
app.listen(5000, () => { console.log('Server started at http://localhost:5000') })