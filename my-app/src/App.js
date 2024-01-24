import React, { Component,useState } from 'react';
import './App.css';
import Web3 from 'web3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Form from './components/Form';
import Marketplace from './abi/Marketplace.json';
import Home from './Pages/Home';
import Signin from './components/Signin';
import Header from './components/Header';
import { Dashboard } from '@mui/icons-material';
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      orderCount: 0,
      energypurchase: [],
      loading: true
    }

    this.SellOrder = this.SellOrder.bind(this)
    this.BuyOrder = this.BuyOrder.bind(this)
  }

 

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    //alert("initialise blockchain") 
    //await this.loadBlockchainData()
  }

  //window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545',{
      //gasLimit: 10000000,
    //}));
  async loadWeb3() {
   if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
     await window.ethereum.enable()
      
    }
   else if (window.web3) {
     window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async initialiseblockchain(){
    let provider = window.ethereum;
    if (typeof provider !== "undefined") {
      await provider.request({
        method: "eth_requestAccounts"
      });
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      //setWalletAccount(account);

      console.log(account);
    } else {
      console.log("Non-ethereum browser  detatched. Please install Metamask");
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //const accounts = await web3.eth.getAccounts()
    //alert(accounts[0])
    this.setState({ account: accounts[0],otheraccount:accounts[1] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace = new web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const orderCount = await marketplace.methods.orderCount().call()
      //alert(orderCount)
      this.setState({ orderCount })
      // Load products
      for (var i = 1; i <= orderCount; i++) {
        const product = await marketplace.methods.energypurchase(i).call()
        this.setState({
          energypurchase: [...this.state.energypurchase, product]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

    

    
    SellOrder(energyUnits, price) {
    this.setState({ loading: true })
    //const gasLimit = 10000000;
    this.state.marketplace.methods.SellOrder(energyUnits, price).send({ from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  async BuyOrder(id, price) {
    //alert(id)    to do
    //alert(this.state.account)
    //alert(this.state.otheraccount)
    this.setState({ loading: true })

    this.state.marketplace.methods.BuyOrder(id).send({ from:this.state.account,value:price,gasLimit: 500000 })
    .then('receipt', (receipt) => {
      this.setState({ loading: false })
    }).catch(err=>alert(err))
  }
  /*  async BuyOrder(id, price) {
    //alert(id)    to do
    //alert(this.state.account)
    //alert(this.state.otheraccount)
    this.setState({ loading: true })

    this.state.marketplace.methods.BuyOrder(id).send({ from:this.state.account,value:3*10**18,gasLimit: 500000 })
    .then('receipt', (receipt) => {
      this.setState({ loading: false })
    }).catch(err=>alert(err))
  } */

render(){

  return (
    <div>
       <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
      {/* <Route  path="/header" component={<Header/>} /> */}
      {/* <Route path="/header" element={<Header />} /> */}

        <Route path='/form' element={<Form/>}/>
        <Route path='/signin' element={<Signin/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
        <Route path='/sidebar' element={<Sidebar
            energypurchase={this.state.energypurchase}
            SellOrder={this.SellOrder}
            BuyOrder={this.BuyOrder}
          />} />

      </Routes>
     
    </Router>
   
    
    </div>
  );
}

}


export default App;
