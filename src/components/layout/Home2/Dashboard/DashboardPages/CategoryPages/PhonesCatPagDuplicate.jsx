import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../../DashboardStyles/category.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { connect } from "react-redux";
import {
  API_URL2 as api_url2,
} from "../../../../../../actions/types";

import { numberWithCommas } from "../../../../../../static";


const assetBrand = [
  {
    id: "apple",
    name: "Apple",
  },
  {
    id: "samsung",
    name: "Samsung",
  },
  {
    id: "oppo",
    name: "Oppo",
  },
  {
    id: "huawei",
    name: "HUAWEI",
  },
  {
    id: "tecno",
    name: "TECNO",
  },
  {
    id: "infinix",
    name: "Infinix",
  },
  {
    id: "nokia",
    name: "Nokia",
  },
  {
    id: "gionee",
    name: "Gionee",
  },
  {
    id: "itel",
    name: "Itel",
  },
  {
    id: "lenovo",
    name: "Lenovo",
  },
  {
    id: "vivo",
    name: "Vivo",
  },
  {
    id: "xiaomi",
    name: "Xiaomi",
  },
];

const responsive6 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const PhonesCatPagDuplicate = ({match}) => {
  const [totalProducts, setTotalProducts] = useState("200 ");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //console.log('====================================');
  //console.log(match.params.category);
  //console.log(match.params.product_name)
  //console.log('====================================');

    const [category2,setCategory2]=useState([]);
    const [erra,setErra]=useState({cate:""});
    const {cate}=erra;

  const [goods,setGoods]=useState([]);
  const [phones,setPhone]=useState([]);
  const [seeAll,setSeeAll]=useState([])
  const [park,setPark]=useState({imgs:""})
  const {imgs}=park;

  // const [mark ,setMark]= setInfo({
  //   phoneCath:"",computerCath:""
  
  // })


  const [page,setPage]=useState({categoryPhoneTablets:"",categoryHomeAppliances:"",categoryElectronics:"",categoryComputerAccessories:"",categoryFurniture:"",categoryMusicalEquipment:"",categoryIndustrialEquipment:""})

  const {categoryPhoneTablets,categoryHomeAppliances,categoryElectronics,categoryComputerAccessories,categoryFurniture,categoryMusicalEquipment,categoryIndustrialEquipment} = page;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };



  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  useEffect(() => {
  
    axios.get(
        api_url2 + '/v1/product/retrieve/products/byId/'+ match.params.category,
        null,
        config
    ).then((data) => {
       
      //console.log("hello mr kingsley");
        //console.log(data.data.data, "samuel_Chuks");

        setSeeAll(data.data.data);

        const feed = data.data.data.product_image
     
        // /setGoods(data.data.data)

     
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });

    
  }, []);



  useEffect(()=>{
    phoneTab2()
  },[])


  function phoneTab2(){

    axios.get(
      api_url2 + "/v1/product/retrieve/category",
      null,
      config
  ).then((data) => {
     
      //console.log(data.data.data, "dominic kig King");
      setCategory2(data.data.data)
       
      //  cate:category2.product_category_code;
      //  //console.log(cate);
    })
    .catch((err) => {
      //console.log(err); // "oh, no!"
    });

  }

