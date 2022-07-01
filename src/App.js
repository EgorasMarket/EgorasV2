import React, { Fragment, useEffect, useState } from 'react';
import Select from 'react-select';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/layout/home/Home';
import Opd from './components/layout/home/Opd';
import Aos from 'aos';
// import ScrollAnimation from "react-animate-on-scroll";
import AdminSignup from './components/layout/Admin/AdminSignup/AdminSignup';
import 'aos/dist/aos.css';
import axios from 'axios';
import { connect } from 'react-redux';
import Market from './components/layout/Home2/MarketPage/Market';
import { API_URL2 } from './actions/types';
// import Aos from "aos";
// import "aos/dist/aos.css";

////////////////---UI---///////////////
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
//import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
//import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from '@web3-react/frame-connector';
import { Web3Provider } from '@ethersproject/providers';
import { formatEther } from '@ethersproject/units';

import { useEagerConnect, useInactiveListener } from './hooks';
import {
  injected,
  // network,
  // walletconnect,
  // walletlink,
  // ledger,
  // trezor,
  // frame,
  // authereum,
  // fortmatic,
  // portis,
  // squarelink,
  // torus
} from './connectors';

// let ConnectorNames {
//   //Injected: 'Injected',
//   // Network = 'Network',
//   // WalletConnect = 'WalletConnect',
//   // WalletLink = 'WalletLink',
//   // Ledger = 'Ledger',
//   // Trezor = 'Trezor',
//   // Frame = 'Frame',
//   // Authereum = 'Authereum',
//   // Fortmatic = 'Fortmatic',
//   // Portis = 'Portis',
//   // Squarelink = 'Squarelink',
//   // Torus = 'Torus'
// }

// Redux
import { Provider } from 'react-redux';
import store from './store';
import AllProductsDisplayPage from './components/layout/Home2/AllProductsDisplayPage/AllProductsDisplayPage.jsx';
import './css/App.css';
import './css/Dark.css';
import './css/apexcharts.css';
import LoginSignup from './components/layout/Home2/Login/LoginSignup';
// import setAuthToken from "./utils/setAuthToken";
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import { loadAdminUser } from './actions/adminAuth';
import Header from './components/layout/Home2/NavBar/Header.js';
// import Header from "./components/layout/Home2/NavBar/Header2.js";
import Footer from './components/layout/Home2/Footer/Footer';
// import { Header } from './components/layout/parts/Header';
import ItemDetailsPage from './components/layout/Home2/item_details_page/ItemDetailsPage.jsx';
import Loan from './components/layout/home/Loan';
import Terms from './components/layout/home/Terms';
import Privacy from './components/layout/Home2/PrivacyPolicy/Privacy';
import Createloan from './components/layout/uploads/Createloan';
// import Createloan2 from "./components/layout/uploads/Createloan2.js";
import Createloan2 from './components/layout/uploads/Createloan2.js';
import Companyreg from './components/layout/uploads/Companyreg';

import PrivateRoute from './components/routing/PrivateRoute';
import Companies from './components/layout/companies/Companies';
import Details from './components/layout/companies/Details';
import Request from './components/layout/requests/Request';
// import Login from "./components/auth/Login";
import PhonesCatPagDuplicate from './components/layout/Home2/Dashboard/DashboardPages/CategoryPages/PhonesCatPagDuplicate';
import Categories from './components/layout/categories/Categories';
import Status from './components/layout/status/Status';
import TermsAndConditions from './components/layout/Home2/Terms&Condition/TermsAndConditions';
import TokenEGR from './components/layout/Home2/tokens/TokenEGR';
import TokenEUSD from './components/layout/Home2/tokens/TokenEUSD';
import NewHome from './components/layout/home/NewHome';
// import About from './components/layout/home/About';
import TokenMetrics from './components/layout/home/TokenMetrics';
import AddUploader from './components/layout/uploads/addUploader';
// import Login from "./components/auth/Login";
import Login from './components/layout/Home2/Login/Login';
// import Signup from "./components/layout/Home2/Signup/Signup";

import Signup from './components/layout/Home2/Signup/Signup';
// import Wallet
// import Walle
import CategoryDisplayPage from './components/layout/Home2/MarketPage/CategoryDisplayPage';

