/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Staking, StakingInterface } from "../../contracts/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainID_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "systemContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NoRewardsToClaim",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "OnlySystemContract",
    type: "error",
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Underflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "action",
        type: "uint8",
      },
    ],
    name: "UnknownAction",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
    ],
    name: "WrongChain",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "beneficiary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "staker",
        type: "bytes",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "lastStakeTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "origin",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
        ],
        internalType: "struct zContext",
        name: "context",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "zrc20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "onCrossChainCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "staker",
        type: "bytes",
      },
    ],
    name: "queryRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "systemContract",
    outputs: [
      {
        internalType: "contract SystemContract",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405260016006553480156200001657600080fd5b5060405162002e7238038062002e7283398181016040528101906200003c919062000221565b8383816003908051906020019062000056929190620000c5565b5080600490805190602001906200006f929190620000c5565b50505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816080818152505050505050620004c7565b828054620000d390620003a4565b90600052602060002090601f016020900481019282620000f7576000855562000143565b82601f106200011257805160ff191683800117855562000143565b8280016001018555821562000143579182015b828111156200014257825182559160200191906001019062000125565b5b50905062000152919062000156565b5090565b5b808211156200017157600081600090555060010162000157565b5090565b60006200018c6200018684620002fa565b620002d1565b905082815260208101848484011115620001ab57620001aa62000473565b5b620001b88482856200036e565b509392505050565b600081519050620001d18162000493565b92915050565b600082601f830112620001ef57620001ee6200046e565b5b81516200020184826020860162000175565b91505092915050565b6000815190506200021b81620004ad565b92915050565b600080600080608085870312156200023e576200023d6200047d565b5b600085015167ffffffffffffffff8111156200025f576200025e62000478565b5b6200026d87828801620001d7565b945050602085015167ffffffffffffffff81111562000291576200029062000478565b5b6200029f87828801620001d7565b9350506040620002b2878288016200020a565b9250506060620002c587828801620001c0565b91505092959194509250565b6000620002dd620002f0565b9050620002eb8282620003da565b919050565b6000604051905090565b600067ffffffffffffffff8211156200031857620003176200043f565b5b620003238262000482565b9050602081019050919050565b60006200033d8262000344565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200038e57808201518184015260208101905062000371565b838111156200039e576000848401525b50505050565b60006002820490506001821680620003bd57607f821691505b60208210811415620003d457620003d362000410565b5b50919050565b620003e58262000482565b810181811067ffffffffffffffff821117156200040757620004066200043f565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6200049e8162000330565b8114620004aa57600080fd5b50565b620004b88162000364565b8114620004c457600080fd5b50565b608051612973620004ff6000396000818161076c01528181610947015281816109b3015281816112b101526115cd01526129736000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806395d89b41116100ad578063da27db7711610071578063da27db7714610383578063dd62ed3e146103b3578063de43156e146103e3578063e190febc146103ff578063eac79f5c1461041b5761012c565b806395d89b41146102c9578063a457c2d7146102e7578063a9059cbb14610317578063adc879e914610347578063bb88b769146103655761012c565b806339509351116100f457806339509351146101eb5780634c1f21371461021b578063554577391461024b57806370a082311461027b5780637b0a47ee146102ab5761012c565b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017f57806323b872dd1461019d578063313ce567146101cd575b600080fd5b61013961044b565b6040516101469190612071565b60405180910390f35b61016960048036038101906101649190611b80565b6104dd565b604051610176919061200b565b60405180910390f35b610187610500565b60405161019491906121b3565b60405180910390f35b6101b760048036038101906101b29190611b2d565b61050a565b6040516101c4919061200b565b60405180910390f35b6101d5610539565b6040516101e291906121ce565b60405180910390f35b61020560048036038101906102009190611b80565b610542565b604051610212919061200b565b60405180910390f35b61023560048036038101906102309190611c2d565b610579565b6040516102429190611fc7565b60405180910390f35b61026560048036038101906102609190611c2d565b6105c2565b60405161027291906121b3565b60405180910390f35b61029560048036038101906102909190611a93565b6105f0565b6040516102a291906121b3565b60405180910390f35b6102b3610638565b6040516102c091906121b3565b60405180910390f35b6102d161063e565b6040516102de9190612071565b60405180910390f35b61030160048036038101906102fc9190611b80565b6106d0565b60405161030e919061200b565b60405180910390f35b610331600480360381019061032c9190611b80565b610747565b60405161033e919061200b565b60405180910390f35b61034f61076a565b60405161035c91906121b3565b60405180910390f35b61036d61078e565b60405161037a9190612056565b60405180910390f35b61039d60048036038101906103989190611c2d565b6107b4565b6040516103aa91906121b3565b60405180910390f35b6103cd60048036038101906103c89190611aed565b610828565b6040516103da91906121b3565b60405180910390f35b6103fd60048036038101906103f89190611c76565b6108af565b005b61041960048036038101906104149190611c2d565b610ba0565b005b61043560048036038101906104309190611c2d565b610c97565b60405161044291906121b3565b60405180910390f35b60606003805461045a906124e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610486906124e3565b80156104d35780601f106104a8576101008083540402835291602001916104d3565b820191906000526020600020905b8154815290600101906020018083116104b657829003601f168201915b5050505050905090565b6000806104e8610cc5565b90506104f5818585610ccd565b600191505092915050565b6000600254905090565b600080610515610cc5565b9050610522858285610e98565b61052d858585610f24565b60019150509392505050565b60006012905090565b60008061054d610cc5565b905061056e81858561055f8589610828565b6105699190612320565b610ccd565b600191505092915050565b6008818051602081018201805184825260208301602085012081835280955050505050506000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6009818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60065481565b60606004805461064d906124e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610679906124e3565b80156106c65780601f1061069b576101008083540402835291602001916106c6565b820191906000526020600020905b8154815290600101906020018083116106a957829003601f168201915b5050505050905090565b6000806106db610cc5565b905060006106e98286610828565b90508381101561072e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072590612173565b60405180910390fd5b61073b8286868403610ccd565b60019250505092915050565b600080610752610cc5565b905061075f818585610f24565b600191505092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806009836040516107c79190611fb0565b908152602001604051809103902054426107e191906123d0565b905060006006546007856040516107f89190611fb0565b908152602001604051809103902054836108129190612376565b61081c9190612376565b90508092505050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610940576040517f14c6658d000000000000000000000000000000000000000000000000000000008152600401610937906120d3565b60405180910390fd5b85604001357f0000000000000000000000000000000000000000000000000000000000000000146109ac5785604001356040517fbd407dda0000000000000000000000000000000000000000000000000000000081526004016109a391906121b3565b60405180910390fd5b600061479c7f0000000000000000000000000000000000000000000000000000000000000000146109eb5783838101906109e69190611d1a565b610a0d565b838360008181106109ff576109fe6125a4565b5b9050013560f81c60f81b60f81c5b905060018160ff161415610a7e57610a79878060000190610a2e91906121e9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505086868661119c565b610b97565b60028160ff161415610aea57610ae5878060000190610a9d91906121e9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611243565b610b96565b60038160ff161415610b5857610b53878060000190610b0991906121e9565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505085856115c6565b610b95565b806040517f60df9f87000000000000000000000000000000000000000000000000000000008152600401610b8c91906121ce565b60405180910390fd5b5b5b50505050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600882604051610bc79190611fb0565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c43576040517fea8e4eb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610c4e826107b4565b905060008111610c8a576040517f73380d9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c938261167e565b5050565b6007818051602081018201805184825260208301602085012081835280955050505050506000915090505481565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d3d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3490612153565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da4906120b3565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e8b91906121b3565b60405180910390a3505050565b6000610ea48484610828565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610f1e5781811015610f10576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f07906120f3565b60405180910390fd5b610f1d8484848403610ccd565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f94576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8b90612133565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611004576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ffb90612093565b60405180910390fd5b61100f838383611745565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611095576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108c90612113565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161118391906121b3565b60405180910390a361119684848461174a565b50505050565b6111a78483836115c6565b826007856040516111b89190611fb0565b908152602001604051809103902060008282546111d59190612320565b92505081905550826007856040516111ed9190611fb0565b9081526020016040518091039020541015611234576040517f35278d1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61123d8461167e565b50505050565b60006007826040516112559190611fb0565b908152602001604051809103902054905061126f8261167e565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630be155477f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016112ec91906121b3565b60206040518083038186803b15801561130457600080fd5b505afa158015611318573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133c9190611ac0565b905060008173ffffffffffffffffffffffffffffffffffffffff1663d9eeebed6040518163ffffffff1660e01b8152600401604080518083038186803b15801561138557600080fd5b505afa158015611399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113bd9190611bc0565b915050808310156113fa576040517f49986e7300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060078560405161140c9190611fb0565b9081526020016040518091039020819055508173ffffffffffffffffffffffffffffffffffffffff1663095ea7b383836040518363ffffffff1660e01b8152600401611459929190611fe2565b602060405180830381600087803b15801561147357600080fd5b505af1158015611487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ab9190611c00565b508173ffffffffffffffffffffffffffffffffffffffff1663c70126268583866114d591906123d0565b6040518363ffffffff1660e01b81526004016114f2929190612026565b602060405180830381600087803b15801561150c57600080fd5b505af1158015611520573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115449190611c00565b50826007856040516115569190611fb0565b908152602001604051809103902054111561159d576040517fcaccb6d900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b426009856040516115ae9190611fb0565b90815260200160405180910390208190555050505050565b600061479c7f00000000000000000000000000000000000000000000000000000000000000001415611605576115fe8383600161174f565b905061161b565b82828101906116149190611d47565b9050809150505b8060088560405161162c9190611fb0565b908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60006009826040516116909190611fb0565b90815260200160405180910390205414156116c957426009826040516116b69190611fb0565b9081526020016040518091039020819055505b60006116d4826107b4565b905061171e6008836040516116e99190611fb0565b908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16826117c4565b4260098360405161172f9190611fb0565b9081526020016040518091039020819055505050565b505050565b505050565b600080848484906014866117639190612320565b92611770939291906122e5565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050905060148101519150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161182b90612193565b60405180910390fd5b61184060008383611745565b80600260008282546118529190612320565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161190391906121b3565b60405180910390a36119176000838361174a565b5050565b600061192e61192984612271565b61224c565b90508281526020810184848401111561194a5761194961262f565b5b6119558482856124a1565b509392505050565b60008135905061196c816128ca565b92915050565b600081519050611981816128ca565b92915050565b600081359050611996816128e1565b92915050565b6000815190506119ab816128f8565b92915050565b60008083601f8401126119c7576119c6612607565b5b8235905067ffffffffffffffff8111156119e4576119e3612602565b5b602083019150836001820283011115611a00576119ff612625565b5b9250929050565b600082601f830112611a1c57611a1b612607565b5b8135611a2c84826020860161191b565b91505092915050565b600060608284031215611a4b57611a4a612611565b5b81905092915050565b600081359050611a638161290f565b92915050565b600081519050611a788161290f565b92915050565b600081359050611a8d81612926565b92915050565b600060208284031215611aa957611aa8612639565b5b6000611ab78482850161195d565b91505092915050565b600060208284031215611ad657611ad5612639565b5b6000611ae484828501611972565b91505092915050565b60008060408385031215611b0457611b03612639565b5b6000611b128582860161195d565b9250506020611b238582860161195d565b9150509250929050565b600080600060608486031215611b4657611b45612639565b5b6000611b548682870161195d565b9350506020611b658682870161195d565b9250506040611b7686828701611a54565b9150509250925092565b60008060408385031215611b9757611b96612639565b5b6000611ba58582860161195d565b9250506020611bb685828601611a54565b9150509250929050565b60008060408385031215611bd757611bd6612639565b5b6000611be585828601611972565b9250506020611bf685828601611a69565b9150509250929050565b600060208284031215611c1657611c15612639565b5b6000611c248482850161199c565b91505092915050565b600060208284031215611c4357611c42612639565b5b600082013567ffffffffffffffff811115611c6157611c60612634565b5b611c6d84828501611a07565b91505092915050565b600080600080600060808688031215611c9257611c91612639565b5b600086013567ffffffffffffffff811115611cb057611caf612634565b5b611cbc88828901611a35565b9550506020611ccd8882890161195d565b9450506040611cde88828901611a54565b935050606086013567ffffffffffffffff811115611cff57611cfe612634565b5b611d0b888289016119b1565b92509250509295509295909350565b600060208284031215611d3057611d2f612639565b5b6000611d3e84828501611a7e565b91505092915050565b60008060408385031215611d5e57611d5d612639565b5b6000611d6c85828601611a7e565b9250506020611d7d85828601611987565b9150509250929050565b611d9081612404565b82525050565b611d9f81612428565b82525050565b6000611db0826122a2565b611dba81856122b8565b9350611dca8185602086016124b0565b611dd38161263e565b840191505092915050565b6000611de9826122a2565b611df381856122c9565b9350611e038185602086016124b0565b80840191505092915050565b611e188161246b565b82525050565b6000611e29826122ad565b611e3381856122d4565b9350611e438185602086016124b0565b611e4c8161263e565b840191505092915050565b6000611e646023836122d4565b9150611e6f8261264f565b604082019050919050565b6000611e876022836122d4565b9150611e928261269e565b604082019050919050565b6000611eaa602b836122d4565b9150611eb5826126ed565b604082019050919050565b6000611ecd601d836122d4565b9150611ed88261273c565b602082019050919050565b6000611ef06026836122d4565b9150611efb82612765565b604082019050919050565b6000611f136025836122d4565b9150611f1e826127b4565b604082019050919050565b6000611f366024836122d4565b9150611f4182612803565b604082019050919050565b6000611f596025836122d4565b9150611f6482612852565b604082019050919050565b6000611f7c601f836122d4565b9150611f87826128a1565b602082019050919050565b611f9b81612454565b82525050565b611faa8161245e565b82525050565b6000611fbc8284611dde565b915081905092915050565b6000602082019050611fdc6000830184611d87565b92915050565b6000604082019050611ff76000830185611d87565b6120046020830184611f92565b9392505050565b60006020820190506120206000830184611d96565b92915050565b600060408201905081810360008301526120408185611da5565b905061204f6020830184611f92565b9392505050565b600060208201905061206b6000830184611e0f565b92915050565b6000602082019050818103600083015261208b8184611e1e565b905092915050565b600060208201905081810360008301526120ac81611e57565b9050919050565b600060208201905081810360008301526120cc81611e7a565b9050919050565b600060208201905081810360008301526120ec81611e9d565b9050919050565b6000602082019050818103600083015261210c81611ec0565b9050919050565b6000602082019050818103600083015261212c81611ee3565b9050919050565b6000602082019050818103600083015261214c81611f06565b9050919050565b6000602082019050818103600083015261216c81611f29565b9050919050565b6000602082019050818103600083015261218c81611f4c565b9050919050565b600060208201905081810360008301526121ac81611f6f565b9050919050565b60006020820190506121c86000830184611f92565b92915050565b60006020820190506121e36000830184611fa1565b92915050565b6000808335600160200384360303811261220657612205612616565b5b80840192508235915067ffffffffffffffff8211156122285761222761260c565b5b6020830192506001820236038313156122445761224361262a565b5b509250929050565b6000612256612267565b90506122628282612515565b919050565b6000604051905090565b600067ffffffffffffffff82111561228c5761228b6125d3565b5b6122958261263e565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600080858511156122f9576122f8612620565b5b8386111561230a5761230961261b565b5b6001850283019150848603905094509492505050565b600061232b82612454565b915061233683612454565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561236b5761236a612546565b5b828201905092915050565b600061238182612454565b915061238c83612454565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156123c5576123c4612546565b5b828202905092915050565b60006123db82612454565b91506123e683612454565b9250828210156123f9576123f8612546565b5b828203905092915050565b600061240f82612434565b9050919050565b600061242182612434565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006124768261247d565b9050919050565b60006124888261248f565b9050919050565b600061249a82612434565b9050919050565b82818337600083830152505050565b60005b838110156124ce5780820151818401526020810190506124b3565b838111156124dd576000848401525b50505050565b600060028204905060018216806124fb57607f821691505b6020821081141561250f5761250e612575565b5b50919050565b61251e8261263e565b810181811067ffffffffffffffff8211171561253d5761253c6125d3565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f6e6c792073797374656d20636f6e74726163742063616e2063616c6c20746860008201527f69732066756e6374696f6e000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6128d381612404565b81146128de57600080fd5b50565b6128ea81612416565b81146128f557600080fd5b50565b61290181612428565b811461290c57600080fd5b50565b61291881612454565b811461292357600080fd5b50565b61292f8161245e565b811461293a57600080fd5b5056fea26469706673582212204d42e573e8cb59940ba988c3d2736334bf1c7b5fcf473cb6e32936128661b33464736f6c63430008070033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    chainID_: PromiseOrValue<BigNumberish>,
    systemContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Staking> {
    return super.deploy(
      name_,
      symbol_,
      chainID_,
      systemContractAddress,
      overrides || {}
    ) as Promise<Staking>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    chainID_: PromiseOrValue<BigNumberish>,
    systemContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      chainID_,
      systemContractAddress,
      overrides || {}
    );
  }
  override attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  override connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
