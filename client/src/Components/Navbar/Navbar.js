import React,{useState} from 'react';
import './Navbar.css';
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import {getWeb3} from '../../Utils/Utils';
// import {auth} from './firebase';

function Navbar() {

    // const [{basket,user},dispatch] = useStateValue();
    const [web3,setWeb3]=useState(undefined);
    const [account,setAccount]=useState('0x');
    async  function connectWallet(){
        // alert("Hello button");

        const web3=await getWeb3();

        if(web3!==undefined ){
            console.log("**@ web3 is , ",web3);
            console.log("**@ type of web3 is , ",typeof web3);
            setWeb3(web3);
            const accounts=await web3.eth.getAccounts();
           let  account=accounts[0];
            setAccount(account);
        }
        else{
        alert("No Metamask found , please install metamask plugin and connect your wallet");
        }
       
    }

    


    return (
        <div className='navbar'>
        <a to='/'>
        <img className='navbar_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

        </a>

       
       <div className="navbar_option">
       <span id="account" className="navbar_otionLineOne">Wallet <strong>{account}</strong></span>

       </div>
      

        <div className="navbar_nav">
       
        <div className="navbar_option" >
        <button className="navbar_optionLineOne btn btn-primary" onClick={connectWallet}>Connect Wallet
        </button>
        </div>
        
        
         <a href='/'>
        <div className="navbar_option" >
        <span className="navbar_optionLineOne">Home
        </span>
        </div>
        </a>

        <a href='/'>
        <div className="navbar_option" >
        <span className="navbar_optionLineOne">What is TOP5SWAP ?
        </span>
        </div>
        </a>

        <a href='/'>
        <div className="navbar_option" >
        <span className="navbar_optionLineOne">Holdings
        </span>
        </div>
        </a>


       

       

       
       

       

        </div>
            
        </div>
    )
}

export default Navbar