import Newhome2 from './components/layout/home/Newhome2';
import Landing from './components/layout/Home2/Landing/Landing';
import Activation from './components/layout/Home2/Activation/Activation';
import LoanDetails from './components/layout/LoanDetails/LoanDetails';
import Admin from './components/layout/Admin/Admin';
import About from './components/layout/Home2/About/About';
import Documentation from './components/layout/documentation/documentation';
import Documentation2 from './components/layout/documentation/documentation2';
import Documentation3 from './components/layout/documentation/documentation3';
import Documentation4 from './components/layout/documentation/documentation4';
import Documentation5 from './components/layout/documentation/documentation5';
import Documentation6 from './components/layout/documentation/documentation6';
import Documentation7 from './components/layout/documentation/documentation7';
import Documentation8 from './components/layout/documentation/documentation8';
import Documentation9 from './components/layout/documentation/documentation9';
import Documentation10 from './components/layout/documentation/documentation10';
import Documentation11 from './components/layout/documentation/documentation11';
import Documentation12 from './components/layout/documentation/documentation12';
import Documentation13 from './components/layout/documentation/documentation13';
import Documentation14 from './components/layout/documentation/documentation14';
import Documentation15 from './components/layout/documentation/documentation15';
import Documentation16 from './components/layout/documentation/documentation16';
import Documentation17 from './components/layout/documentation/documentation17';
import Documentation18 from './components/layout/documentation/documentation18';
import Documentation19 from './components/layout/documentation/documentation19';
import Documentation1 from './components/layout/documentation/documentationSideTabs';
import Dashboard from './components/layout/Home2/Dashboard/Dashboard';
import Explore_Loans from './components/layout/Explore_Loan/explore_loans';
import Savings from './components/layout/Home2/Savings/Savings';
// import ItemDetailsPage from "./components/layout/Home2/item_details_page/ItemDetailsPage";
import ProductDetailPage from './components/layout/Home2/MarketPage/ProductDetailPage';
import HomeUpdate from './components/layout/HomeUpdate/HomeUpdate';
// import HomeUpdate from "./components/layout/HomeUpdate/HomeUpdate2";
import Explore_Loans_Page from './components/layout/Explore_Loan/exploreLoanSection5';
import Explore_Loans_Page1 from './components/layout/Explore_Loan/exploreLoanSection7';
import Explore_Loans_Page2 from './components/layout/Explore_Loan/exploreLoanSection9';
import Explore_Loans_Page3 from './components/layout/Explore_Loan/exploreLoanSection10';
import Explore_Loans_Page4 from './components/layout/Explore_Loan/exploreLoanSection11';
import Explore_Loans_Page5 from './components/layout/Explore_Loan/exploreLoanSection12';
// import Egc from "./components/layout/EGC/Egc";
// import Egc from "./components/layout/EGC/Egc.jsx";
import Egc from './components/layout/EGC/Egc.jsx';
// import MarketHome from "./components/layout/Home2/EgorasMarket/MarketHome";

import Item_details_main from './components/layout/Home2/item_details_page/Item_details_main';
import See_ALL_Category from './components/layout/Home2/item_details_page/seeAllCate';
import AdminLogin from './components/layout/Admin/AdminSignup/AdminLogin';
import Whitepaper from './components/layout/Home2/Whitepaper/Whitepaper';
import PrivateRoute2 from './components/routing/PrivateRoute2';
import PrivateRoute3 from './components/routing/PrivateRoute3';
import ResetPassword from './components/layout/Home2/PasswordReset/ResetPassword';
import ValidateLogin from './components/layout/Home2/Login/ValidateLogin';
import Referal from './components/layout/Home2/Login/Referal';
import NotFoundPage from './components/layout/Home2/PageNotFound/NotFoundPage';

// import ItemDetailsPage from "./components/layout/Home2/item_details_page/ItemDetailsPage.jsx";
if (localStorage.token) {
  setAuthToken(localStorage.token);
  ////console.log("setAuthToken");
}

