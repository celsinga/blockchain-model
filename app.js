let Block = require('./block');
let Blockchain = require('./blockchain');
let Transaction = require('./transaction');

//Genesis Transaction

let transaction = new Transaction('Mary', 'Tom', 150);

let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

let block = blockchain.getNextBlock([transaction]);
blockchain.addBlock(block);

//2nd Transaction

let anotherTransaction = new Transaction('Adam', 'Sarah', 36.57);
let block1 = blockchain.getNextBlock([anotherTransaction, transaction]);
blockchain.addBlock(block1);

console.log(blockchain);