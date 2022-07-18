import express from "express";
import mongoose from "mongoose";
import { model } from "../models/Post.js";

export const router = express.Router();

await mongoose.connect('mongodb://localhost/restApi_db');

router.get('/', async (req, res) => {
    model.find( { } , (err, data) => {
        if (err) {
            res.json({message: "Error happened : " + err});
        }
        res.json(data);
    })
});

router.get('/new', (req, res) => {
    res.render('addPost');
});

router.post('/', (req, res) => {
    res.redirect('/posts'); 
    model.create({
        title: req.body.title,
        description: req.body.description,
        number: req.body.number,
    }, (err, data) => {
        if (err) {
            res.json({message: 'Error happened : ' + err});
        }
        console.log('data added\n', data);
    });
});

router.delete('/post/:postId', (req, res) => {
    const id = req.params.postId.split()[0];
    model.findByIdAndDelete(id, (err, data) => {
        console.log(err, data);
    });
    res.redirect('/posts');
});


router.get('/post/:postId', (req, res) => {
    model.findById(req.params.postId, (err, data) => {
        if (err) {
            res.json({message: "Error happened , There is no post : " + req.params.postId});
        }
        res.json(data);
    });
});

