// import React, { useState, useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import "../AdminStyles/allCustomer.css";
// import axios from "axios";
// // import { Spinner } from "reactstrap";
// import LoadingIcons from "react-loading-icons";
// import {
//   PRODUCT_LOADED,
//   API_URL2 as api_url2,
// } from "../../../../actions/types";



// const way = window.location.pathname;

// const AdminCustomer = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   // const [Loading, setLoading] = useState(true);
//   // const [isError, setError] = useState(false)
//   const [searchResults, setSearchResults] = useState([]);
//   const [rolesInfos,setRolesInfos]= useState({
//     role201:""
//   })

//   const {role201}=rolesInfos;

//   const [allCustomers, setAllCustomers] = useState([]);
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
 
//   useEffect(() => {
//     console.log("admin customer page")
//       // setLoading(true);
//       // setError(false);
//     // //console.log('ttttrr');
//     axios
//       .get(api_url2 + "/v1/admin/retrieve/customers/byBranch", null, config)
//       .then((data) => {
//         //  setLoading(false);
//         //console.log(data.data.data, "king");

//         console.log(data,"tyuityui");
//         // setAllCustomers(data.data.data);
//       })
//       // 
//       .catch((err) => {
//         //  setError(true);
//         console.log(err.response, 'ooooo'); // "oh, no!"
//       });

//     //console.log("my naem");
//     // ============
//   }, []);
   
//   // useEffect(() => {
//   //   axios
//   //     .get(api_url2 + "/v1/admin/get/customer/byId/" + customerId, null, config)
//   //     .then((data) => {
//   //       //console.log(data.data.data);

//   //       // setCustomerId(data.data.data.id);
//   //     })
//   //     .catch((err) => {
//   //       //console.log(err); // "oh, no!"
//   //     });
//   // }, []);



       
//   useEffect(() => {
  
//     axios.get(
//         api_url2 + "/v1/admin/info",
//         null,
//         config
//     ).then((data) => {
       
//         //console.log(data.data.user, "line_ful");
//         setRolesInfos({
//           role201:data.data.user.role,
//         })
       
    
//       })
//       .catch((err) => {
//         //console.log(err); // "oh, no!"
//       }); 
//   }, []);


//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     //console.log(event.target.value);
//   };
//   useEffect(() => {
//     if (searchTerm === "") {
//       setSearchResults(allCustomers);
//       //console.log("tttt");
//     } else {
//       console.log(allCustomers);
//       const results = allCustomers.filter((userInfo) =>
//         userInfo.fullname
//           .toString()
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       );
//       setSearchResults(results);
//     }
//   }, [searchTerm, allCustomers]);

  

//   //console.log(searchResults);

//   // =========
//   // =========

//   // =========
//   // =========

//   const saveCustomerId = (event) => {
//     //console.log(event.target.id);
//     localStorage.setItem("adminCusId", event.target.id);

//   }
//   // if (Loading) {
    
  
//     return (
      
    
//       <>
//        <div
//         className="py-4 w-1/2 h-58 mt-8 bg-white rounded-xl shadow-md flex flex-col items-center"
//         data-testid="loading-message"
//       >
//         <LoadingIcons className="my-1 scale-75 stroke-current stroke-1 text-gray-400" />
//         <h1 className="text-md font-light text-gray-400">Loading data...</h1>
//       </div>
    

//         {/* {((role201 === "CASHIER") || (role201 === "CUSTOMER_SERVICE" ) && (way === "/super_admin/all_user"))? */}
//         <div className="other2">
//           <section className="no-bg">
//             <div className="container">
//               <div className="all_user_data_area">
//                 <div className="all_users_search">
//                   Search Users
//                   <div className="search_container">
//                     <SearchIcon className="user_search_icon" />
//                     <input
//                       type="search"
//                       name=""
//                       id=""
//                       placeholder="Search"
//                       className="user_search"
//                       value={searchTerm}
//                       onChange={handleSearchChange}
//                     />
//                   </div>
//                 </div>
              
