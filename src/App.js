import Web3 from "web3";
import Logo from "./assets/imgs/Logo.png";
import twitterPng from "./assets/imgs/twitter.png";
import openseaPng from "./assets/imgs/opensea.png";
import discordPng from "./assets/imgs/discord.png";
import mainPng from "./assets/imgs/Hide.jpg";
import team1Png from "./assets/imgs/team1.png";
import team2Png from "./assets/imgs/team2.jpg";
import team3Png from "./assets/imgs/team3.jpg";
import './App.css';
import WOW from 'wowjs';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useEffect, useState } from "react";

var web3;
var nftContract;
var address;
var chainId;

function App() {
  const [quantity, setQuantity] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if(window.ethereum != null) {
      const web3 = new Web3(window.ethereum);
      nftContract = null;
      await window.ethereum.request({method: 'eth_chainId'}).then(data => {
        chainId = data;
      });
      console.log(chainId);
      // if(chainId == '0x4') {
        await window.ethereum.request({method: 'eth_requestAccounts'}).then((data) => {
          address = data[0];
          setWalletAddress(address);
          console.log(address);
          var minAddr = address.substr(0,6) + "..." + address.substr(address.length - 4);
          nftContract = {"inputs":[{"internalType":"uint256","name":"chosenAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"};
        });
      // } else {
      //   alert('Please change the network to Rinkeby and try again...')
      // }
    } else {
      alert('Can\'t Find Metamask Wallet. Please install it and reload again to mint NFT.');
    }
  }

   useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <div className="App">
      <div className="container-fluid main-container">
        <div className="page-container">
          <header className="header"> 
            <img src={Logo} width={420} height={140}/>
            <div className="button-wrap">
              <a className="ml-20" rel="noreferrer" href="https://twitter.com/doodleapes_nft" target="_blank">
                <img alt="Twitter" src={twitterPng} width="60" height="60"/>
              </a>
              <a className="ml-20" rel="noreferrer" href="https://discord.gg/PyFgjGNtGd" target="_blank">
                <img alt="Discord" src={discordPng} width="60" height="60"/>
              </a>
              <a className="ml-20" rel="noreferrer" href="https://opensea.io/collection/doodled-punks" target="_blank">
                <img alt="Twitter" src={openseaPng} width="60" height="60"/>
              </a>
              {walletAddress ? 
              <p className="address-text">{walletAddress}</p> :
              <button onClick={connectWallet} className="connect-button">Connect Wallet</button>
              }
              
            </div>
          </header>

          <main>
            <div className="mintform">
              <div className="mt-2 mainPng">
                <img alt="" aria-hidden="true" src={mainPng} width="220" height="220"/>
              </div>
              <h1 className="form-title">GRAB YOURS</h1>
              <h2 className="sub-title">2500 at 0.05 Max 5 per transactions</h2>
              <div className="max-title">Enter Quantity</div>
              <input className="quantity-input" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={0}/>
              <button type="button" class="mint-button" disabled="">MINT</button>
            </div>
          </main>
          <div className="road-map">
            <h1 className="page-block-title">ROADMAP</h1>
            <div className="road-map-block">
              <h2 className="block-title">CREATE A QUALITY COMMUNITY - 0%</h2>
              <p className="block-content">
                Community and mutual support are the most important things for us! This is the main reason why we started this project! We want to bring people together around the 2 best things in the world: Apes + Doodles. Only Fun and Good vibes in the Doodle Apes Society. 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">FIRST MERCH DROP - 25%</h2>
              <p className="block-content">
              The Doodle Apes society without IRL merch to flex ?? You trippin. We’re cooking some pieces for holders : Hoodies, Caps… We will share some ideas and designs soon! 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">ETH AIRDROP + NFT GIVEAWAY - 50% </h2>
              <p className="block-content">
              It’s time to send some gifts straight to your wallet! we're going to host a big giveaway on Discord through mini-games that will be really fun! There will be 10 Doodle Apes to win and 10x 0.1ETH to win! 20 total winners! You just need to own 1 Doodle ape to join the Giveaway. 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">D.A.S BANK - 75%</h2>
              <p className="block-content">
              D.A.S Bank will be a community Wallet! We will send 100% of the royalties to the bank and those ETH will be airdropped between all the holders through giveaway and event. D.A.S is all about community first! 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">LEGENDARY DOODLE APES - 100%</h2>
              <p className="block-content">
              As you know the Doodle Apes society is all about dreams, hope and community! So we want to help our members to achieve their dreams that’s why we created the 5 legendary Doodle Apes!
              </p>
            </div>
          </div>

          <div className="faq">
            <h1 className="page-block-title">FAQ</h1>
            <div className="faq-wrap">
              <Accordion 
                allowMultipleExpanded={true}
                allowZeroExpanded={false}
              >
                <AccordionItem uuid={1}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="f-item accordion__button">
                          What’s an NFT ?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        A NFT is a ‘Non Fungible Token”. It means it’s a unique and rare digital item. You’re able to buy it, own it and trade it.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem  uuid={2}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="se-item accordion__button">
                        How to buy a Doodle Apes ?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        It’s very simple ! You need to be connected to your Metamask and have some ETH on it.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem  uuid={3}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="th-item accordion__button">
                        How much does a Doodle Apes cost?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        We really want to keep this project affordable for everybody thi is why we chose a mint price of 0.07 ETH
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={4}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="fo-item accordion__button">
                        How many Doodle Apes can I mint ? 
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Max 5 per Wallet 
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid={5}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="fi-item accordion__button">
                        If I buy one, where will it be ?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                        Your Doodle Apes will be stored in your ETH address (the one with which you logged in). You’ll be able to see him on Opensea! 
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            </div>
          </div>

          <div className="team">
            <h1 className="page-block-title">DOODLE APES TEAM</h1>

            <div className="team-content">
              <div>
                <img src={team1Png} width={200} height={200}/>
                <div className="founder">
                  <h3>OBI D.A.S</h3>
                  <p>Founder/Artist</p>
                </div>
              </div>
              <div>
              <img src={team2Png} width={200} height={200}/>
              <div className="founder">
                  <h3>KBIRD</h3>
                  <p>Co-founder/Marketing</p>
                </div>
              </div>
              <div>
              <img src={team3Png} width={200} height={200}/>
              <div className="founder">
                  <h3>Andreii</h3>
                  <p>Project Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="contracts">
            <h1 className="page-block-title">OUR</h1>
            <h1 className="page-block-title">CONTRACTS</h1>

            <div className="contracts-content">
              <a>Verified NFT Smart Contract</a>
              <a>Verified Staking Smart Contract</a>
              <a>Verified Coin Smart Contract</a>
            </div>
          </div>
          
          
          <div className="footer page-block">
            <div>
            </div>
            <div>
              <p>
                Doodled Punks is marked with CCO 1.0
              </p>
            </div>
          </div> */}
        </div>
        
      </div>
    </div>
  );
}

export default App;
