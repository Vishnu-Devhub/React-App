import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

