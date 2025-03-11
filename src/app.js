import express from 'express';
import { crearUsuario, getUsuarios } from './functions/user.functions.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', getUsuarios);

app.post('/users', crearUsuario);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});