const App = () => {
  // const currentPage = window.location.pathname;
  const [adminLocate, setAdminLocate] = useState('');

  useEffect(async () => {
    localStorage.setItem('xrate', 414);
    Aos.init({});
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      await axios
        // .get('https://geolocation-db.com/json/', null, config)
        .get(API_URL2 + '/geo-location', null, config)
        .then((data) => {
          console.log(data.data.payload.city, 'The Country');

          localStorage.setItem(
            'origin',
            data.data.payload.country_name
          );
        });
    } catch (err) {
      //console.log(err, "Call from exchange rate");
    }
  }, []);

  function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }

  // useEffect(() => {
  //   Aos.init({});
  // }, []);

  const [intitiated, SetIntitiated] = useState(false);
  const [isTokenMetrics, SetIsTokenMetrics] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    //console.log(intitiated);
    localStorage.setItem('toogle', !intitiated);
    SetIntitiated((intitiated) => !intitiated);
  };

  useEffect(() => {
    let toggleState;
    if (localStorage.getItem('toogle')) {
      if (localStorage.getItem('toogle') == 'true') {
        toggleState = true;
      } else {
        toggleState = false;
      }
    } else {
      toggleState = false;
    }
    SetIntitiated((intitiated) => toggleState);
  }, []);
  const currentPage = window.location.pathname;
  // //console.log(currentPage);
  useEffect(() => {
    if (currentPage == '/token-metrics') {
      SetIsTokenMetrics(true);
      //console.log("/token-metrics");
    }
  }, []);

  useEffect(() => {
    const myArr = currentPage.split('/');
    //console.log(myArr[1]);
    if (myArr[1] === 'super_admin') {
      setAdminLocate('super_admin');
      // //console.log("super_admin");
      store.dispatch(loadAdminUser());
    } else if (myArr[1] === 'dashboard') {
      setAdminLocate('dashboard');
      // //console.log("dashboard");
      store.dispatch(loadUser());
    } else if (myArr[1] === 'products') {
      setAdminLocate('dashboard');
      // //console.log("dashboard");
      store.dispatch(loadUser());
    } else if (myArr[1] === 'savings') {
      setAdminLocate('dashboard');
      // //console.log("dashboard");
      store.dispatch(loadUser());
    }
  });

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Router>
          <div
            id="timeToggle"
            className={`toggle ${intitiated ? 'dark-mode' : ''} `}
          >
            <Fragment>
              <Header />

              {/* <Header onClick={handleChange} intitiated={intitiated} /> */}
              {/* {isTokenMetrics == false ? (
              ) : null} */}
              {/* <Route exact path='/' component={Home} /> */}

              {/* <section className=''> */}
              <section>
                <Switch>
                  <Route exact path="/" component={HomeUpdate} />

                  <Route
                    exact
                    path="/activation/:id"
                    component={Activation}
                  />
                  <Route
                    exact
                    path="/password/reset/:id"
                    component={ResetPassword}
                  />
                  <Route exact path="/savings" component={Savings} />
                  <Route exact path="/market" component={Market} />

                  {/* <Route
                    exact
                    path="/products/details/:id"
                    component={Item_details_main}
                  /> */}
                  <Route exact path="/loan" component={Newhome2} />
                  <Route
                    exact
                    path="/validator"
                    component={Landing}
                  />
                  {/* <Route exact path='/loan/details/:id' component={Loan} /> */}
                  <Route
                    exact
                    path="/loan-details/:id"
                    component={LoanDetails}
                  />
                  {/* <Route
                    exact
                    path="/products/categories/:category"
                    component={PhonesCatPagDuplicate}
                  /> */}
                  <Route
                    exact
                    path="/companies/details/:id"
                    component={Details}
                  />
                  {/* <Route
                    exact
                    path="/signup/super_admin"
                    component={AdminSignup}
                  /> */}
                  <Route
                    exact
                    path="/login/super_admin"
                    component={AdminLogin}
                  />
                  <Route
                    exact
                    path={`/products/details/:id/:${'name'.replace(
                      /\s+/g,
                      ''
                    )}`}
                    // path={dapp }
                    component={ProductDetailPage}
                  />
                  <Route
                    exact
                    path="/products/categories/:category"
                    component={CategoryDisplayPage}
                  />
                  <Route
                    exact
                    path={`/products/tag/:${'tag'.replace(
                      /\s+/g,
                      ''
                    )}`}
                    // path={dapp }
                    component={AllProductsDisplayPage}
                  />
                  <Route
                    exact
                    path="/category/:name"
                    component={Categories}
                  />
                  <Route
                    exact
                    path="/status/:name"
                    component={Status}
                  />
                  <Route exact path="/signup" component={Signup} />
                  {/* <Route exact path='/new-home' component={NewHome} /> */}

                  <Route exact path="/confirmation" component={Opd} />
                  {/* <Route exact path='/about' component={About} /> */}
                  <Route exact path="/about" component={About} />
                  {/* <Route exact path="/market" component={MarketHome} /> */}
                  <Route exact path="/egc_token" component={Egc} />
                  <Route
                    exact
                    path="/createloan2"
                    component={Createloan}
                  />
                  <Route
                    exact
                    path="/createloan"
                    component={Createloan2}
                  />
                  <Route
                    exact
                    path="/create-uploader"
                    component={AddUploader}
                  />
                  <PrivateRoute
                    exact
                    path="/governance"
                    component={Request}
                  />
                  <Route
                    exact
                    path="/companyreg"
                    component={Companyreg}
                  />

                  <Route
                    exact
                    path="/companies"
                    component={Companies}
                  />
                  <Route
                    exact
                    path="/register"
                    component={LoginSignup}
                  />
                  <Route
                    exact
                    path="/referal/:ref"
                    component={Referal}
                  />
                  <Route
                    exact
                    path="/authenticate/:id"
                    component={ValidateLogin}
                  />
                  <Route exact path="/privacy" component={Privacy} />
                  <Route
                    exact
                    path="/terms-conditions"
                    component={TermsAndConditions}
                  />
                  <Route exact path="/terms" component={Terms} />

                  <Route
                    exact
                    path="/documentation"
                    component={Documentation}
                  />
                  <Route
                    exact
                    path="/documentation1"
                    component={Documentation1}
                  />
                  {/* <Route
                    exact
                    path="/products/details/:id"
                    component={ItemDetailsPage}
                  /> */}
                  <Route
                    exact
                    path="/products/details/:id/:name"
                    component={Item_details_main}
                  />

                  <Route
                    exact
                    path="/egoras-decentralized-autonomous-organization"
                    component={Documentation2}
                  />
                  <Route
                    exact
                    path="/lending-partner-governance"
                    component={Documentation3}
                  />
                  <Route
                    exact
                    path="/loan-approval-governance"
                    component={Documentation4}
                  />

                  <Route
                    path="/explore_collaterals"
                    exact
                    component={Explore_Loans}
                  />
                  <Route
                    path="/explore_loans_page"
                    exact
                    component={Explore_Loans_Page}
                  />
                  <Route
                    path="/explore_loans_page1"
                    exact
                    component={Explore_Loans_Page1}
                  />
                  <Route
                    path="/explore_loans_page2"
                    exact
                    component={Explore_Loans_Page2}
                  />
                  <Route
                    path="/explore_loans_page3"
                    exact
                    component={Explore_Loans_Page3}
                  />
                  <Route
                    path="/explore_loans_page4"
                    exact
                    component={Explore_Loans_Page4}
                  />
                  <Route
                    path="/explore_loans_page5"
                    exact
                    component={Explore_Loans_Page5}
                  />
                  <Route
                    exact
                    path="/interest-rate-governance"
                    component={Documentation5}
                  />
                  <Route
                    exact
                    path="/interest-sharing-formular"
                    component={Documentation6}
                  />
                  <Route
                    exact
                    path="/loan-application"
                    component={Documentation7}
                  />
                  <Route
                    exact
                    path="/approve-company"
                    component={Documentation8}
                  />
                  <Route
                    exact
                    path="/repay-loan"
                    component={Documentation9}
                  />
                  <Route
                    exact
                    path="/reward-voter"
                    component={Documentation10}
                  />
                  <Route
                    exact
                    path="/distribute-interest-to-egr-holders"
                    component={Documentation11}
                  />
                  <Route
                    exact
                    path="/governance-vote"
                    component={Documentation12}
                  />
                  <Route
                    exact
                    path="/validate-governance-request"
                    component={Documentation13}
                  />
                  <Route
                    exact
                    path="/how-egoras-treasury-work"
                    component={Documentation14}
                  />
                  <Route
                    exact
                    path="/block-rewards"
                    component={Documentation15}
                  />
                  <Route
                    exact
                    path="/how-is-the-treasury-capitalized"
                    component={Documentation16}
                  />
                  <Route
                    exact
                    path="/introduction"
                    component={Documentation17}
                  />
                  <Route
                    exact
                    path="/the-egoras-dollar"
                    component={Documentation18}
                  />
                  <Route
                    exact
                    path="/egoras-governance-token"
                    component={Documentation19}
                  />
                  <Route
                    exact
                    path="/egr-token"
                    component={TokenEGR}
                  />
                  <Route exact path="/swap" component={TokenEUSD} />
                  <Route
                    exact
                    path="/whitepaper"
                    component={Whitepaper}
                  />

                  <Route exact path="/login" component={Login} />

                  {/* <Route exact path="/super_admin" component={Admin} /> */}
                  {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                  {/* <Route exact path='/token-metrics' component={TokenMetrics} /> */}
                  {adminLocate === 'super_admin' ? (
                    <PrivateRoute3>
                      <Admin />
                    </PrivateRoute3>
                  ) : adminLocate === 'dashboard' ? (
                    <PrivateRoute2>
                      <Dashboard />
                    </PrivateRoute2>
                  ) : null}
                  {/* {(() => {
                    if (adminLocate === "super_admin"){
                      //console.log('super_admin');
                        return (
                          <PrivateRoute3>
                          <Admin />
                        </PrivateRoute3>
                        )
                    } else if (adminLocate === "dashboard") {
                      //console.log('dashboard');
                      return (
                        <PrivateRoute2>
                          <Dashboard />
                        </PrivateRoute2>
                    )
                    }

                    //console.log('hhhhhh');
                    
                    return null;
                  })()} */}
                  <Route component={NotFoundPage} />
                </Switch>
              </section>
              {/* <Footer /> */}
              <Footer />
            </Fragment>
          </div>
        </Router>
      </Provider>
    </Web3ReactProvider>
  );
};

export default App;
