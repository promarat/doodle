import Logo from "./assets/imgs/Logo.png";
import twitterPng from "./assets/imgs/twitter.png";
import openseaPng from "./assets/imgs/opensea.png";
import discordPng from "./assets/imgs/discord.png";
import mainPng from "./assets/imgs/1.png";
import team1Png from "./assets/imgs/team1.png";
import team2Png from "./assets/imgs/team1.png";
import team3Png from "./assets/imgs/team1.png";
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

function App() {

  const [quantity, setQuantity] = useState(0);

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
              <a className="ml-20" rel="noreferrer" href="https://opensea.io/collection/doodled-punks" target="_blank">
                <img alt="Twitter" src={twitterPng} width="60" height="60"/>
              </a>
              <a className="ml-20" rel="noreferrer" href="https://opensea.io/collection/doodled-punks" target="_blank">
                <img alt="Discord" src={discordPng} width="60" height="60"/>
              </a>
              <a className="ml-20" rel="noreferrer" href="https://opensea.io/collection/doodled-punks" target="_blank">
                <img alt="Twitter" src={openseaPng} width="60" height="60"/>
              </a>
              {/* <button className="connect-button">Connect Wallet</button> */}
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
              <h2 className="block-title">Grow a quality community </h2>
              <p className="block-content">
                We want to bring people together around the 2 best things in the world: Baby Apes + Doodles style. Only Fun and Good vibes in the Doodle Apes Society. 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">First Merch Drop </h2>
              <p className="block-content">
              The Doodle Apes society without IRL merch to flex ?? You trippin. We’re cooking some pieces for holders : Hoodies, Caps… We will share some ideas and designs soon! 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">Airdrops  </h2>
              <p className="block-content">
              Exclusive piece related to the Doodle Apes Society only for our holders. Maybe a secondary collection… 
              </p>
            </div>
            <div className="road-map-block">
              <h2 className="block-title">Community Event </h2>
              <p className="block-content">
              We are the Doodle Apes Society. We need to create something huge! We will organize, create and sponsor IRL and online events! 
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
              <img src={team1Png} width={200} height={200}/>
              <div className="founder">
                  <h3>KBIRD</h3>
                  <p>Co-founder/Marketing</p>
                </div>
              </div>
              <div>
              <img src={team1Png} width={200} height={200}/>
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
