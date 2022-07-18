import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {router} from './routes/posts.js'
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';

dotenv.config();
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/posts', router);

// ROUTES
app.get('/', (req, res) => {
    res.render('home');
});

// connect to db 
// await mongoose.connect(`mongodb://localhost/restApi_db`);

app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
}); 