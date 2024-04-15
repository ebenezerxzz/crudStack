import {db} from '../db.js'

export const getUsers = (_, res) => {
    const q = "SELECT * FROM datausers";

    db.query(q, (err, data)=> {
        err ? res.json(err) : res.status(200).json(data)
    });
;}

export const postData = (req, res) => {
    const q = "INSERT INTO datausers(username, telefone, nascimento, email) VALUES (?)";

    const valuesQuery = [
        req.body.username,
        req.body.telefone,
        req.body.nascimento,
        req.body.email
    ];

    db.query(q, [valuesQuery], (err) => {
        err ? res.json(err) : res.status(200).json('Usuário cadastrado com sucesso !')
    })
};

export const deleteRegister = (_, res) => {
    const q = "DELETE datausers WHERE id = '?' ";

    db.query(q, (res) => {
        
    })
}