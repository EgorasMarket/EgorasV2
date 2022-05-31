import React, { useEffect } from "react";
import { Twitter, Facebook, YouTube, Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../../../../css/footer.css";
import "../../../../css/footerMobile.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Footer = () => {
  const FooterHide = window.location.pathname;
  const myArr = FooterHide.split("/");
  useEffect(() => {
    if (FooterHide === "/login") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/signup") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/register") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/authenticate/" + myArr[2]) {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/super_admin/user_overview") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/wallet") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/wallet/withdrawal") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/swap") {
      document.getElementById("FooterId").style.display = "none";
    }
    if ((FooterHide === "/products/details/" + myArr[3], myArr[4])) {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/dashboard/accounts/accounts") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/dashboard/accounts/kin") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/orders") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/dashboard/accounts/security") {
      document.getElementById("FooterId").style.display = "none";
    }

    if (FooterHide === "/super_admin/user_wallet") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/user_wallet") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/super_admin/login") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/login/super_admin") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/signup/super_admin") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/super_admin/all_user") {
      document.getElementById("FooterId").style.display = "none";
    }

    // ////console.log(myArr[3], myArr[4]);
    if (FooterHide === "/dashboard/") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/savings") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/cart") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/super_admin") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/super_admin/all_products") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/super_admin/register_user") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/products/categories/id-phone") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/products") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/dashboard/accounts") {
      document.getElementById("FooterId").style.display = "none";
    }
    if (FooterHide === "/whitepaper") {
      document.getElementById("FooterId").style.display = "none";
    }
    // ////console.log(myArr[1]);
    if (myArr[1] === "super_admin") {
      document.getElementById("FooterId").style.display = "none";
    }
  });

  const classes = useStyles();

  return (
    <div id="FooterId">
      <section className="footerSection">
        <div className="container">
          <div className="footerArea">
            <div className="footerCard1">
              <a href="#">
                {" "}
                <img
                  src="/img/egoras-logo.svg"
                  alt="..."
                  className="egr2-logo"
                />
              </a>

              <div className="footerIcons">
                <a
                  href="https://twitter.com/egorasmarket"
                  className="twitter"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  href="https://web.facebook.com/egorasmarket/"
                  className="twitter"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  href="https://instagram.com/egorasofficial"
                  className="twitter"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ"
                  className="twitter"
                  target="_blank"
                >
                  <YouTube />
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">General</div>
              <div className="footerLinks">
                {/* <a href="/" className="c1link1 a">
                  Home
                </a> */}
                <a
                  href="/explore_collaterals"
                  className="c1link1"
                  target="_blank"
                >
                  Explore Collaterals
                </a>
                <a href="/whitepaper" className="c1link1" target="_blank">
                  White Paper
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">About Us</div>
              <div className="footerLinks">
                <a href="#howitworks" className="c1link1 a">
                  How it works
                </a>
                {/* <a href="#token" className="c1link1">
                  Tokens
                </a> */}
                <a
                  href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                  className="c1link1"
                  target="_blank"
                >
                  Stories
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">Legal</div>
              <div className="footerLinks">
                <a href="/privacy" className="c1link1 a" target="_blank">
                  Privacy policy
                </a>
                <a href="/terms-conditions" className="c1link1" target="_blank">
                  Terms & conditions
                </a>
                <a
                  href="/img/bye law/Scan.pdf"
                  className="c1link1"
                  target="_blank"
                >
                  Co-operative Bye law
                </a>
                {/* <a href="#partners" className="c1link1" target="_blank">
                  Partners
                </a> */}
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">Tokens</div>
              <div className="footerLinks">
                {/* <a href="/egr-token" className="c1link1" target="_blank">
                  EGR
                </a> */}
                {/* <a href="/engn-token" className="c1link1" target="_blank">
                  eNGN
                </a> */}
                <a href="/egc_token" className="c1link1" target="_blank">
                  EGC
                </a>
              </div>
            </div>

            <div className="footerCard2">
              <div className="footerCardTitle">Contact Us</div>
              <div className="footerLinks">
                <a href="https://t.me/egorasmarket" className="c1link1 a">
                  Get in Touch Today
                </a>
                <a href="" className="c1link1"></a>
                <a href="/" className="c1linklast">
                  cs@egoras.com
                </a>
              </div>
            </div>

            {/* =================================
            ==================== */}
            <div className="footerCard3">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>General </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    {/* <a href="/" className="c1link1 a">
                      Home
                    </a> */}
                    <a
                      href="/explore_collaterals"
                      className="c1link1"
                      target="_blank"
                    >
                      Explore Collaterals
                    </a>
                    <a href="/whitepaper" className="c1link1" target="_blank">
                      White Paper
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>About Us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    <a href="#howitworks" className="c1link1 a">
                      How it works
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ/videos"
                      className="c1link1"
                      target="_blank"
                    >
                      Stories
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Legal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    <a href="/privacy" className="c1link1 a" target="_blank">
                      Privacy policy
                    </a>
                    <a
                      href="/terms-conditions"
                      className="c1link1"
                      target="_blank"
                    >
                      Terms & conditions
                    </a>
                    <a
                      href="/img/bye law/Scan.pdf"
                      className="c1link1"
                      target="_blank"
                    >
                      Co-operative Bye law
                    </a>
                    {/* <a href="#partners" className="c1link1" target="_blank">
                      Partners
                    </a> */}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Tokens</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    {/* <a href="/egr-token" className="c1link1 a" target="_blank">
                      EGR
                    </a> */}
                    {/* <a href="/engn-token" className="c1link1" target="_blank">
                      eNGN
                    </a> */}
                    <a href="/egc_token" className="c1link1" target="_blank">
                      EGC
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Contact Us
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="footerLinks">
                    <a href="https://t.me/egorasmarket" className="c1link1 a">
                      Get in Touch Today
                    </a>
                    <a href="" className="c1link1"></a>
                    <a href="/" className="c1linklast">
                      cs@egoras.com
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <span className="law_write_up">
            “Egoras” and “Egoras.com” are trademarks of Egoras Technologies
            Limited, a company duly registered with CAC with{" "}
            <span className="add_color">RC Number: 1832671. </span>
            Egoras.com is a platform used for the provision of financial
            services under a Multipurpose Co-operative License with registration
            number <span className="add_color">34052</span>. The Co-operative
            and Egoras Technologies Limited are duly registered legal entities
            in Nigeria.
            <br />
            <br /> By the Co-operative’s Bye Law, every member of the
            Co-operative shall subscribe to a minimum of one share and may
            subscribe to additional shares subject to 20% maximum holding in
            accordance with the provision of section 27 of the Nigerian
            Co-operative Societies Act. Members of the Co-operative have their
            shareholding represented in{" "}
            <a href="/egc_token" className="add_color">
              {" "}
              Egoras Credit (EGC)
            </a>
            . However, possession of EGC is not proof of membership.
          </span>
          <hr></hr>
          <h5 className="footerBottomPara">
            ©️ 2022 Egoras Technologies LTD(RC - 1832671). All rights reserved .
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Footer;
