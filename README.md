# Signed Transactions Demo

Server side signed transactions for Smart Contracts using Solidity, Truffle and Node.js presented as lab assingment for BCDV1011 - Design Patterns for Blockchain from <a href='https://www.georgebrown.ca/programs/blockchain-development-program-t175/'>Blockchain Development</a> program from <a href='https://www.georgebrown.ca'>George Brown College</a>.

<p align='center'>
<img src='https://res.cloudinary.com/lorransutter/image/upload/v1592316551/Signed_transactions_demo.gif' height=300/>
</p>

## :runner: How to run

Open your terminal in the folder you want to clone the project

```sh
# Clone this repo
git clone https://github.com/LorranSutter/Signed-transactions-demo.git

# Go to the project folder
cd Signed-transactions-demo

# Install dependencies
npm install
```

Now you will need two opened terminals to run the project. One for truffle to simulate the EVM and another one for the server.

Truffle will run on http://127.0.0.1:9545/

Frontend will run on http://localhost:5000/

```sh
## In the first terminal ##

# Go to smart contract folder
cd src/SmartContract

# Init truffle
truffle develop
```

After the last command, the RPC URI and a list of account addresses and private keys will be shown in the terminal, you will need one of these (address, PK) pairs to execute transactions. Choose, copy and paste one of these pairs and the RPC URI as the following instructions below.

To run the application you are will need to set your own configurations of port, RPC uri, account address and private key. Create the following .env file in the indicated path and format with your customized configurations:

```json
// ./.env

PORT=5000
RPC_URI="http://127.0.0.1:9545/"
ACCOUNT_ADDRESS="0x9103cd7582bee22423648dfe02e4cfcc455e7ead"
PRIVATE_KEY="22c643e9b3efdf8a055094210e570116b98e619fe92ce5c825810571b3f76707"
```

Now you may execute the following command:

```sh
# Run migrations
migrate
```

The previous command will generate a new ABI and write contract address in a JSON file. You do not have to worry about importing these info in the backend though. Also you may change the smart contract and run migrations again to see your changes.

```sh
## In the another terminal ##

# Go to backend application
cd ..

# Run the project
npm run start
```

## :book: References and technologies :computer:

- [Solidity](https://solidity.readthedocs.io/) - smart contract programming language
- [Truffle](https://www.trufflesuite.com/) - dApp environment
- [Ethereumjs-tx](https://www.npmjs.com/package/ethereumjs-tx) - perform smart contract transactions in server side
- [Web3.js](https://web3js.readthedocs.io/) - interact with smart contracts
- [Dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file
- [Express.js](http://expressjs.com/) - web application framework
- [Pug](https://pugjs.org/) - template engine for Node.js and for the browser
