const MOAC_SECRET = "a12c30c0794fbe70f51198b4cb137be4c331b21880e2be58875208b925cda842";
const MOAC_ADDRESS = "ae832592b6d697cd6b3d053866bfe5f334e7c667";
const MOAC_TO_ADDRESS = "0x533243557dfdc87ae5bda885e22db00f87499971";
const MOAC_SMART_CONTRACT_ADDRESS = "0x71666bf0db3501a149e33b7fdaa76b8cc1fa9d90";
const SNRC_CONTRACT_ADDRESS = "0x1b9bae18532eeb8cd4316a20678a0c43f28f0ae2"
const JINGTUM_ADDRESS = "jpgWGpfHz8GxqUjz5nb6ej8eZJQtiF6KhH";

const MOCK_NODE = "http://localhost";
const MOCK_NONCE = 12;
const MOCK_GAS = 2000;
const MOCK_GAS_LIMIT = 200000;
const MOCK_GAS_PRICE = "20000000000";
const MOCK_DEPOSIT_VALUE = 0.03;
const MOCK_DEPOSIT_VALUE_STR = "30000000000000000";
const MOCK_TX_SIGN = "0xf8710c808504a817c80083030d409471666bf0db3501a149e33b7fdaa76b8cc1fa9d90876a94d74f43000081aa808081eaa06fd2730f9953c24ef00883fb70d4a0a8b8d7f6e4cc4084e41e122e8c0f3e5226a069713ed63fac62bd82163c069550bfb6d96faa667268269ec8e3c017af14e719"
const MOCK_TX_SIGN2 = "0xf8780c808504a817c80083030d4094533243557dfdc87ae5bda885e22db00f874999718f05c71d3c089740a6a8ab2c0000000000808081e9a0e92d2008475e04fd582575d7ed7adc06b39b51d397d75a43769cfbe2079a81d5a0525970057c4821370f03fa67c54e9ab37b63576add9f52424c1fc282575b81b4"
const MOCK_HASH = "0x06f34e37909f654c89e204dbb63701a7a373970a82d5333fcbdc48ade4868eaf"
const MOCK_ERC20_TX_SIGN1 = "0xf9014e0c808504a817c80083030d409471666bf0db3501a149e33b7fdaa76b8cc1fa9d9080b8e4cc2c516400000000000000000000000000000000000000000000000000000000000000800000000000000000000000001b9bae18532eeb8cd4316a20678a0c43f28f0ae2000000000000000000000000000000000000000000000000006a94d74f43000006f34e37909f654c89e204dbb63701a7a373970a82d5333fcbdc48ade4868eaf00000000000000000000000000000000000000000000000000000000000000226a706757477066487a38477871556a7a356e6236656a38655a4a51746946364b6848000000000000000000000000000000000000000000000000000000000000808081e9a093f9d6b60240a77257d81d66a851570d7f0ec9878802dacc464a6175f86cb915a0327da33e46a5ec57c5833d7702aa4ab7d6e5c395b3895e936f7f7717c45084ec"
const MOCK_TRANSFER_TX_SIGN = "0xf86a0c808504a817c80083030d40941b9bae18532eeb8cd4316a20678a0c43f28f0ae28081aa808081e9a0a84b7bda6a9f611029abc8d2c094ca46c90eb76f6ea56f51c46009a9efb76434a005d5881a34235796af45c48369a25a779d94c60fd266a3c9f6a2573bd58c31a3"
const MOCK_HASH_TRANSACTION = {
  blockHash: "0xc5278e5bdb546e27ef9cd828ce40657db8b6e5a53f9bbb23602118e4b7da1481",
  blockNumber: 2746104,
  from: MOAC_ADDRESS,
  gas: MOCK_GAS,
  gasPrice: MOCK_GAS_PRICE,
  hash: MOCK_HASH,
  input: "0xaa",
  nonce: MOCK_NONCE,
  r: "0x0",
  s: "0x0",
  shardingFlag: 0,
  syscnt: "0x65",
  to: MOAC_TO_ADDRESS,
  transactionIndex: 0,
  v: "0x0",
  value: 0
}
const MOCK_HASH_TRANSACTION_RECEIPT = {
  blockHash: "0xc5278e5bdb546e27ef9cd828ce40657db8b6e5a53f9bbb23602118e4b7da1481",
  blockNumber: 2746104,
  contractAddress: "0x0000000000000000000000000000000000000065",
  cumulativeGasUsed: 0,
  from: MOAC_ADDRESS,
  gasUsed: MOCK_GAS,
  logs: [],
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  status: "0x1",
  to: MOAC_TO_ADDRESS,
  transactionHash: MOCK_HASH,
  transactionIndex: 0
}
const MOCK_TX = {
  from: MOAC_ADDRESS,
  nonce: '0xc',
  gasPrice: '0x4a817c800',
  gasLimit: '0x30d40',
  to: MOAC_TO_ADDRESS,
  value: '0x5c71d3c089740a6a8ab2c00000000',
  data: '0x00',
  chainId: '0x63',
  shardingFlag: "0x0",
  systemContract: "0x0",
  via: "0x"
}

