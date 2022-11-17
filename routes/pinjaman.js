const express =require('express')
const router = express.Router()
const db = require('../services/dbConnection')

// create
router.post('/', (req, res) => {
    const { nik, nama, bagian, angsuran, potongan } = req.body
    db.query('INSERT INTO pinjaman VALUE (?, ?, ?, ?, ?)', [nik, nama, bagian, angsuran, potongan], (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})  

// read all
router.get('/', (req, res) => {
    db.query('SELECT * FROM pinjaman', (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

// read single
router.get('/:nik', (req, res) => {
    const nik = req.params.nik
    db.query('SELECT * FROM pinjaman WHERE nik = ?', nik, (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

// update potongan
router.put('/:nik', (req, res) => {
    const nik = req.params.nik
    const potongan = req.body.potongan
    db.query('UPDATE pinjaman SET potongan = ? WHERE nik = ?', 
    [ potongan, nik ], (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

// delete single
router.delete('/:nik', (req, res) => {
    const nik = req.params.nik
    db.query('DELETE FROM pinjaman WHERE nik = ?', nik, (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

router.delete('/', (req, res) => {
    db.query('DELETE FROM pinjaman', (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})

module.exports = router