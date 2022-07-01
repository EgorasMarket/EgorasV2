import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AdminUploadProducts from "./AdminPages/AdminUploadProducts";
import AdminAllProducts from "./AdminPages/AdminAllProducts";
import RegisterCustomer from "./AdminPages/RegisterCustomer";
import AdminCustomer from "./AdminPages/AdminCustomer";
import AdminAllView from "./AdminPages/AdminAllProductView";
import Admin_homePage from "./AdminPages/Admin_homePage";
import AdminSideBar from "./AdminSideBar";
import { SplashScreen } from "../SplashScreen/SplashScreen";
import Wallet from "../Wallet/Wallet";
import Wallet4 from "../Wallet/Wallet1";
import NewOne from "./AdminPages/newOne";
import Transact from "./AdminPages/Transactionbybranch";
import axios from "axios";
import { PRODUCT_LOADED, API_URL2 as api_url2 } from "../../../actions/types";
import Item_details_main2 from "./AdminPages/AdminItemsDetailsPage";

import "./AdminStyles/admin.css";
import Page from "./AdminPages/dashboardIn";
import AdminSavingsOverview from "./AdminPages/AdminSavingsOverview";
import ItemsPage2 from "./AdminPages/AdminItemsDetailsPage";

const Admin = ({ isAuthenticated, loading }) => {
  const [splashScreen, setSplashScreen] = useState(true);
  const [roleDisplay, setRoleDisplay] = useState({
    Role: "",
  });

  const { Role } = roleDisplay;
  //console.log(isAuthenticated, loading);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    // //console.log(isAuthenticated,'77777');
    if (isAuthenticated == false) {
      // return <Redirect to="/" />;
      return window.location.replace("/login/super_admin");
    } else if (isAuthenticated == true) {
      // //console.log('trueee');
      const timer = setTimeout(() => {
        setSplashScreen(false);
      }, 1000);
    }

    // setSplashScreen(true);
  }, [isAuthenticated]);

  const dapp = window.location.pathname;
  const dapp2 = window.location.pathname;

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
      .then((data) => {
        //console.log(data.data.user, "line_ful");
        setRoleDisplay({
          Role: data.data.user.role,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  return (
    <div>
      <Route>
        {splashScreen == true ? (
          <SplashScreen />
        ) : (
          <div className="admin">
            <AdminSideBar />
            <Switch>
              {Role === "MEDIA" ? (
                <>
                  <Route
                    exact
                    path="/super_admin/upload_products"
                    component={AdminUploadProducts}
                  />
                  {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                </>
              ) : Role === "BUSINESS_ADMIN" ? (
                <>
                  <Route
                    exact
                    path="/super_admin/register_user"
                    component={RegisterCustomer}
                  />
                  {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                </>
              ) : Role === "CASHIER" || Role === "CUSTOMER_SERVICE" ? (
                <>
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
                    component={Page}
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
                    path="/super_admin/customers_by_location"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={Transact}
                  />

                  {/* < HEAD /> */}

                  <Route
                    exact
                    path="/super_admin/user_overview/:id"
                    // path="/dashboard/products/details/:id/:name"
                    // / dashboard/products/details/:id/:name
                    component={AdminSavingsOverview}
                  />

                  {/* <Route
>>>>>>> c5fd9c3b4b94f24cd588c4df26c55d4862d46995
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
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
              ) : Role === "HOD_MEDIA" ? (
                <>
                  <Route
                    exact
                    path="/super_admin/all_products"
                    component={AdminAllProducts}
                  />
                  {/* <Route
                exact
                path="/admin/products/details/:id/:name"
                component={ItemsPage2}
              /> */}
                </>
              ) : (
                <Route
                  exact
                  path="/super_admin/all_products_view/:id/:name"
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