//                 <div className="all_users_body">
//                   <table className="assets-table s_table">
//                     <thead className="assets-category-titles">
//                       <tr className="assets">
//                         <th className="assets-category-titles-heading1">Name</th>
//                         <th className="assets-category-titles-heading1">
//                           Phone No
//                         </th>
//                         <th className="assets-category-titles-heading1">gender</th>
//                         <th className="assets-category-titles-heading1 right_align email_align">
//                           Email Address
//                         </th>
//                         <th className="assets-category-titles-heading1 right_align">
//                           Action
//                         </th>
//                       </tr>
//                     </thead>
//                     {searchResults.map((user) => (
//                       <tbody
//                         className="assets-table-body popular-categories"
//                         id="popular-categories"
//                       >
//                         {" "}
//                         <tr className="assets-category-row">
//                           <td className="assets-category-data">
//                             <div className="assets-data">
//                               {/* <PhoneAndroidIcon className="assets-list-icon" /> */}
//                               <div className="assets-data-name">
//                                 {user.fullname}
//                               </div>
//                             </div>
//                           </td>
//                           <td className="assets-category-data1">
//                             <div className="assets-data-name">
//                               {user.phoneNumber}
//                             </div>
//                           </td>
//                           <td className="assets-category-data1b">
//                             <div className="assets-data-name">{user.gender}</div>
//                           </td>
//                           <td className="assets-category-data1b">
//                             <div className="assets-data-name">{user.email}</div>
//                           </td>
//                           <td className="assets-category-data-last">
//                             <div className="assets-data-name-last">
//                               <a href={`/super_admin/user_overview/${user.id}`} className='mr-2'>
//                                 <button
//                                   // id={user.id}
//                                   className="btn btn-primary"
//                                 >
//                                   View
//                                 </button>
//                               </a>
//                               <a href={`/super_admin/overview`}>
//                                 <button
//                                   id={user.id}
//                                   onClick={saveCustomerId}
//                                   className="btn btn-success"
//                                 >
//                                   Book
//                                 </button>
//                               </a>
//                             </div>
//                           </td>
//                         </tr>
//                       </tbody>
//                     ))}
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//         {/* :null} */}
//       </>
//     ) ;
//   // } else {
//   // if (isError) {
//   //   return (
//   //     <section
//   //       className="m-12 flex flex-col items-center"
//   //       data-testid={`error-message`}
//   //     >
//   //       <h1 className="text-2xl font-medium text-black ml-3">
//   //         An Error Has Occurred. Please try reloding  page.
//   //       </h1>
       
//   //     </section>
//   //   );
//   // }
// // }
// };

// export default AdminCustomer;




import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../AdminStyles/allCustomer.css";
import LoadingIcons from "react-loading-icons";
import axios from "axios";
import {
  PRODUCT_LOADED,
  API_URL2 as api_url2,
} from "../../../../actions/types";

const way = window.location.pathname;

