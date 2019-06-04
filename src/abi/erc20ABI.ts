const erc20ABI = [{
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{
        name: "_name",
        type: "string"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
},
{
    constant: false,
    inputs: [{
        name: "_spender",
        type: "address"
    },
    {
        name: "_value",
        type: "uint256"
    }
    ],
    name: "approve",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
},
{
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{
        name: "_totalSupply",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
},
{
    constant: false,
    inputs: [{
        name: "_from",
        type: "address"
    },
    {
        name: "_to",
        type: "address"
    },
    {
        name: "_value",
        type: "uint256"
    }
    ],
    name: "transferFrom",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
},
{
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{
        name: "_decimals",
        type: "uint8"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
},
{
    constant: true,
    inputs: [{
        name: "_owner",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        name: "balance",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
},
{
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{
        name: "_symbol",
        type: "string"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
},
{
    constant: false,
    inputs: [{
        name: "_to",
        type: "address"
    },
    {
        name: "_value",
        type: "uint256"
    }
    ],
    name: "transfer",
    outputs: [{
        name: "success",
        type: "bool"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
},
{
    constant: true,
    inputs: [{
        name: "_owner",
        type: "address"
    },
    {
        name: "_spender",
        type: "address"
    }
    ],
    name: "allowance",
    outputs: [{
        name: "remaining",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
},
{
    anonymous: false,
    inputs: [{
        indexed: true,
        name: "_from",
        type: "address"
    },
    {
        indexed: true,
        name: "_to",
        type: "address"
    },
    {
        indexed: false,
        name: "_value",
        type: "uint256"
    }
    ],
    name: "Transfer",
    type: "event"
}];

export default erc20ABI;
