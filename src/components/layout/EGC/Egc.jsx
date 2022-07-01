import React from "react";
import { textAlign } from "@mui/system";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FlipCountdown from "@rumess/react-flip-countdown";
import "./egc.css";

import "./countdown.css";

const data01 = [
  { name: "EGC Holder", value: 100000, fill: "#229e54" },
  { name: "Founders", value: 10000, fill: "#e4a788" },
  { name: "Ecosystem Rewards", value: 300000, fill: "#82ca9d" },
  { name: "Liquidity", value: 90000, fill: "#245838" },

  // console.log()
];

const Egc = () => {
  return (
    <div>
      <section className="earning-section padding-high">
        <div className="container">
          <div className="nft-area2">
            <div
              className="nft-txt-area2  "
              style={{
                width: "100%",
                position: "relative",
                zIndex: "5",
              }}
            >
              <div className="span-txts">
                <p className="span4a-txts strong-font">
                  Egoras Credit-The Utility Token Of Egoras Protocol
                </p>
                <p className="span4b-txts">
                  As a utility token, EGC is required for paying the inventory
                  fees accrued on Loans that have been used to generate eNGN in
                  the Egoras Protocol. its main purpose is to help maintain the
                  stability of eNGN.
                </p>
                <p className="span4b-txts odd-color">
                  {/* <div className="next-claim">
                    NEXT CLAIM IN{" "}
                    <ArrowDownwardIcon className="next-claim-icon" />{" "}
                  </div> */}
                </p>
                {/* <FlipCountdown
                  theme="light"
                  titlePosition="bottom"
                  hideYear
                  hideMonth
                  dayTitle="Days"
                  hourTitle="Hours"
                  minuteTitle="Minutes"
                  secondTitle="Seconds"
                  // size="extra-medium"
                  // hideDay
                  // hideHour
                  // hideMinute
                  // hideSecond
                  // endAt={"2022-12-12 00:00:00"} // Date/Time
                /> */}
                <div className="count-down-section-btns">
                  <a href="https://crypto.egoras.com">
                    <button className="count-down-btn1">
                      Explore Ecosystem
                    </button>
                  </a>
                  <a href="/whitepaper" className="count-down-btn2">
                    Read White Paper
                  </a>
                </div>
                <FlipCountdown
                  className="flip-countdown"
                  titlePosition="bottom"
                  yearTitle="Year"
                  monthTitle="Months"
                  dayTitle="Days"
                  hourTitle="Hours"
                  minuteTitle="Minutes"
                  secondTitle="Seconds"
                  hideYear
                  // hideMonth
                  size="small"
                  endAt={"2022-07-03 00:00:00"}
                />
              </div>
            </div>
            <div
              className="nft-img-area2 position-it"
              style={{ display: "inline-flex", width: "100%" }}
            >
              {/* <div class="eNGN-token-page hero text-center">
                <div class="eNGN-token-page  circle"></div>
                <div class="eNGN-token-page  circle circle2"></div>
                <div class="eNGN-token-page  circle circle3"></div>
                <div class="eNGN-token-page  circle circle4"></div>
                <img
                  src="/img/EGC-LOGO.svg"
                  alt="OUSD coin"
                  class="eNGN-token-page coin place-egc"
                />
              </div> */}

              <img
                src="/img/egc-illustrationa.png"
                alt=""
                // style={{ width: "100%" }}
                className="egc-illustartiona"
              />
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop-token" />
      </section>
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      <div className="houseDivCu">
        <div className="container">
          <div className="secondCu filter2 ">
            <div className="widthAjustBA dis-flex">
              <img
                src="img/vector1.svg"
                alt=""
                width="400"
                className="REWIND"
              />
            </div>
            <div className="widthAjustBA">
              <div className="earn1">Claim Excess eNGN</div>
              <p className="earn3">
                EGC is elementary in the stability of eNGN. It is held in a
                reserve smart-contract and exchanged for eNGN to balance demand
                excess or shortage.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second div term #7bdba1*/}

      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}

      {/* ============= */}
      {/* ============= */}
      {/* ============= */}
      {/* ============= */}

      {/* ============= */}
      {/* ============= */}
      {/* ============= */}
      {/* ============= */}

      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* =================== */}
      {/* third section start */}
      <section className="second-eNGN-token-section">
        <div className="container">
          <div className="nft-area2 reverse">
            <div
              className="nft-img-area2"
              style={{ display: "inline-flex", width: "100%" }}
            >
              <img
                src="/img/earn-egc.svg"
                alt=""
                style={{ width: "75%", margin: "auto" }}
              />
            </div>
            <div className="nft-txt-area2 " style={{ width: "100%" }}>
              <div className="span-txts">
                <p className="span4a-txts">Pay Inventory Fees </p>

                <p className="span4b-txts">
                  Organizations  pays for inventory fees on Egoras protocol with
                  Egoras Credit(EGC)and this means that as the demand for Egoras
                  loans increases so as the demand for Egoras Credit(EGC).
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/blur-drop.png" alt="" className="blurDrop-token" />
      </section>
      {/* third section end */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}

      <section className="chart-review-section">
        <div className="container">
          <div className="row">
            <div class="col-lg-6">
              <h3 className="staked-title">Staked amount by duration</h3>
              <div class="desc">
                Staked EGC is included as part of the circulating supply. You
                can <a href="https://www.egoras.com/stake">stake your EGC</a> on
                egoras.com
              </div>
              <div class="row staked-chart  align-items-center">
                <div className="col-md-5">
                  <PieChart width={100} height={200}>
                    <Pie
                      dataKey="value"
                      data={data01}
                      cx={20}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                    />
                    <Tooltip />
                    {/* <Legend /> */}
                  </PieChart>
                </div>

                <div class="col">
                  <h3 className="chartTitile font-bg"> Token Distribution </h3>
                  <div class="desc">
                    <div className="egc_distr m"> EGR Holders: 100,000EGC </div>
                    <div className="egc_distr m"> Founders: 10,000EGC </div>
                    <div className="egc_distr m">
                      Ecosystem Rewards: 300,000 EGC{" "}
                    </div>
                    <div className="egc_distr m"> Liquidity: 90,000EGC </div>
                  </div>
                </div>
              </div>
              <div class="locked-token-widget">
                <div class="title">Total Supply</div>
                <div class="value">
                  500,000
                  <div class="EGR-label">EGC</div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-5 mt-lg-0">
              <h3 className="staked-title">Token Distribution</h3>
              {/* <div class="desc">
                Circulating supply is calculated as the total supply minus the
                EGR balances of the following wallets:
              </div> */}
              <div class="reserved-wallets mb-0">
                <div class="reserved-wallet">
                  <div class="wallet-name">EGR Holders</div>

                  <div class="wallet-balance tx">100,000EGC</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Founders</div>

                  <div class="wallet-balance tx">10,000EGC</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Ecosystem Rewards</div>

                  <div class="wallet-balance tx">300,000EGC</div>
                </div>

                <div class="reserved-wallet">
                  <div class="wallet-name">Liquidity</div>

                  <div class="wallet-balance tx">90,000EGC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/*third div*/}

      {/* <div className="allNone6">
               <div className="allNone5 filter2">
                   <div style={{width:'45%',flex:'1'}}>
                       <div style={{width:'80%'}}>
                       <div className="allNone"> Elastic supply, stable price</div>
                       <div className="allNone1"> EGC is pegged to the US Dollar. Returns are distributed as additional units of EGC. Supply rebasing happens multiple times per day. See your EGC grow much faster than your USD grows in traditional savings accounts.</div>
                       </div>
                   </div>
                   <div style={{width:'45%',flex:'1'}}>
                       <div style={{width:'80%',marginLeft:'auto'}}>
                           <div style={{width:'40%',textAlign:'center'}}>
                       <img src="img/EGCICON.svg" alt=" " className="REWIND"/>
                       <div className="Random1">54,675.35</div>
                       <div className="Random2" >EGC</div>
                       </div>
                       </div>
                   </div>
               </div>
               <div className="allNone5 allNone78 filter2">
                   <div style={{width:'45%',flex:'1'}}><img src="img/EGC4.svg" alt="" className="REWIND"/></div>
                   <div  style={{width:'45%',flex:'1'}}>
                       <div className="allNone">1:1 backed by other stablecoins</div>
                       <div className="allNone1">EGC is secured by other proven stablecoins like USDT, USDC, and DAI. Capital is further insured by governance tokens issued by platforms like Aave and MakerDAO.</div>
                   </div>
               </div>

               </div>


            <div style={{backgroundColor:'#e6f8ee'}}>
               <div className="allNone6">
              <div className="allNone5 filter2">
                  <div style={{width:'45%',flex:'1'}}>
                      <div style={{width:'85%'}}>
                      <div  className="allNone">Automated yield farming</div>
                      <div className="allNone1"> Automated strategies in transparent EGC smart contracts manage your funds. See exactly how your money is being put to work.</div>
                      </div>
                  </div>
                  <div style={{width:'45%',flex:'1'}}><img src="img/EGC5.svg" alt="" className="REWIND"/></div>
              </div>
              <div className="allNone5 thankWN filter2">
                  <div style={{width:'45%',flex:'1'}}><div ><img src="img/EGCMON.svg" alt="" className="REWIND" /></div></div>
                  <div style={{width:'45%',flex:'1'}}>
                      <div  style={{width:'80%',marginLeft:'auto'}}>
                      <div className="allNone">You always have full control</div>
                      <div className="allNone1">Store and earn EGC with non-custodial Ethereum wallets. Enter and exit EGC whenever you want. There's no minimum holding period or minimum OUSD amount required to earn yields.</div>
                      </div>
                  </div>
              </div>
              <div className="allNone5 filter2">
                  <div>
                      <div className="allNone">Backed by optional insurance</div>
                      <div className="allNone1">Protect your OUSD holdings with smart contract insurance. Optional coverage is provided by Nexus Mutual.</div>
                      <div className="learnMoB">Learn more </div>
                  </div>
                  <div><img src="img/EGCBAG.svg" alt="" className="REWIND" /></div>
              </div>

              </div>
              </div> */}
      {/*fourt div*/}
      {/* <div >
           <div className="BACKED">
               <div className="createdBYCR">Created by cryptocurrency and fintech veterans</div>
               <div className="OriDollar allNone1">
               The Origin Dollar is brought to you by the team at Origin Protocol, which includes serial entrepreneurs, early cryptocurrency investors, early employees at YouTube, engineering managers at Google/Dropbox, and one of the original Paypal co-founders.
               </div>
               <div className="IMGSRC filter2"> 
                   <img src="img/EGC7.svg" alt=" "/>
                   <img src="img/EGC8.svg" alt=" "/>
                   <img src="img/EGC9.svg" alt=" "/>
                   <img src="img/EGC6.svg" alt=" "/>
               </div>
               <div className="meetMe">meet the team</div>
               <hr/>
               <div className="hiringW">We're hiring</div>
               <div className="AREyou allNone1"> Are you an experienced Solidity engineer? Join our team and help shape the future of EGC.</div>
               <div className="ViewJob">View Jobs</div>
               
              
           </div>
           </div>
         
         <div style={{backgroundColor:'#e6f8ee'}}>
           <div className="upto">
           <div className="STAY1">Stay up to date</div>
               <div className="STAY2">Be the first to get updates about EGC, incentive<br/> programs and rewards, and our upcoming transition to<br/> decentralized governance.</div>
               <div><form><div className="STAYFORM"><input type="email" placeholder="enter your email" className="REWardE"/><div className="subScribeBn">Subscribe</div></div></form></div>
           </div>
           </div> */}
      {/* fifth div*/}
      {/* <div className="STAY42">
               <div className="STABLECOIN">The perfect stablecoin for both spending and saving</div>
               <div className="WENT">
                   <div  style={{width:'35%'}}>
                      <div className="ImG"> <img src="img/EGC_icon.svg" alt="" width=""/></div>
                       <div className="beatTrade">Beat traditional savings and money markets</div>
                       <div style={{textAlign:'center'}} className="allNone1">At an estimated APY of 9.47%, EGC earnings trounce traditional financial instruments.</div>
                   </div>
                   <div style={{width:'35%'}}>
                      <div className="ImG"> <img src="img/EGC_icon1.svg" alt="" width="" /></div>
                       <div className="beatTrade">Instantaneous peer-to-peer transfers</div>
                       <div style={{textAlign:'center'}} className="allNone1">Send EGC to pay your friends and<br/> family instead of using Venmo or Paypal. They’ll earn yield immediately.</div>
                   </div>
         
               </div>
               <div className="WENT">
               <div style={{width:'35%'}}>
                      <div   className="ImG"> <img src="img/EGC_icon2.svg" alt="" width=""/></div>
                       <div className="beatTrade">Remittances without fees</div>
                        <div style={{textAlign:'center'}} className="allNone1">Need to send money to China or the Philippines? Your recipients get OUSD without losing the average of 6.7% on fees..</div>
                   </div>
                   
                   <div  style={{width:'35%'}}>
                      <div   className="ImG"> <img src="img/EGC_icon3.svg" alt=""/></div> 
                       <div className="beatTrade">A superior store of value</div>
                       <div style={{textAlign:'center'}} className="allNone1">EGC is an ideal store of value for users in countries with hyperinflationary economies like Venezuela and Argentina.</div>
                   </div>
               </div>
               
           </div> */}

      {/* <div style={{backgroundColor:'#e6f8ee',paddingBottom:'20px'}}>
                 <div className="STAY42"> */}
      {/* <div className="WENT">
                   <div style={{width:'35%'}}>
                      <div  className="ImG"> <img src="img/EGC_icon4.svg" alt=""/></div>
                       <div className="beatTrade">DeFi meets decentralized commerce</div>
                        <div style={{textAlign:'center'}} className="allNone1">EGC will be accepted by hundreds of sellers on the Origin Dshop network and peer-to-peer marketplace.</div>
                   </div>
                   <div style={{width:'35%'}}>
                      <div  className="ImG"><img src="img/EGC_icon5.svg" alt=""/></div> 
                       <div className="beatTrade">A better unit of account</div>
                       <div style={{textAlign:'center'}} className="allNone1">Easily track your DeFi earnings without complicated spreadsheets and custom dashboards.</div>
                   </div>
               </div> */}
      {/*six div*/}
      {/* <div>
               <div className="STAY3">Follow our development</div>
               <div >
                   <div  className="STAY60 filter2">
                      <div className="ICONSWE"><img src="img/EGCICONS.svg" alt=" " style={{marginRight:'10px'}}/>Jion us on Discord</div>
                      <div className="ICONSWE"><img src="img/EGCICONS2.svg"  alt=" " style={{marginRight:'10px'}}/>Check out our GitHub</div>
                      <div className="ICONSWE"><img src="img/EGCICONS3.svg"  alt=" " style={{marginRight:'10px'}}/>View the documentation</div>
                   </div>
                   <hr/>
                   <div className="STARTEARN">Start earning with EGC in just a few minutes</div>
                   <div className="BTNEGC">Get EGC</div>

               </div>
           </div> */}
      {/* </div>

           </div> */}
    </div>
  );
};

export default Egc;