const AdminCustomer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
   const [Loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [rolesInfos, setRolesInfos] = useState({
    role201: "",
  });

  const { role201 } = rolesInfos;

  const [allCustomers, setAllCustomers] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setLoading(true);
     setError(false);
        console.log('ttttrr');
    // //console.log('ttttrr');
    axios
      .get(api_url2 + "/v1/admin/retrieve/customers/byBranch", null, config)
      .then((data) => {
        setLoading(true);
        console.log(data.data.data, "king");

        setAllCustomers(data.data.data);
      })
      .catch((err) => {
        setError(true)
        console.log(err.response, "ooooo"); // "oh, no!"
      });

    //console.log("my naem");
    // ============
  }, []);
  // useEffect(() => {
  //   axios
  //     .get(api_url2 + "/v1/admin/get/customer/byId/" + customerId, null, config)
  //     .then((data) => {
  //       //console.log(data.data.data);

  //       // setCustomerId(data.data.data.id);
  //     })
  //     .catch((err) => {
  //       //console.log(err); // "oh, no!"
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(api_url2 + "/v1/admin/info", null, config)
      .then((data) => {
        //console.log(data.data.user, "line_ful");
        setRolesInfos({
          role201: data.data.user.role,
        });
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    //console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(allCustomers);
      //console.log("tttt");
    } else {
      console.log(allCustomers);
      const results = allCustomers.filter((userInfo) =>
        userInfo.fullname
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [searchTerm, allCustomers]);

  //console.log(searchResults);

  // =========
  // =========

  // =========
  // =========

  const saveCustomerId = (event) => {
    //console.log(event.target.id);
    localStorage.setItem("adminCusId", event.target.id);
  };




  if (Loading) {
    
    return (
      <>
        {/* <div
        className="py-4 w-1/2 h-58 mt-8 bg-white rounded-xl shadow-md flex flex-col items-center"
        data-testid="loading-message"
      >
        <LoadingIcons className="my-1 scale-75 stroke-current stroke-1 text-gray-400" />
        <h1 className="text-md font-light text-gray-400">Loading data...</h1>
      </div> */}
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
        {/* {((role201 === "CASHIER") || (role201 === "CUSTOMER_SERVICE" ) && (way === "/super_admin/all_user"))? */}
        <div className="other2">
          <section className="no-bg">
            <div className="container">
              <div className="all_user_data_area">
                <div className="all_users_search">
                  Search Users
                  <div className="search_container">
                    <SearchIcon className="user_search_icon" />
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search"
                      className="user_search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
                <div className="all_users_body">
                  <table className="assets-table s_table">
                    <thead className="assets-category-titles">
                      <tr className="assets">
                        <th className="assets-category-titles-heading1">
                          Name
                        </th>
                        <th className="assets-category-titles-heading1">
                          Phone No
                        </th>
                        <th className="assets-category-titles-heading1 right_align email_align">
                          Email Address
                        </th>
                        <th className="assets-category-titles-heading1 right_align email_align">
                          Wallet Balance
                        </th>
                        {/* <th className="assets-category-titles-heading1">
                        Fund Wallet
                      </th> */}
                        <th className="assets-category-titles-heading1 right_align">
                          Action
                        </th>
                      </tr>
                    </thead>
     

                   <> 
                  
                    {searchResults.map((user) => (
                      <tbody
                        className="assets-table-body popular-categories"
                        id="popular-categories"
                      >
                                               {user.length <= 0 ? (
                       <section
        className="m-12 flex flex-col items-center"
        data-testid={`error-message`}
      >
        <h1 className="text-2xl font-medium text-black ml-3">
          An Error Has Occurred. Please try reloding  page.
        </h1>
       
      </section>
                    ) : (
                        // {" "}
                        <tr className="assets-category-row">
                          <td className="assets-category-data">
                            <div className="assets-data">
                              {/* <PhoneAndroidIcon className="assets-list-icon" /> */}
                              <div className="assets-data-name">
                                {user.fullname}
                              </div>
                            </div>
                          </td>
                          <td className="assets-category-data1">
                            <div className="assets-data-name">
                              {user.phoneNumber}
                            </div>
                          </td>
                          {/* <td className="assets-category-data1b">
                          <div className="assets-data-name">{user.gender}</div>
                        </td> */}
                          <td className="assets-category-data1b">
                            <div className="assets-data-name">{user.email}</div>
                          </td>
                          <td className="assets-category-data1b">
                            <div className="assets-data-name">
                              {user.balance == null
                                ? "0.0"
                                : parseFloat(user.balance)}
                            </div>
                          </td>
                          <td className="assets-category-data-last">
                            <div className="assets-data-name-last">
                              <a
                                href={`/super_admin/cus_user_wallet`}
                                className="mr-2"
                              >
                                <button
                                  id={user.id}
                                  className="btn btn-primary"
                                  onClick={saveCustomerId}
                                >
                                  Fund Wallet
                                </button>
                              </a>
                              <a
                                href={`/super_admin/user_overview/${user.id}`}
                                className="mr-2"
                              >
                                <button
                                  // id={user.id}
                                  className="btn btn-primary"
                                >
                                  View
                                </button>
                              </a>
                              <a href={`/super_admin/overview`}>
                                <button
                                  id={user.id}
                                  onClick={saveCustomerId}
                                  className="btn btn-success"
                                >
                                  Book
                                </button>
                              </a>
                            </div>
                          </td>
                        </tr>
                    )}
                      </tbody>
                    ))}
                    </>
                    
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* :null} */}
      </>
    );
  } 
};

export default AdminCustomer;