//   {category2.map((person=>{
// person.product_category_pa
//   })}

    //=====================//
   //=====================//
  //=====================//

  useEffect(() => {
    const results = seeAll.filter((BrandName) =>
      BrandName.product_name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);



  useEffect(() => {
  
    axios.get(
        api_url2 + "/v1/product/retrieve/products",
        null,
        config
    ).then((data) => {
       
        //console.log(data.data.data, "phlip");
     
       
        setPhone(data.data.data)

       
      })
      .catch((err) => {
        //console.log(err); // "oh, no!"
      });

    
  }, []);

  // const numberWithCommas = (x) => {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // };


  return (
    <div className="other2">
      <section className="no-bg">
        <div className="container">
          <div className="categories_page_area">
            <div className="cat_banner_heading">
              Connect Your World

              {seeAll.map((asset,rd)=>(
              <img
                 key={rd.toString}
                // src="/img/fake_assets/refurb_img.jpeg"
                src ={`url(${api_url2 + '/'+ asset.product_image[0]})`}
                alt=""
                className="refurb_img_bann"
              />
              ))}
            </div>
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* Carousel start==============================
==============================================
============================= */}
{/* 
            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
             {match.params.category} 
                <dispatchEvent></dispatchEvent>
              </div>
              <div className="cat_carous">
                <Carousel
                  responsive={responsive6}
                  className="partnerCards LEFTARROW"
                  showDots={false}
                  //   infinite={false}
                  autoPlay={false}
                  autoPlaySpeed={6000}
                  transitionDelay={"2s"}
                  infinite={false}
                  draggable={true}
                  // transitionDuration={500}
                  swipeable={true}
                  style={{ height: "25em" }}
                >
                  {seeAll.map((asset,index15) => (
                    <a href={`/dashboard/products/details/${asset.id}/${asset.product_name}`} key={index15.toString()}>
                      <li className="carous_list">
                        <div
                          className="storeTiles_storeTileContainer__HoGEa"
                          style={{
                            backgroundImage: `url(${api_url2 + '/'+ asset.product_image})`,
                          }}
                        >
                          <div className="storeTiles_storeTileOffersContainer__3v8lC">
                            <button className="items_remaining_btn">
                              save now
                            </button>
                            <button className="items_remaining_btn2">
                              25% off
                            </button>
                          </div>
                          <div className="storeTiles_storeTileBottomContainer__2sWHh">
                            <div className="asset_name">{asset.product_name}</div>
                            <div className="asset_title">
                              {asset.unitCount}{asset.unitCount ===1? "item left": asset.unitCount <= 1? "no item left":asset.unitCount > 1? "items left": null }
                            </div>
                          </div>
                          
                        </div>
                      </li>
                    </a>
                  ))}
                </Carousel>
              </div>
            </div> */}
            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}







{/*  Projects Section start*/}
<section className="projectsSection" id="projects">
        <div className="container">
          <div
            className="projectsArea item_card_area"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="projectsTitleContentsa bg_a">
              <div className="projectTitle">
                <h1 className="gttitle TITE">
                {match.params.category}  <span className="ouright_sell">/ Outright Buy</span>
                </h1>
              </div>
              {/* <a href={`/dashboard/products/categories/Phones & Tablet`} className="see_all_cat">
                See all <ArrowForwardIosIcon className="forward_icons" />
              </a> */}
            </div>

            {/* Carousel start==============================
==============================================
============================= */}

            <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {seeAll.map((asset) => {return(
                <a href={`/products/details/${asset.id}`}>
                <li className="carous_list">
                  <div
                    className="storeTiles_storeTileContainer__HoGEa"
                    style={{
                      backgroundImage: `url(${
                        api_url2 + "/" + asset.product_image
                      })`,
                      //           height: "200px",
                      //           width: "100%",
                      //           backgroundRepeat: "no-repeat",
                      //           backgroundSize: "cover",
                      //           borderRadius: "8px",
                      //           borderBottomLeftRadius: "0px",
                      //           borderBottomRightRadius: "0px",
                      //   backgroundPositionY: "center",
                    }}
                  >
                    <div className="storeTiles_storeTileOffersContainer__3v8lC">
                      <button className="items_remaining_btn">
                        {asset.payment_type == "OUTRIGHT" ? (
                          <p className="no_margg"> Buy now</p>
                        ) : (
                          <p className="no_margg"> Save now</p>
                        )}
                      </button>

                      {asset.payment_type == "OUTRIGHT" ? (
                        <div></div>
                      ) : (
                        <button className="items_remaining_btn2">
                          {" "}
                          40% locked
                        </button>
                      )}
                    </div>
                    <div className="storeTiles_storeTileBottomContainer__2sWHh">
                      <div className="asset_name">{asset.product_name}</div>
                      <div className="asset_title">
                        ₦{numberWithCommas(asset.amount)}{" "}
                        <span className="slashed_price">
                          ₦{numberWithCommas(asset.amount * 2)}
                        </span>
                      </div>
                    </div>
                    {/* </a> */}
                  </div>
                </li>
              </a>
              )} )}
            </Carousel>


         

            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>










            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}


       
         






            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* Carousel start==============================
