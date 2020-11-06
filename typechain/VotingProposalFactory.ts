/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { VotingProposal } from "./VotingProposal";

export class VotingProposalFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    vl: string,
    tl: string,
    overrides?: Overrides
  ): Promise<VotingProposal> {
    return super.deploy(vl, tl, overrides || {}) as Promise<VotingProposal>;
  }
  getDeployTransaction(
    vl: string,
    tl: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(vl, tl, overrides || {});
  }
  attach(address: string): VotingProposal {
    return super.attach(address) as VotingProposal;
  }
  connect(signer: Signer): VotingProposalFactory {
    return super.connect(signer) as VotingProposalFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingProposal {
    return new Contract(address, _abi, signerOrProvider) as VotingProposal;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vl",
        type: "address",
      },
      {
        internalType: "address",
        name: "tl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancelVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "castVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastProposalId",
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
        name: "",
        type: "address",
      },
    ],
    name: "latestProposalIds",
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
    name: "proposalMaxOperations",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "createTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "againstVotes",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "canceled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "signatures",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
    ],
    name: "propose",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "queue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "state",
    outputs: [
      {
        internalType: "enum VotingProposal.ProposalState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162003588380380620035888339818101604052810190620000379190620000d8565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000167565b600081519050620000d2816200014d565b92915050565b60008060408385031215620000ec57600080fd5b6000620000fc85828601620000c1565b92505060206200010f85828601620000c1565b9150509250929050565b600062000126826200012d565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001588162000119565b81146200016457600080fd5b50565b61341180620001776000396000f3fe60806040526004361061009c5760003560e01c8063490145c811610064578063490145c8146101b557806374cb3041146101f25780637bdbe4d01461021d578063bacbe2da14610248578063ddf0b00914610271578063fe0d94c11461029a5761009c565b8063013cf08b146100a157806315373e3d146100e957806317977c61146101125780633e4f49e61461014f57806340e58ee51461018c575b600080fd5b3480156100ad57600080fd5b506100c860048036038101906100c391906123f7565b6102b6565b6040516100e09c9b9a99989796959493929190612ffe565b60405180910390f35b3480156100f557600080fd5b50610110600480360381019061010b9190612449565b610480565b005b34801561011e57600080fd5b5061013960048036038101906101349190612222565b61048f565b6040516101469190612fe3565b60405180910390f35b34801561015b57600080fd5b50610176600480360381019061017191906123f7565b6104a7565b6040516101839190612d68565b60405180910390f35b34801561019857600080fd5b506101b360048036038101906101ae91906123f7565b610675565b005b3480156101c157600080fd5b506101dc60048036038101906101d7919061224b565b61093b565b6040516101e99190612fe3565b60405180910390f35b3480156101fe57600080fd5b50610207610ed5565b6040516102149190612fe3565b60405180910390f35b34801561022957600080fd5b50610232610edb565b60405161023f9190612fe3565b60405180910390f35b34801561025457600080fd5b5061026f600480360381019061026a91906123f7565b610ee4565b005b34801561027d57600080fd5b50610298600480360381019061029391906123f7565b610ef1565b005b6102b460048036038101906102af91906123f7565b6111c0565b005b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561038e5780601f106103635761010080835404028352916020019161038e565b820191906000526020600020905b81548152906001019060200180831161037157829003601f168201915b505050505090806003018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561042c5780601f106104015761010080835404028352916020019161042c565b820191906000526020600020905b81548152906001019060200180831161040f57829003601f168201915b50505050509080600801549080600901549080600a01549080600b01549080600c01549080600d01549080600e0160009054906101000a900460ff169080600e0160019054906101000a900460ff1690508c565b61048b3383836113d4565b5050565b60026020528060005260406000206000915090505481565b600081600054101580156104bb5750600082115b6104fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f190612dc3565b60405180910390fd5b600060016000848152602001908152602001600020905080600e0160009054906101000a900460ff1615610532576002915050610670565b600081600901541415610549576000915050610670565b6202a300816009015401600142031015610567576001915050610670565b80600d015481600c0154111580610585575080600a015481600c0154105b15610594576003915050610670565b600081600b015414156105ab576004915050610670565b80600b01546001420310156105c4576005915050610670565b80600b015460014203101580156105e757506202a30081600b0154016001420311155b801561060857506000151581600e0160019054906101000a900460ff161515145b15610617576006915050610670565b80600b0154600142031015801561063a57506202a30081600b0154016001420311155b801561065b57506001151581600e0160019054906101000a900460ff161515145b1561066a576008915050610670565b60079150505b919050565b6000610680826104a7565b905060088081111561068e57fe5b81600881111561069a57fe5b14156106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d290612d83565b60405180910390fd5b600760088111156106e857fe5b8160088111156106f457fe5b1415610735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072c90612ec3565b60405180910390fd5b60006001600084815260200190815260200160002090503373ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146107de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d590612f03565b60405180910390fd5b600181600e0160006101000a81548160ff02191690831515021790555060005b816004018054905081101561093557600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663591fcdfe83600401838154811061085a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600501848154811061089457fe5b90600052602060002001548560060185815481106108ae57fe5b906000526020600020018660070186815481106108c757fe5b9060005260206000200187600b01546040518663ffffffff1660e01b81526004016108f6959493929190612cec565b600060405180830381600087803b15801561091057600080fd5b505af1158015610924573d6000803e3d6000fd5b5050505080806001019150506107fe565b50505050565b60006064600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632082b4d16040518163ffffffff1660e01b815260040160206040518083038186803b1580156109a757600080fd5b505afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190612420565b816109e657fe5b04600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cbf8eda933600142036040518363ffffffff1660e01b8152600401610a47929190612c39565b60206040518083038186803b158015610a5f57600080fd5b505afa158015610a73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a979190612420565b1015610ad8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acf90612e03565b60405180910390fd5b85518751148015610aea575084518751145b8015610af7575083518751145b610b36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2d90612f83565b60405180910390fd5b600087511415610b7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7290612ee3565b60405180910390fd5b610b83610edb565b87511115610bc6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bbd90612f23565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114610cd5576000610c1d826104a7565b905060016008811115610c2c57fe5b816008811115610c3857fe5b1415610c79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7090612f43565b60405180910390fd5b60006008811115610c8657fe5b816008811115610c9257fe5b1415610cd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cca90612e63565b60405180910390fd5b505b600060016000540190506000600160008381526020019081526020016000209050818160000181905550338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085816002019080519060200190610d5a929190611b2e565b5084816003019080519060200190610d73929190611b2e565b5089816004019080519060200190610d8c929190611bae565b5088816005019080519060200190610da5929190611c38565b5087816006019080519060200190610dbe929190611c85565b5086816007019080519060200190610dd7929190611ce5565b506001420381600801819055508160008190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166371ef7663336202a30080016040518363ffffffff1660e01b8152600401610e91929190612c39565b600060405180830381600087803b158015610eab57600080fd5b505af1158015610ebf573d6000803e3d6000fd5b5050505060005493505050509695505050505050565b60005481565b6000600a905090565b610eee338261165c565b50565b60046008811115610efe57fe5b610f07826104a7565b6008811115610f1257fe5b14610f52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4990612da3565b60405180910390fd5b60006001600083815260200190815260200160002090506000151581600e0160009054906101000a900460ff16151514610fc1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb890612e43565b60405180910390fd5b60006202a3008083600901540101905060005b82600401805490508110156111b1576111a4836004018281548110610ff557fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684600501838154811061102f57fe5b906000526020600020015485600601848154811061104957fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110e75780601f106110bc576101008083540402835291602001916110e7565b820191906000526020600020905b8154815290600101906020018083116110ca57829003601f168201915b50505050508660070185815481106110fb57fe5b906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111995780601f1061116e57610100808354040283529160200191611199565b820191906000526020600020905b81548152906001019060200180831161117c57829003601f168201915b5050505050866118b3565b8080600101915050610fd4565b508082600b0181905550505050565b600560088111156111cd57fe5b6111d6826104a7565b60088111156111e157fe5b14611221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121890612de3565b60405180910390fd5b6000600160008381526020019081526020016000209050600181600e0160016101000a81548160ff02191690831515021790555060005b81600401805490508110156113cf57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630825f38f8360050183815481106112b457fe5b90600052602060002001548460040184815481106112ce57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685600501858154811061130857fe5b906000526020600020015486600601868154811061132257fe5b9060005260206000200187600701878154811061133b57fe5b9060005260206000200188600b01546040518763ffffffff1660e01b815260040161136a959493929190612cec565b6000604051808303818588803b15801561138357600080fd5b505af1158015611397573d6000803e3d6000fd5b50505050506040513d6000823e3d601f19601f820116820180604052508101906113c191906123b6565b508080600101915050611258565b505050565b600160088111156113e157fe5b6113ea836104a7565b60088111156113f557fe5b14611435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142c90612fa3565b60405180910390fd5b6000600160008481526020019081526020016000209050600081600f0160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000160009054906101000a900460ff1680156114c457508215158160020160009054906101000a900460ff16151514155b611503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114fa90612f63565b60405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cbf8eda98785600901546040518363ffffffff1660e01b8152600401611566929190612c62565b60206040518083038186803b15801561157e57600080fd5b505afa158015611592573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b69190612420565b90508160000160009054906101000a900460ff16156115da576115d9868661165c565b5b83156115fb576115ee83600c015482611a89565b83600c0181905550611612565b61160983600d015482611a89565b83600d01819055505b60018260000160006101000a81548160ff021916908315150217905550808260010181905550838260020160006101000a81548160ff021916908315150217905550505050505050565b6001600881111561166957fe5b611672826104a7565b600881111561167d57fe5b146116bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b490612fa3565b60405180910390fd5b6000600160008381526020019081526020016000209050600081600f0160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cbf8eda98685600901546040518363ffffffff1660e01b815260040161177c929190612c62565b60206040518083038186803b15801561179457600080fd5b505afa1580156117a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cc9190612420565b90508160000160009054906101000a900460ff1661181f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181690612ea3565b60405180910390fd5b8160020160009054906101000a900460ff16156118515761184483600c015482611ade565b83600c0181905550611868565b61185f83600d015482611ade565b83600d01819055505b60008260000160006101000a81548160ff0219169083151502179055506000826001018190555060008260020160006101000a81548160ff0219169083151502179055505050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f2b06537868686868660405160200161190a959493929190612c8b565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161193c9190612d4d565b60206040518083038186803b15801561195457600080fd5b505afa158015611968573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198c9190612364565b156119cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c390612e23565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a66f90186868686866040518663ffffffff1660e01b8152600401611a2f959493929190612c8b565b602060405180830381600087803b158015611a4957600080fd5b505af1158015611a5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a81919061238d565b505050505050565b600080828401905083811015611ad4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611acb90612e83565b60405180910390fd5b8091505092915050565b600082821115611b23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b1a90612fc3565b60405180910390fd5b818303905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611b6f57805160ff1916838001178555611b9d565b82800160010185558215611b9d579182015b82811115611b9c578251825591602001919060010190611b81565b5b509050611baa9190611d45565b5090565b828054828255906000526020600020908101928215611c27579160200282015b82811115611c265782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611bce565b5b509050611c349190611d45565b5090565b828054828255906000526020600020908101928215611c74579160200282015b82811115611c73578251825591602001919060010190611c58565b5b509050611c819190611d45565b5090565b828054828255906000526020600020908101928215611cd4579160200282015b82811115611cd3578251829080519060200190611cc3929190611b2e565b5091602001919060010190611ca5565b5b509050611ce19190611d62565b5090565b828054828255906000526020600020908101928215611d34579160200282015b82811115611d33578251829080519060200190611d23929190611d86565b5091602001919060010190611d05565b5b509050611d419190611e06565b5090565b5b80821115611d5e576000816000905550600101611d46565b5090565b5b80821115611d825760008181611d799190611e2a565b50600101611d63565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611dc757805160ff1916838001178555611df5565b82800160010185558215611df5579182015b82811115611df4578251825591602001919060010190611dd9565b5b509050611e029190611d45565b5090565b5b80821115611e265760008181611e1d9190611e72565b50600101611e07565b5090565b50805460018160011615610100020316600290046000825580601f10611e505750611e6f565b601f016020900490600052602060002090810190611e6e9190611d45565b5b50565b50805460018160011615610100020316600290046000825580601f10611e985750611eb7565b601f016020900490600052602060002090810190611eb69190611d45565b5b50565b600081359050611ec98161337f565b92915050565b600082601f830112611ee057600080fd5b8135611ef3611eee826130f7565b6130c6565b91508181835260208401935060208101905083856020840282011115611f1857600080fd5b60005b83811015611f485781611f2e8882611eba565b845260208401935060208301925050600181019050611f1b565b5050505092915050565b600082601f830112611f6357600080fd5b8135611f76611f7182613123565b6130c6565b9150818183526020840193506020810190508360005b83811015611fbc5781358601611fa288826120fc565b845260208401935060208301925050600181019050611f8c565b5050505092915050565b600082601f830112611fd757600080fd5b8135611fea611fe58261314f565b6130c6565b9150818183526020840193506020810190508360005b83811015612030578135860161201688826121a4565b845260208401935060208301925050600181019050612000565b5050505092915050565b600082601f83011261204b57600080fd5b813561205e6120598261317b565b6130c6565b9150818183526020840193506020810190508385602084028201111561208357600080fd5b60005b838110156120b3578161209988826121f8565b845260208401935060208301925050600181019050612086565b5050505092915050565b6000813590506120cc81613396565b92915050565b6000815190506120e181613396565b92915050565b6000815190506120f6816133ad565b92915050565b600082601f83011261210d57600080fd5b813561212061211b826131a7565b6130c6565b9150808252602083016020830185838301111561213c57600080fd5b612147838284613316565b50505092915050565b600082601f83011261216157600080fd5b815161217461216f826131a7565b6130c6565b9150808252602083016020830185838301111561219057600080fd5b61219b838284613325565b50505092915050565b600082601f8301126121b557600080fd5b81356121c86121c3826131d7565b6130c6565b915080825260208301602083018583830111156121e457600080fd5b6121ef838284613316565b50505092915050565b600081359050612207816133c4565b92915050565b60008151905061221c816133c4565b92915050565b60006020828403121561223457600080fd5b600061224284828501611eba565b91505092915050565b60008060008060008060c0878903121561226457600080fd5b600087013567ffffffffffffffff81111561227e57600080fd5b61228a89828a01611ecf565b965050602087013567ffffffffffffffff8111156122a757600080fd5b6122b389828a0161203a565b955050604087013567ffffffffffffffff8111156122d057600080fd5b6122dc89828a01611fc6565b945050606087013567ffffffffffffffff8111156122f957600080fd5b61230589828a01611f52565b935050608087013567ffffffffffffffff81111561232257600080fd5b61232e89828a016121a4565b92505060a087013567ffffffffffffffff81111561234b57600080fd5b61235789828a016121a4565b9150509295509295509295565b60006020828403121561237657600080fd5b6000612384848285016120d2565b91505092915050565b60006020828403121561239f57600080fd5b60006123ad848285016120e7565b91505092915050565b6000602082840312156123c857600080fd5b600082015167ffffffffffffffff8111156123e257600080fd5b6123ee84828501612150565b91505092915050565b60006020828403121561240957600080fd5b6000612417848285016121f8565b91505092915050565b60006020828403121561243257600080fd5b60006124408482850161220d565b91505092915050565b6000806040838503121561245c57600080fd5b600061246a858286016121f8565b925050602061247b858286016120bd565b9150509250929050565b61248e816132ce565b82525050565b61249d81613269565b82525050565b6124ac8161327b565b82525050565b6124bb81613287565b82525050565b60006124cc82613231565b6124d68185613247565b93506124e6818560208601613325565b6124ef8161335a565b840191505092915050565b600081546001811660008114612517576001811461253d57612581565b607f60028304166125288187613247565b955060ff198316865260208601935050612581565b6002820461254b8187613247565b955061255685613207565b60005b8281101561257857815481890152600182019150602081019050612559565b80880195505050505b505092915050565b612592816132e0565b82525050565b60006125a38261323c565b6125ad8185613258565b93506125bd818560208601613325565b6125c68161335a565b840191505092915050565b6000815460018116600081146125ee576001811461261457612658565b607f60028304166125ff8187613258565b955060ff198316865260208601935050612658565b600282046126228187613258565b955061262d8561321c565b60005b8281101561264f57815481890152600182019150602081019050612630565b80880195505050505b505092915050565b600061266d601f83613258565b91507f43616e6e6f742063616e63656c2065786563757465642070726f706f73616c006000830152602082019050919050565b60006126ad602e83613258565b91507f50726f706f73616c2063616e206f6e6c7920626520717565756564206966206960008301527f74206973207375636365656465640000000000000000000000000000000000006020830152604082019050919050565b6000612713601383613258565b91507f696e76616c69642070726f706f73616c206964000000000000000000000000006000830152602082019050919050565b6000612753602d83613258565b91507f50726f706f73616c2063616e206f6e6c7920626520657865637574656420696660008301527f20697420697320717565756564000000000000000000000000000000000000006020830152604082019050919050565b60006127b9601983613258565b91507f55736572206d757374206f776e206174206c65617374203125000000000000006000830152602082019050919050565b60006127f9602583613258565b91507f70726f706f73616c20616374696f6e20616c726561647920717565756564206160008301527f74206574610000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061285f602083613258565b91507f43616e6e6f7420717565756520612063616e63656c65642070726f706f73616c6000830152602082019050919050565b600061289f604083613258565b91507f4f6e65206c6976652070726f706f73616c207065722070726f706f7365722c2060008301527f666f756e6420616e20616c7265616479207761726d75702070726f706f73616c6020830152604082019050919050565b6000612905601183613258565b91507f6164646974696f6e206f766572666c6f770000000000000000000000000000006000830152602082019050919050565b6000612945601e83613258565b91507f43616e6e6f742063616e63656c206966206e6f7420766f7465642079657400006000830152602082019050919050565b6000612985601e83613258565b91507f43616e6e6f742063616e63656c20657870697265642070726f706f73616c00006000830152602082019050919050565b60006129c5601483613258565b91507f4d7573742070726f7669646520616374696f6e730000000000000000000000006000830152602082019050919050565b6000612a05602f83613258565b91507f4f6e6c79207468652070726f706f73616c2063726561746f722063616e20636160008301527f6e63656c20612070726f706f73616c00000000000000000000000000000000006020830152604082019050919050565b6000612a6b601a83613258565b91507f546f6f206d616e7920616374696f6e73206f6e206120766f74650000000000006000830152602082019050919050565b6000612aab604083613258565b91507f4f6e65206c6976652070726f706f73616c207065722070726f706f7365722c2060008301527f666f756e6420616e20616c7265616479206163746976652070726f706f73616c6020830152604082019050919050565b6000612b11601983613258565b91507f416c726561647920766f7465642074686973206f7074696f6e000000000000006000830152602082019050919050565b6000612b51602c83613258565b91507f50726f706f73616c2066756e6374696f6e20696e666f726d6174696f6e20617260008301527f697479206d69736d6174636800000000000000000000000000000000000000006020830152604082019050919050565b6000612bb7601083613258565b91507f566f74696e6720697320636c6f736564000000000000000000000000000000006000830152602082019050919050565b6000612bf7601583613258565b91507f7375627472616374696f6e20756e646572666c6f7700000000000000000000006000830152602082019050919050565b612c33816132c4565b82525050565b6000604082019050612c4e6000830185612485565b612c5b6020830184612c2a565b9392505050565b6000604082019050612c776000830185612494565b612c846020830184612c2a565b9392505050565b600060a082019050612ca06000830188612494565b612cad6020830187612c2a565b8181036040830152612cbf8186612598565b90508181036060830152612cd381856124c1565b9050612ce26080830184612c2a565b9695505050505050565b600060a082019050612d016000830188612494565b612d0e6020830187612c2a565b8181036040830152612d2081866125d1565b90508181036060830152612d3481856124fa565b9050612d436080830184612c2a565b9695505050505050565b6000602082019050612d6260008301846124b2565b92915050565b6000602082019050612d7d6000830184612589565b92915050565b60006020820190508181036000830152612d9c81612660565b9050919050565b60006020820190508181036000830152612dbc816126a0565b9050919050565b60006020820190508181036000830152612ddc81612706565b9050919050565b60006020820190508181036000830152612dfc81612746565b9050919050565b60006020820190508181036000830152612e1c816127ac565b9050919050565b60006020820190508181036000830152612e3c816127ec565b9050919050565b60006020820190508181036000830152612e5c81612852565b9050919050565b60006020820190508181036000830152612e7c81612892565b9050919050565b60006020820190508181036000830152612e9c816128f8565b9050919050565b60006020820190508181036000830152612ebc81612938565b9050919050565b60006020820190508181036000830152612edc81612978565b9050919050565b60006020820190508181036000830152612efc816129b8565b9050919050565b60006020820190508181036000830152612f1c816129f8565b9050919050565b60006020820190508181036000830152612f3c81612a5e565b9050919050565b60006020820190508181036000830152612f5c81612a9e565b9050919050565b60006020820190508181036000830152612f7c81612b04565b9050919050565b60006020820190508181036000830152612f9c81612b44565b9050919050565b60006020820190508181036000830152612fbc81612baa565b9050919050565b60006020820190508181036000830152612fdc81612bea565b9050919050565b6000602082019050612ff86000830184612c2a565b92915050565b600061018082019050613014600083018f612c2a565b613021602083018e612494565b8181036040830152613033818d612598565b90508181036060830152613047818c612598565b9050613056608083018b612c2a565b61306360a083018a612c2a565b61307060c0830189612c2a565b61307d60e0830188612c2a565b61308b610100830187612c2a565b613099610120830186612c2a565b6130a76101408301856124a3565b6130b56101608301846124a3565b9d9c50505050505050505050505050565b6000604051905081810181811067ffffffffffffffff821117156130ed576130ec613358565b5b8060405250919050565b600067ffffffffffffffff82111561311257613111613358565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561313e5761313d613358565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561316a57613169613358565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561319657613195613358565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156131c2576131c1613358565b5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff8211156131f2576131f1613358565b5b601f19601f8301169050602081019050919050565b60008190508160005260206000209050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000613274826132a4565b9050919050565b60008115159050919050565b6000819050919050565b600081905061329f8261336b565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006132d9826132f2565b9050919050565b60006132eb82613291565b9050919050565b60006132fd82613304565b9050919050565b600061330f826132a4565b9050919050565b82818337600083830152505050565b60005b83811015613343578082015181840152602081019050613328565b83811115613352576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b6009811061337c5761337b613358565b5b50565b61338881613269565b811461339357600080fd5b50565b61339f8161327b565b81146133aa57600080fd5b50565b6133b681613287565b81146133c157600080fd5b50565b6133cd816132c4565b81146133d857600080fd5b5056fea26469706673582212205ee4ff1447873f9de5d5c7ba33986527cfeba94d6ec53f954a127602e4a8c6dc64736f6c63430007030033";