const MOAC_ERC20_NAME = "JC Coin";
const MOAC_ERC20_SYMBOL = "JCC";
const MOAC_ERC20_DECIMALS = 18;
const MOAC_ERC20_ADDRESS = "0x9bd4810a407812042f938d2f69f673843301cfa6";
const MOAC_SPENDER_ADDRESS = "0x09344477fdc71748216a7b8bbe7f2013b893def8";
const MOCK_ERC20_TX_SIGN = "0xf8ae0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b844a9059cbb000000000000000000000000533243557dfdc87ae5bda885e22db00f87499971000000000000000000000000000000000000000000000000006a94d74f430000808081e9a075a99eb9a23140406c9ae102841bc1d3c57e5c005ae68bf2811c00e9c926b56ba008b0f87104e401642c26958870c67fd2ae965f1d760589f17dfb2a9e946b48a3"
const MOCK_ERC20_APPROVE_HASH = "0xf8ae0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b844095ea7b300000000000000000000000009344477fdc71748216a7b8bbe7f2013b893def8000000000000000000000000000000000000000000000000006a94d74f430000808081eaa03e0628f15b3d57dead71d767d4d5e16859cbf47f6ef082c08ac471379834a31ca05cbd2a52616e1bf5937eefa4f63d41223c7ba18aa82e84a40ca6905fc74b47ce"
const MOCK_ERC20_TRANSFERFROM_HASH = "0xf8ce0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b86423b872dd00000000000000000000000009344477fdc71748216a7b8bbe7f2013b893def80000000000000000000000000000000000000000000000000000000000000NaN000000000000000000000000000000000000000000000000006a94d74f430000808081e9a000b90bbb178712dbe09dd10b70a7235f3c9a8edad5c8683bead0e6d0223a72cea06e97dbc1cd6d24222547431c1a5bab12a34a26e4d39151c591a9faa371724de3"

