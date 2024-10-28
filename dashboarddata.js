const express = require('express');
const router = express.Router();

const db = require('../utils/database');

router.get('/', (req, res) => {
    db.querry('SELECT * from user_info',(eroor, results) =>{
        if(error) throw error;
        res.json(results[0]);
    });
})

module.exports = router;