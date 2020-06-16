const express = require('express');
const router = express.Router();

const connectionWeb3 = require('../connectionWeb3');

router.get('/', async function (req, res, next) {
    connectionWeb3
        .getCount()
        .then(count => {
            res.render('index', { title: 'Counter', count });
        })
        .catch(err => {
            res.render('index', { title: 'Counter', error: err });
        })
});

router.post('/increment', async function (req, res, next) {

    connectionWeb3
        .increment()
        .then(receipt => {
            res.json({ status: 200, receipt: JSON.stringify(receipt, undefined, 4) });
        })
        .catch(err => {
            res.json({ error: err });
        });
});

router.post('/decrement', async function (req, res, next) {

    connectionWeb3
        .decrement()
        .then((receipt) => {
            res.json({ status: 200, receipt: JSON.stringify(receipt, undefined, 4) });
        })
        .catch(err => {
            res.json({ error: err });
        });
});

router.post('/getCount', async function (req, res, next) {

    connectionWeb3
        .getCount()
        .then((count) => {
            res.status(200).json({ status: 200, count });
        })
        .catch(err => {
            res.json({ error: err });
        });
});

module.exports = router;