const MOAC_ERC721_NAME = "Golden Coin Token";
const MOAC_ERC721_SYMBOL = "GCT";
const MOAC_ERC721_ADDRESS = "0x9bd4810a407812042f938d2f69f673843301cfa6";
const MOAC_ERC721_TOKENURI = "https://jccdex.cn/";
const MOAC_ERC721_TOKEN1_ID = "1";
const MOAC_ERC721_TOKEN1_URI = "https://jccdex.cn/1";
const MOAC_ERC721_TOKEN2_ID = "2";
const MOAC_ERC721_TOKEN2_URI = "https://jccdex.cn/2";
const MOCK_ERC721_TX_MINT = "0xf9010e0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b8a4d3fc9864000000000000000000000000533243557dfdc87ae5bda885e22db00f8749997100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000001368747470733a2f2f6a63636465782e636e2f3100000000000000000000000000808081eaa0323c15eb720fe69657be1b3a0ea8c3d1b5f5fb14f68ef5aa8b49e170f0d7c26ca00976e0814bf3a4b85cf2cbe739d60de7cb63cadbce000a5d35f27f9b9ba4862e"
const MOCK_ERC721_TX_MINT_CALLDATA = "0xd3fc9864000000000000000000000000533243557dfdc87ae5bda885e22db00f8749997100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000001368747470733a2f2f6a63636465782e636e2f3100000000000000000000000000";
const MOCK_ERC721_TX_BURN = "0xf8ae0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b8449dc29fac000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001808081e9a0ba1a4fb7a7b6bdda96763de95dbb6e22a769d0d8a021ee06bb5c33c4a69a1507a00d282bd9639331d312dc14df225cbc31bbbf320a1e61a7808ed302904efde967"
const MOCK_ERC721_TX_BURN_CALLDATA = "0x9dc29fac000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001";
const MOCK_ERC721_TX_SAFETRANSFERFROM = "0xf8ce0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b86442842e0e000000000000000000000000ae832592b6d697cd6b3d053866bfe5f334e7c667000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001808081eaa0aefd86be95369597529fa5b9524bc5620b9e6d1e4a9574f52800e39fbb792deda02678d5bbee33ff4da3ebefa065b235692fcaf185fc82832b9a2d09ef9b506be3"
const MOCK_ERC721_TX_SAFETRANSFERFROM_CALLDATA = "0x42842e0e000000000000000000000000ae832592b6d697cd6b3d053866bfe5f334e7c667000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001";
const MOCK_ERC721_TX_APPROVED = "0xf8ae0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b844095ea7b3000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001808081e9a08713dd8d06dceb958d0602f883495e72e97fa85f301904fc485a5d1e5d422464a069d4c28183c989b9024842204b7416ab361935211c6de407f11fd89e6ff19010"
const MOCK_ERC721_TX_APPROVED_CALLDATA = "0x095ea7b3000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001";
const MOCK_ERC721_TX_SETAPPROVEDALL = "0xf8ae0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b844a22cb465000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001808081eaa0279a0ad9222fe204ed78b161d50a0954353679296ad5dd09a9a637fc934abe5ea052fa270b28a33250b1d994f104d8fcd0e7cf3fbbcd3dcfd8c24636d7d6885183"
const MOCK_ERC721_TX_SETAPPROVEDALL_CALLDATA = "0xa22cb465000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001";
const MOCK_ERC721_TX_TRANSFERFROM = "0xf8ce0c808504a817c80083030d40949bd4810a407812042f938d2f69f673843301cfa680b86423b872dd000000000000000000000000ae832592b6d697cd6b3d053866bfe5f334e7c667000000000000000000000000533243557dfdc87ae5bda885e22db00f874999710000000000000000000000000000000000000000000000000000000000000001808081eaa0c37e639f1beb670be4e456d3919fbba60ad339643684e57e0745b1f3a34e9a0ea059a23d43fe995340b3efed11721ddffd28d669c2fa9cd41b818db64143c81aaa"

module.exports = {
  MOAC_ADDRESS,
  MOAC_TO_ADDRESS,
  MOAC_SECRET,
  MOAC_SMART_CONTRACT_ADDRESS,
  SNRC_CONTRACT_ADDRESS,
  JINGTUM_ADDRESS,
  MOAC_ERC20_NAME,
  MOAC_ERC20_SYMBOL,
  MOAC_ERC20_DECIMALS,
  MOAC_SPENDER_ADDRESS,
  MOAC_ERC20_ADDRESS,
  MOCK_ERC20_TX_SIGN,
  MOCK_ERC20_APPROVE_HASH,
  MOCK_ERC20_TRANSFERFROM_HASH,
  MOCK_NODE,
  MOCK_NONCE,
  MOCK_GAS,
  MOCK_GAS_LIMIT,
  MOCK_GAS_PRICE,
  MOCK_DEPOSIT_VALUE,
  MOCK_DEPOSIT_VALUE_STR,
  MOCK_TX_SIGN,
  MOCK_TX_SIGN2,
  MOCK_HASH,
  MOCK_HASH_TRANSACTION,
  MOCK_HASH_TRANSACTION_RECEIPT,
  MOCK_ERC20_TX_SIGN1,
  MOCK_TRANSFER_TX_SIGN,
  MOCK_TX,
  MOAC_ERC721_NAME,
  MOAC_ERC721_SYMBOL,
  MOAC_ERC721_ADDRESS,
  MOAC_ERC721_TOKENURI,
  MOAC_ERC721_TOKEN1_ID,
  MOAC_ERC721_TOKEN1_URI,
  MOAC_ERC721_TOKEN2_ID,
  MOAC_ERC721_TOKEN2_URI,
  MOCK_ERC721_TX_MINT,
  MOCK_ERC721_TX_MINT_CALLDATA,
  MOCK_ERC721_TX_BURN,
  MOCK_ERC721_TX_BURN_CALLDATA,
  MOCK_ERC721_TX_SAFETRANSFERFROM,
  MOCK_ERC721_TX_SAFETRANSFERFROM_CALLDATA,
  MOCK_ERC721_TX_APPROVED,
  MOCK_ERC721_TX_APPROVED_CALLDATA,
  MOCK_ERC721_TX_SETAPPROVEDALL,
  MOCK_ERC721_TX_SETAPPROVEDALL_CALLDATA,
  MOCK_ERC721_TX_TRANSFERFROM
}