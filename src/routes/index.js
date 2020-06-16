const express = require('express');
const router = express.Router();

const connectionWeb3 = require('../connectionWeb3');

router.get('/', async function (req, res, next) {

    // const web3 = new Web3(process.env.RPC_URI);
    // contract = await new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    // console.log(web3.eth.accounts.create());

    // const Web3 = require('web3');
    // const Tx = require('ethereumjs-tx').Transaction;
    // const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    // const accounts = await web3.eth.getAccounts();
    // console.log("Accounts:", accounts);

    // const contractAddress = '0x0C7740CDEf54132d82522ec852d2eec84f7aBfC2';
    // const ABI = require('./test.abi.json');
    // const account = '0xc55960AfF6aB75927Ac13615c7f0776Ead363Ef6';
    // const privateKey = Buffer.from('3dffbe2660f21099f386518bfc9d4d00f37b638d6770fa00881c7b00e569068e', 'hex');
    // const newAddress = '0x55B5e52245fd4974499Aa625709EE1f5a81C8157';

    // const TestContract = new web3.eth.Contract(ABI, contractAddress);
    // const _data = TestContract.methods.setOwner(newAddress).encodeABI();

    // _nonce = await web3.eth.getTransactionCount(account);

    // const rawTx = {
    //     nonce: _nonce,
    //     gasPrice: '0x20000000000',
    //     gasLimit: '0x27511',
    //     to: contractAddress,
    //     value: 0,
    //     data: _data
    // }

    // const tx = new Tx(rawTx);
    // tx.sign(privateKey);

    // const serializedTx = tx.serialize();

    // const _receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
    // console.log("Receipt: ", _receipt);

    // res.render('index', { title: 'Counter', count: JSON.stringify(_receipt) });
    res.render('index', { title: 'Counter', count: 2 });
});

router.post('/increment', async function (req, res, next) {

    connectionWeb3.increment();

    res.status(200).json();
});

router.post('/decrement', async function (req, res, next) {

    connectionWeb3.decrement();

    res.status(200).json();
});

router.post('/getCount', async function (req, res, next) {

    connectionWeb3
        .getCount()
        .then((count) => {
            res.status(200).json({ count });
        })
});

module.exports = router;