import React, { useState, useEffect } from 'react';
// import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import AdminUploadProducts from './AdminPages/AdminUploadProducts';
import AdminAllProducts from './AdminPages/AdminAllProducts';
import RegisterCustomer from './AdminPages/RegisterCustomer';
import AdminCustomer from './AdminPages/AdminCustomer';
import AdminAllView from './AdminPages/AdminAllProductView';
import AllStaffs from './AdminPages/AllStaffs';
import Admin_homePage from './AdminPages/Admin_homePage';
import AdminSideBar from './AdminSideBar';
import { SplashScreen } from '../SplashScreen/SplashScreen';
import Adminproduct from './AdminPages/ProductRoutes';
import Wallet from '../Wallet/Wallet';
import Wallet4 from '../Wallet/Wallet1';
import Adminmakeproducts from './AdminPages/Adminmakeproducts';
import NewOne from './AdminPages/newOne';
import Transact from './AdminPages/Transactionbybranch';
import axios from 'axios';
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from '../../../actions/types';
import Item_details_main2 from './AdminPages/AdminItemsDetailsPage';

import './AdminStyles/admin.css';
import AdminMarket from './AdminPages/AdminMarket';
import AdminSavingsOverview from './AdminPages/AdminSavingsOverview';
import ItemsPage2 from './AdminPages/AdminItemsDetailsPage';
import AdminSignup from './AdminSignup/AdminSignup';
import AllProductRoute from './AdminPages/AllProductRoute';
import UniqueProductRoutes from './AdminPages/UniqueProductRoutes';
import AdminShowOrder from './AdminPages/AdminShowOrder';
import SellProductList from './AdminPages/SellProductList';
import AdminAddTags from './AdminPages/AdminAddTags';

