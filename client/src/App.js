import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import AllSimpleViews from './Components/AllSimpleViews/AllSimpleViews';
import ExpandedViewCard from './Components/ExpandedViewCard/ExpandedViewCard';
import PopupCard from './Components/PopupCard/PopupCard';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Modal from './Components/Modal/Modal';


//gilles 
require('dotenv').config()

const Web3 = require('web3')
const axios = require('axios')
const moment = require('moment-timezone')
const numeral = require('numeral')
const _ = require('lodash')

const CONTRACT_ADDRESS = "0xf202b7F8c45A91D0a4FC5530504b62f1f1Bc264c"

console.log('REACT_APP_RPC_URL', process.env.REACT_APP_RPC_URL, 'REACT_APP_PRIVATE_KEY', process.env.REACT_APP_PRIVATE_KEY)
//  WEB3 CONFIG
const web3 = new Web3("https://kovan.infura.io/v3/dab4ad30f66346bf9eeca8a731cc89d5")
web3.eth.accounts.wallet.add("0xb93f68250da8380a65bc89b8337dd8a8fe723cadc72a39e0eb7aab3cdae7ce52")

  
 // SMART CONTRACTS
const ONE_SPLIT_ABI = [{"inputs":[{"internalType":"contract IOneSplit","name":"impl","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newImpl","type":"address"}],"name":"ImplementationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_AAVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_BANCOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_BDAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CHAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_COMPOUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_BINANCE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_COMPOUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_SYNTHETIX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_USDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_CURVE_Y","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_FULCRUM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_IEARN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_KYBER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_OASIS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_SMART_TOKEN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_UNISWAP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_DISABLE_WETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_KYBER_BANCOR_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_KYBER_OASIS_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_KYBER_UNISWAP_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_MULTI_PATH_DAI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_MULTI_PATH_ETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_MULTI_PATH_USDC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLAG_ENABLE_UNISWAP_COMPOUND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"parts","type":"uint256"},{"internalType":"uint256","name":"featureFlags","type":"uint256"}],"name":"getExpectedReturn","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oneSplitImpl","outputs":[{"internalType":"contract IOneSplit","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IOneSplit","name":"impl","type":"address"}],"name":"setNewImpl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"toToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"},{"internalType":"uint256","name":"featureFlags","type":"uint256"}],"name":"swap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const ONE_SPLIT_ADDRESS = "0xf202b7F8c45A91D0a4FC5530504b62f1f1Bc264c"
const oneSplitContract = new web3.eth.Contract(ONE_SPLIT_ABI, ONE_SPLIT_ADDRESS);

const ERC_20_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]

const TRADER_ABI = [{"constant":false,"inputs":[],"name":"getWeth","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_distribution","type":"uint256[]"}],"name":"oneSplitSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"SAI","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"currencies","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_fromAmount","type":"uint256"},{"name":"_0xData","type":"bytes"},{"name":"_1SplitMinReturn","type":"uint256"},{"name":"_1SplitDistribution","type":"uint256[]"}],"name":"trade","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_tokenAddress","type":"address"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"USDC","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"address"},{"components":[{"name":"owner","type":"address"},{"name":"number","type":"uint256"}],"name":"","type":"tuple"},{"name":"data","type":"bytes"}],"name":"callFunction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"WETH","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"tokenToMarketId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_calldataHexString","type":"bytes"}],"name":"zrxSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"loan","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"flashToken","type":"address"},{"name":"flashAmount","type":"uint256"},{"name":"arbToken","type":"address"},{"name":"zrxData","type":"bytes"},{"name":"oneSplitMinReturn","type":"uint256"},{"name":"oneSplitDistribution","type":"uint256[]"}],"name":"getFlashloan","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"approveWeth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_fromAmount","type":"uint256"},{"name":"_0xData","type":"bytes"},{"name":"_1SplitMinReturn","type":"uint256"},{"name":"_1SplitDistribution","type":"uint256[]"}],"name":"arb","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"DAI","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}]
const TRADER_ADDRESS = CONTRACT_ADDRESS

