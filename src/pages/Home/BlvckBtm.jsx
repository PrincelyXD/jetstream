import "./css/BlvckBtm.css";
import Bn1 from "../../components/ui/svgs/Bn1";
import Bn2 from "../../components/ui/svgs/Bn2";
import Bn3 from "../../components/ui/svgs/Bn3";
import Bn4 from "../../components/ui/svgs/Bn4";
import Bn5 from "../../components/ui/svgs/Bn5";
import Bn6 from "../../components/ui/svgs/Bn6";
import { motion, AnimatePresence } from "framer-motion";

function BlvckBtm() {
  return (
    <motion.div
      className="BlvckBtm"
      initial={{ opacity: 0, transform: "translateY(50px)" }}
      whileInView={{ opacity: 1, transform: "translateY(3px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="tvtop">
        <motion.div
          className="dif1"
          initial={{ opacity: 0, transform: "translateY(40px)" }}
          whileInView={{ opacity: 1, transform: "translateY(3px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>BENEFITS TO YOUR BUSINESS</span>
          <h2>Why choose JVSaaS for your logistics needs?</h2>
        </motion.div>

        <motion.span
          className="sales-route"
          initial={{ opacity: 0, transform: "translateY(40px)" }}
          whileInView={{ opacity: 1, transform: "translateY(3px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#">
            {" "}
            <span>Talk to Sales</span>{" "}
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="#03C161"></rect>
              <path
                d="M33 23.0005L22 34.0005"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M27.0039 22H33.0039C33.4753 22 33.711 22 33.8575 22.1464C34.0039 22.2929 34.0039 22.5286 34.0039 23V29"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </motion.span>
      </section>

      <motion.section
        className="tvbtm"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        whileInView={{ opacity: 1, transform: "translateY(3px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div>
          <Bn1 />
          <p>
            Enhance satisfaction and loyalty for modern clients, who require
            digitized solutions.
          </p>
        </div>

        <div>
          <Bn2 />
          <p>
            Differentiate your services with faster payment and document
            processing time, driven by automation.{" "}
          </p>
        </div>

        <div>
          <Bn3 />
          <p>
            Improve customer service without increasing your staff size with
            automated communications.
          </p>
        </div>

        <div>
          <Bn4 />
          <p>
            Boost your client's shipment volumes, and your revenues, with trade
            finance products.
          </p>
        </div>

        <div>
          <Bn5 />
          <p>
            Reduce risks for your clients, and add profit to your business, by
            reselling cargo insurance.{" "}
          </p>
        </div>

        <div>
          <Bn6 />
          <p>
            Become eligible to acquire referred clients from Jetstream's network
            of freight forwarders in other trade corridors.{" "}
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default BlvckBtm;
