import { findAll } from '../dao/pessoa/Pessoa';
import { Application } from 'express';

export function pessoaController(app) {

    app.get('/pessoas', function (req, res) {
        res.send("UMCU")
    });

}