const traderContract = new web3.eth.Contract(TRADER_ABI, TRADER_ADDRESS);
const FILL_ORDER_ABI = {"constant":false,"inputs":[{"components":[{"internalType":"address","name":"makerAddress","type":"address"},{"internalType":"address","name":"takerAddress","type":"address"},{"internalType":"address","name":"feeRecipientAddress","type":"address"},{"internalType":"address","name":"senderAddress","type":"address"},{"internalType":"uint256","name":"makerAssetAmount","type":"uint256"},{"internalType":"uint256","name":"takerAssetAmount","type":"uint256"},{"internalType":"uint256","name":"makerFee","type":"uint256"},{"internalType":"uint256","name":"takerFee","type":"uint256"},{"internalType":"uint256","name":"expirationTimeSeconds","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"makerAssetData","type":"bytes"},{"internalType":"bytes","name":"takerAssetData","type":"bytes"},{"internalType":"bytes","name":"makerFeeAssetData","type":"bytes"},{"internalType":"bytes","name":"takerFeeAssetData","type":"bytes"}],"internalType":"struct LibOrder.Order","name":"order","type":"tuple"},{"internalType":"uint256","name":"takerAssetFillAmount","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"fillOrder","outputs":[{"components":[{"internalType":"uint256","name":"makerAssetFilledAmount","type":"uint256"},{"internalType":"uint256","name":"takerAssetFilledAmount","type":"uint256"},{"internalType":"uint256","name":"makerFeePaid","type":"uint256"},{"internalType":"uint256","name":"takerFeePaid","type":"uint256"},{"internalType":"uint256","name":"protocolFeePaid","type":"uint256"}],"internalType":"struct LibFillResults.FillResults","name":"fillResults","type":"tuple"}],"payable":true,"stateMutability":"payable","type":"function"}

var  totalDefiPulseTokens;
  const myText = 'Hello' ;


// ASSET ADDRESSES
const ASSET_ADDRESSES = {
  DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
  WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' ,//6 decimals
  USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  LINK: '0x514910771af9ca656af840dff83e8264ecf986ca', //6
  COMP: '0xc00e94cb662c3520282e6f5717214004a7f26888', //41
  YFI:  '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',//16
  UNI:  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',//5
  LEND: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',//40
  AAVE: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
  BAND:  '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',//46
  SUSHI:'0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',//18
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',//NO
  BUSD: '0x4fabb145d64652a948d72533023f6e7a623c7c53',//7
  PAX: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',//48
  REN: '0x408e41876cccdc0f92210600ef50372656052a38',//45
  CRV: '0xd533a949740bb3306d119cc777fa900ba034cd52',//29
  UMA:  '0x04fa0d235c4abf4bcf4787af4cf447de572ef828', //NO
  BAL: '0xba100000625a3754423978a60c9317c58a424e3d',//NO
  OMG: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',//26
  TUSD: '0x0000000000085d4780b73119b644ae5ecd22b376',//NO
  ZRX: '0xe41d2489571d322189246dafa5ebde1f4699f498',//NO
  BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',//NO
  NMR: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',//NO
  KNC:  '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',//NO
  SNT: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',//NO
  ENJ: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',//NO
  ANT: '0x960b236a07cf122663c4303350609a66a7b288c0',//NO
  AMPL: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',//NO
  REPV2: '0x221657776846890989a759ba2973e427dff5c9bb',//NO
  KEEP: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec',//NO
  BNT: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',//NO
  LPT: '0x58b6a8a3302369daec383334672404ee733ab239',//NO
  FOAM: '0x4946fcea7c692606e8908002e55a582af44ac121',//NO
  BZRX: '0x56d811088235f11c8920698a204a5010a788f4b3',//NO
  DONUT: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',//NO
  SNX:  '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',//NO
  GNO:'0x6810e776880c02933d47db1b9fc05908e5386b96',//NO
  SUSD:'0x57ab1ec28d129707052df4df418d58a2d46d5f51',//NO
  SAI:'0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',//NO
  CVL: '0x01fa555c97d7958fa6f771f3bbd5ccd508f81e22',//NO
  DTH:'0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190',//NO
  GEN:'0x543ff227f64aa17ea132bf9886cab5db55dcaddf',//NO
  MANA:'0x0f5d2fb29fb7d3cfee444a200298f468908cc942',//NO
  LOOM:'0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',//NO
  SPANK:'0x42d6622dece394b54999fbd73d108123806f6a18',//NO
  REQ:'0x8f8221afbb33998d8584a2b05749ba73c37a938a',//NO
  MATIC:'0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',//NO
  LRC:'0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',//NO
  RDN:'0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6',//NO

}


// TRADING FUNCTIONS
const ONE_SPLIT_PARTS = 10
const ONE_SPLIT_FLAGS = 0
async function fetchOneSplitData(args) {
  var data
  const { fromToken, toToken, amount } = args
  try {
     data = await oneSplitContract.methods.getExpectedReturn(fromToken, toToken, amount, ONE_SPLIT_PARTS, ONE_SPLIT_FLAGS).call()
  } catch (error) {
   console.log('fetchOneSplitData problem!')
    console.error(error)
  }
  return(data)
}

async function checkRate() {

  //var oneSplitData;

  try {

  // Fetch 1Split Data
   const getProject = await axios.get(`https://data-api.defipulse.com/api/v1/defipulse/api/GetProjects?api-key=db84e1509032bc4cc4f96d1c8791d92b667d28adc606bda9480c9a616310`)
   const getProjectCategory1 = getProject.data[0].category;
   const getProjectCategory2 = getProject.data[1].category;
   const getProjectCategory3 = getProject.data[2].category;
   const getProjectCategory4 = getProject.data[3].category;
//   const myGasPrice = (ethGasStationData.fastest / 10) * 1.0 //adding 10%

  console.log('getProjectCategory',getProject.data.length, getProjectCategory1, getProjectCategory2, getProjectCategory3, getProjectCategory4)

  var i;
  for (i=0; i < getProject.data.length;i++) {
  console.log(getProject.data[i].category, getProject.data[i].name, getProject.data[i].value.tvl.USD.value)

  }


  this.setState({myText})

   totalDefiPulseTokens = getProject.data.length;
   console.log('totalDefiPulseTokens',totalDefiPulseTokens)
   this.setState({totalDefiPulseTokens});

   const wethLinkRate = await axios.get(`https://api.1inch.exchange/v2.0/quote?fromTokenAddress=${ASSET_ADDRESSES['WETH']}&toTokenAddress=${ASSET_ADDRESSES['LINK']}&amount=10000000000000000000`)
   const toTokenAmnt = wethLinkRate.data.toTokenAmount


 
   // This becomes the outputAssetAmount
    //  outputAssetAmount = oneSplitData.returnAmount
    console.log('toTokenAmnt', toTokenAmnt)
 }  
 catch (error) {
   console.log('calling fetchOneSplitData is the problem!')
    console.error(error)

 }
}

function App() {
  checkRate()
  return (
    <Router >
      <div className="App">
      <Navbar />
      <Switch >
      <Route path='/expandedView'>
        < ExpandedViewCard />

        </Route>
        
        <Route path='/' >

        <Header content={myText}/>
      < AllSimpleViews />
      {/* <Modal /> */}
     {/* < PopupCard />*/}

        </Route>

       


      </Switch>

    
     
    
      
    </div>

    </Router>
    
  );
}

export default App;
