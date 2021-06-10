const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1623247082204,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1623247218536,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1623247296933,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "ce149415837144629848c035efd340d3",
          transactionId: "5a7b072f55574f639b721563960c5761",
        },
        {
          amount: 5000,
          sender: "JHHDGGDGDDGGHG",
          recipient: "GJDHFGHFHDHF",
          transactionId: "8505ad8bc9ce48e1aee2abf30ebea38c",
        },
        {
          amount: 3000,
          sender: "JHHDGGDGDDGGHG",
          recipient: "GJDHFGHFHDHF",
          transactionId: "fafc5c9b05604088bc91121c32308b58",
        },
        {
          amount: 3700,
          sender: "JHHDGGDGDDGGHG",
          recipient: "GJDHFGHFHDHF",
          transactionId: "9e261ab108e240c6993028d27eddd063",
        },
      ],
      nonce: 11982,
      hash: "00003e97536df205cf86c8f2c0102c096689ec8583acb409e8829786eb4c384d",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1623247362126,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "ce149415837144629848c035efd340d3",
          transactionId: "44989fbdf0304996aff73406f888bda7",
        },
        {
          amount: 8700,
          sender: "JHHDGGDGDDGGHG",
          recipient: "GJDHFGHFHDHF",
          transactionId: "bba37b8d38bd42669aaf53937b2591a2",
        },
        {
          amount: 8900,
          sender: "JHHDGGDGDDGGHG",
          recipient: "GJDHFGHFHDHF",
          transactionId: "d76bef53967f4a1eb9de5b2346cc2aa3",
        },
        {
          amount: 900,
          sender: "JHHDGGDGDDGGHG",
          recipient: "GJDHFGHFHDHF",
          transactionId: "623249510c3f40ba86c7677b8ddd640a",
        },
      ],
      nonce: 51846,
      hash: "00007f10c0dd101d606c0b62573637b6c1ef3ddc686a7badd304c5398facd99e",
      previousBlockHash:
        "00003e97536df205cf86c8f2c0102c096689ec8583acb409e8829786eb4c384d",
    },
    {
      index: 5,
      timestamp: 1623247405265,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "ce149415837144629848c035efd340d3",
          transactionId: "5de3c8fe0bd743d69713d2af00797593",
        },
      ],
      nonce: 16493,
      hash: "0000779168703fd95bb8a8c803cbdc9dde0e9b7d88632adef7c8cb4d1376f881",
      previousBlockHash:
        "00007f10c0dd101d606c0b62573637b6c1ef3ddc686a7badd304c5398facd99e",
    },
    {
      index: 6,
      timestamp: 1623247407300,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "ce149415837144629848c035efd340d3",
          transactionId: "84186d0958864f048b4fc077d13e71e2",
        },
      ],
      nonce: 37719,
      hash: "000004566ac67a5aaab7798a82482f9dfa7165d7921a308a4b6bcb1f298aea0f",
      previousBlockHash:
        "0000779168703fd95bb8a8c803cbdc9dde0e9b7d88632adef7c8cb4d1376f881",
    },
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "ce149415837144629848c035efd340d3",
      transactionId: "dbbc40be968d4e11bbb2668d94c7409f",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("Valid: ", bitcoin.chainIsValid(bc1.chain));