const Admin = ({ isAuthenticated, loading }) => {
  const [splashScreen, setSplashScreen] = useState(true);
  const [managerCashierCusCare, setManagerCashierCusCare] =
    useState(false);
  const [roleDisplay, setRoleDisplay] = useState({
    Role: '',
  });

  const { Role } = roleDisplay;
  //console.log(isAuthenticated, loading);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    // //console.log(isAuthenticated,'77777');
    if (isAuthenticated == false) {
      // return <Redirect to="/" />;
      return window.location.replace('/login/super_admin');
    } else if (isAuthenticated == true) {
      // //console.log('trueee');
      const timer = setTimeout(() => {
        setSplashScreen(false);
      }, 1000);
    }

    // setSplashScreen(true);
  }, [isAuthenticated]);

  useEffect(() => {
    axios
      .get(api_url2 + '/v1/admin/info', null, config)
      .then((data) => {
        console.log(data.data.user.role, 'line_ful');
        setRoleDisplay({
          Role: data.data.user.role,
        });

        if (
          data.data.user.role === 'CASHIER' ||
          data.data.user.role === 'CUSTOMER_SERVICE' ||
          data.data.user.role === 'MANAGER'
        ) {
          setManagerCashierCusCare(true);
        } else {
          setManagerCashierCusCare(false);
        }
      })
      .catch((err) => {
        console.log(err); // "oh, no!"
      });
  }, []);

  // useEffect(() => {
  //   console.log(Role);
  //   // //console.log(isAuthenticated,'77777');
  //   if (Role === "CASHIER" || Role === "CUSTOMER_SERVICE" || Role === "MANAGER") {
  //     setManagerCashierCusCare(true)
  //   } else {
  //     setManagerCashierCusCare(false)
  //   }

  //   // setSplashScreen(true);
  // }, []);

  console.log(managerCashierCusCare);

  return (
    <div>
      <Route>
        {splashScreen == true ? (
          <SplashScreen />
        ) : (
          <div className="admin">
            <AdminSideBar />
            <Switch>
              <Route
                exact
                path="/super_admin"
                component={Admin_homePage}
              />
              {Role === 'MEDIA' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/upload_products"
                    component={AdminUploadProducts}
                  />

                  <Route
                    exact
                    path="/super_admin/all_products"
                    component={AdminAllProducts}
                  />
                  <Route
                    exact
                    path="/super_admin/products_view/:id/:name"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminAllView}
                  />
                  {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                </>
              ) : Role === 'BUSINESS_ADMIN' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/register_user"
                    component={RegisterCustomer}
                  />

                  <Route
                    exact
                    path="/super_admin/product_routes"
                    component={Adminproduct}
                  />

                  <Route
                    exact
                    path="/super_admin/add/product/tags"
                    component={AdminAddTags}
                  />
                  {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                </>
              ) : Role === 'CASHIER' ||
                Role === 'CUSTOMER_SERVICE' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/register_user"
                    component={RegisterCustomer}
                  />
                  <Route
                    exact
                    path="/super_admin/all_user"
                    component={AdminCustomer}
                  />

                  <Route
                    exact
                    path="/super_admin/overview"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminMarket}
                  />

                  {/* < HEAD /> */}

                  <Route
                    exact
                    path="/super_admin/user_overview/:id"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminSavingsOverview}
                  />

                  <Route
                    exact
                    path="/super_admin/products/for-sell"
                    component={SellProductList}
                  />

                  <Route
                    exact
                    path="/super_admin/overview"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminMarket}
                  />

                  {/* < HEAD /> */}

                  <Route
                    exact
                    path="/super_admin/user_overview/:id"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminSavingsOverview}
                  />

                  <Route
                    exact
                    path="/super_admin/user_wallet"
                    component={Wallet}
                  />

                  <Route
                    exact
                    path="/super_admin/cus_user_wallet"
                    component={Wallet4}
                  />

                  <Route
                    exact
                    path="/super_admin/details/:id/:name"
                    component={Item_details_main2}
                  />
                </>
              ) : Role === 'HOD_MEDIA' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/all_products"
                    component={AdminAllProducts}
                  />
                  <Route
                    exact
                    path="/super_admin/Approved_products"
                    component={Adminmakeproducts}
                  />
                  <Route
                    exact
                    path="/super_admin/products_view/:id/:name"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminAllView}
                  />
                  {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                </>
              ) : Role === 'LOGISTICS' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/Approved_products"
                    component={Adminmakeproducts}
                  />
                  <Route
                    exact
                    path="/super_admin/products_view/:id/:name"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminAllView}
                  />
                  <Route
                    exact
                    path="/super_admin/route/all-products"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AllProductRoute}
                  />
                  <Route
                    exact
                    path="/super_admin/unique-product/routes/:id"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={UniqueProductRoutes}
                  />
                  <Route
                    exact
                    path="/super_admin/orders/all"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminShowOrder}
                  />
                </>
              ) : Role === 'TECH' || Role === 'MANAGER' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/Approved_products"
                    component={Adminmakeproducts}
                  />
                  <Route
                    exact
                    path="/super_admin/fund/accountant"
                    component={Wallet}
                  />
                  <Route
                    exact
                    path="/super_admin/user_wallet"
                    component={Wallet}
                  />
                  <Route
                    exact
                    path="/super_admin/signup"
                    component={AdminSignup}
                  />
                  <Route
                    exact
                    path="/super_admin/customers_by_branch"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={NewOne}
                  />

                  <Route
                    exact
                    path="/super_admin/staffs_data"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AllStaffs}
                  />

                  <Route
                    exact
                    path="/super_admin/customers_by_location"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={Transact}
                  />
                  <Route
                    exact
                    path="/super_admin/orders/all"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminShowOrder}
                  />
                  <Route
                    exact
                    path="/super_admin/products_view/:id/:name"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminAllView}
                  />
                </>
              ) : Role === 'CASHIER' ? (
                <>
                  <Route
                    exact
                    path="/super_admin/register_user"
                    component={RegisterCustomer}
                  />
                </>
              ) : (
                <Route
                  exact
                  path="/super_admin/products_view/:id/:name"
                  // path="/dashboard/products/details/:id/:name"
                  // / dashboard/products/details/:id/:name
                  component={AdminAllView}
                />
              )}
            </Switch>
          </div>
        )}
        {/* <Route exact path="/super_admin/admin" component={AdminTest} /> */}
      </Route>
    </div>
  );
};

// export default Admin;

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {})(Admin);