==============================================
============================= */}

            <div className="products_display_body pad_bot">
              <div className="products_display_body_heading">
              {match.params.category} 
                <dispatchEvent></dispatchEvent>
              </div>
              <div className="cat_carous">


              <Carousel
              responsive={responsive6}
              className="partnerCards LEFTARROW"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={6000}
              transitionDelay={"2s"}
              infinite={true}
              draggable={true}
              // transitionDuration={500}
              swipeable={true}
              style={{ height: "25em" }}
            >
              {seeAll.map((asset) => {return(
                <a href={`/products/details/${asset.id}`}>
                  <li className="carous_list">
                    <div
                      className="storeTiles_storeTileContainer__HoGEa"
                      style={{
                        backgroundImage: `url(${
                          api_url2 + "/" + asset.product_image
                        })`,
                        //           height: "200px",
                        //           width: "100%",
                        //           backgroundRepeat: "no-repeat",
                        //           backgroundSize: "cover",
                        //           borderRadius: "8px",
                        //           borderBottomLeftRadius: "0px",
                        //           borderBottomRightRadius: "0px",
                        //   backgroundPositionY: "center",
                      }}
                    >
                      <div className="storeTiles_storeTileOffersContainer__3v8lC">
                        <button className="items_remaining_btn">
                          {asset.payment_type == "OUTRIGHT" ? (
                            <p className="no_margg"> Buy now</p>
                          ) : (
                            <p className="no_margg"> Save now</p>
                          )}
                        </button>

                        {asset.payment_type == "OUTRIGHT" ? (
                          <div></div>
                        ) : (
                          <button className="items_remaining_btn2">
                            {" "}
                            {asset.percentage}% locked
                          </button>
                        )}
                      </div>
                      <div className="storeTiles_storeTileBottomContainer__2sWHh">
                        <div className="asset_name">{asset.product_name}</div>
                        <div className="asset_prices_div">
                          <div className="asset_title">
                            ₦{numberWithCommas(asset.amount)}{" "}
                            <span className="slashed_price">
                              ₦{numberWithCommas(asset.amount * 2)}
                            </span>
                          </div>
                          <div className="amount_per_day_div">
                            ₦
                            {numberWithCommas(
                              (asset.amount / asset.product_duration).toFixed()
                            )}
                            <span className="per_day_symbol"> / perday</span>
                          </div>
                        </div>
                      </div>
                      {/* </a> */}
                    </div>
                  </li>
                </a>
              )} )}
            </Carousel>


               
              </div>
            </div>

          



            {/* Carousel end==============================
==============================================
============================= */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            <div className="cat_banner_group">
              <div className="cat_banner_group1">
                <img
                  src="/img/fake_assets/apple_iphone_13_gr_1.png"
                  // src={api_url2 + '/'+ seeAll[0].product_image}
                  alt=""
                  className="img_gr1"
                />
              </div>
              <div className="cat_banner_group1">
                <img
                  src="/img/fake_assets/apple_iphone_13_gr_1.png"
                  alt=""
                  className="img_gr1"
                />
              </div>
            </div>
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            {/* =================+++++++++++++++ */}
            <div className="items_all_list">
              <div className="items_all_list_cat_select">
                <div className="cat_select_div1">
                  <div className="cat_select_div1_head">Categories</div>
                  <div className="cat_select_div1_sub_head">
                  {match.params.category} 
                  </div>
                </div>
                <div className="cat_select_div2">
                  <div className="cat_select_div2_head">
                    Brand{" "}
                    <div className="brand_search_area">
                      <input
                        type="search"
                        name="search"
                        id="searchBrand"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search_brand"
                      />
                      <SearchIcon className="search_icon" />
                    </div>
                  </div>
                  <div className="cat_select_div2_body">
                    {searchResults.map((brand,index10) => (
                      <div className="select_brand_check_box" key={index10.toString()}>
                        <label class="label_cont">
                          {brand.product_name}
                          <input
                            type="checkbox"
                            name="apple"
                            //   id="apple"
                            className="brand_check_input"
                            key={brand.product_id}
                          />
                          <span class="checkmark"></span>
                     
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="items_all_list_body_cont">
                <div className="items_all_list_body_cont_head1">
                  Connect Your World{" "}
                  <span className="sort_cont">
                    Sort by:{" "}
                    <span className="sort_btn">
                      Popularity
                      <ArrowDropDownIcon />
                    </span>
                  </span>
                </div>
                <div className="items_all_list_body_cont_head2">
                  {seeAll.length} {seeAll.length <= 1?"prodcut Found":"products Found"}
                  <span className="sort_cont">
                    <WidgetsIcon className="widgi_widgi" />
                  </span>
                </div>
                <div className="items_all_list_body">
                  {/* {seeAll.slice(0,100).map((asset,index11) => ( */}
                       {searchResults.slice(0,100).map((asset,index11) => (


<a href={`/products/details/${asset.id}`} key={index11.toString()}>
<li className="carous_list">
  <div
    className="storeTiles_storeTileContainer__HoGEa"
    style={{
      backgroundImage: `url(${
        api_url2 + "/" + asset.product_image
      })`,
      //           height: "200px",
      //           width: "100%",
      //           backgroundRepeat: "no-repeat",
      //           backgroundSize: "cover",
      //           borderRadius: "8px",
      //           borderBottomLeftRadius: "0px",
      //           borderBottomRightRadius: "0px",
      //   backgroundPositionY: "center",
    }}
  >
    <div className="storeTiles_storeTileOffersContainer__3v8lC">
      <button className="items_remaining_btn">
        {asset.payment_type == "OUTRIGHT" ? (
          <p className="no_margg"> Buy now</p>
        ) : (
          <p className="no_margg"> Save now</p>
        )}
      </button>

      {asset.payment_type == "OUTRIGHT" ? (
        <div></div>
      ) : (
        <button className="items_remaining_btn2">
          {" "}
          {asset.percentage}% locked
        </button>
      )}
    </div>
    <div className="storeTiles_storeTileBottomContainer__2sWHh">
      <div className="asset_name">{asset.product_name}</div>
      <div className="asset_prices_div">
        <div className="asset_title">
          ₦{numberWithCommas(asset.amount)}{" "}
          <span className="slashed_price">
            ₦{numberWithCommas(asset.amount * 2)}
          </span>
        </div>
        <div className="amount_per_day_div">
          ₦
          {numberWithCommas(
            (asset.amount / asset.product_duration).toFixed()
          )}
          <span className="per_day_symbol"> / perday</span>
        </div>
      </div>
    </div>
    {/* </a> */}
  </div>
</li>
</a>


                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


PhonesCatPagDuplicate.propsTypes = {}


const mapStateToProps1 = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default  connect(mapStateToProps1)(PhonesCatPagDuplicate);
