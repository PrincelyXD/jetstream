import "./Footer.css";
import footerlogo from "./ui/imgs/footerlogo.png";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  return (
    <div className="Footer">
      <motion.section
        className="FooterTop"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="logo-cont">
          <img src={footerlogo} alt="" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.281"
              height="36"
              viewBox="0 0 19.281 36"
            >
              <path
                id="Icon_awesome-facebook-f"
                data-name="Icon awesome-facebook-f"
                d="M19.627,20.25l1-6.515H14.375V9.507c0-1.782.873-3.52,3.673-3.52h2.842V.44A34.658,34.658,0,0,0,15.846,0C10.7,0,7.332,3.12,7.332,8.769v4.965H1.609V20.25H7.332V36h7.043V20.25Z"
                transform="translate(-1.609)"
                fill="#fff"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31.5"
              height="31.499"
              viewBox="0 0 31.5 31.499"
            >
              <path
                id="Icon_awesome-linkedin-in"
                data-name="Icon awesome-linkedin-in"
                d="M7.051,31.5H.52V10.47H7.051ZM3.782,7.6A3.8,3.8,0,1,1,7.564,3.783,3.814,3.814,0,0,1,3.782,7.6ZM31.493,31.5H24.976V21.263c0-2.44-.049-5.569-3.4-5.569-3.4,0-3.916,2.651-3.916,5.393V31.5H11.142V10.47h6.263v2.869H17.5a6.862,6.862,0,0,1,6.179-3.4c6.609,0,7.824,4.352,7.824,10.005V31.5Z"
                transform="translate(0 -0.001)"
                fill="#fff"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="29.239"
              viewBox="0 0 36 29.239"
            >
              <path
                id="Icon_awesome-twitter"
                data-name="Icon awesome-twitter"
                d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z"
                transform="translate(0 -3.381)"
                fill="#fff"
              ></path>
            </svg>
          </span>
        </div>

        <div className="link-box">
          <div>
            <h2>Navigation</h2>
            <a href="#">Company</a>
            <a href="#">Products</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <h2>Resources</h2>
            <a href="#">FaQs</a>
            <a href="#">Articles</a>
          </div>
          <div>
            <h2>Contact Us</h2>
            <a href="#">+233 55 568 3601</a>
            <a href="#">jetstreamafrica.com</a>
            <a href="#">enquiry@jetstreamafrica.com</a>
          </div>
          <div>
            <h2>Our Locations</h2>

            <p>Faculty Building, Meridian Road, Community One, Tema, Ghana.</p>
            <p>
              No. 10 Workstation, Maryland Mall, 350-360 Ikorodu Rd, Ikeja,
              Lagos
            </p>
          </div>
        </div>
      </motion.section>

      <section className="footerBtm">
        <div className="typBlack">
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Usage</a>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © 2024 Jetstream Logistics. All Rights Reserved.
          </motion.span>
        </div>
      </section>
    </div>
  );
}

export default Footer;
