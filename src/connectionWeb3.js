const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

const addressJSON = require('./SmartContract/build/CounterAddress.json');
const contractJSON = require('./SmartContract/build/contracts/Counter.json');

const CONTRACT_ADDRESS = addressJSON.address;
const CONTRACT_ABI = contractJSON.abi;

let web3, contract, getCountABI, incrementABI, decrementABI;
const accountAddress = process.env.ACCOUNT_ADDRESS
const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex');

(async () => {
    web3 = new Web3(process.env.RPC_URI);
    contract = await new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

    getCountABI = contract.methods.getCount().encodeABI();
    incrementABI = contract.methods.increment().encodeABI();
    decrementABI = contract.methods.decrement().encodeABI();

})();

async function makeTransaction(_data) {
    _nonce = await web3.eth.getTransactionCount(accountAddress);

    const rawTx = {
        nonce: _nonce,
        gasPrice: '0x20000000000',
        gasLimit: '0x27511',
        to: CONTRACT_ADDRESS,
        value: 0,
        data: _data
    }

    const tx = new Tx(rawTx);
    tx.sign(privateKey);

    const serializedTx = tx.serialize();

    return web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
}

const connectionWeb3 = {

    async increment() {
        const _receipt = await makeTransaction(incrementABI);
        console.log("Receipt: ", _receipt.transactionHash);
        console.log(await web3.eth.getTransactionReceipt(_receipt.transactionHash))
    },

    async decrement() {
        const _receipt = await makeTransaction(decrementABI);
        console.log("Receipt: ", _receipt);
    },

    async getCount() {
        const _result = await contract.methods.getCount().call();
        console.log("Receipt: ", _result);
        return _result;
    }
}

module.exports = connectionWeb3;