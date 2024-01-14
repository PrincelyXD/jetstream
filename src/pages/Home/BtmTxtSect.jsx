import "./css/BtmTxtSect.css";
import Globe2 from "../../components/ui/svgs/Globe2";
import { motion, AnimatePresence } from "framer-motion";

function BtmTxtSect() {
  return (
    <section className="TxtSect BtmTxtSect">
      <motion.div
        className="svty "
        initial={{ opacity: 0, transform: "translateY(30px)" }}
        whileInView={{ opacity: 1, transform: "translateY(3px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <span>GET STARTED TODAY</span>
        <h2>Ready to Elevate Your Logistics Experience?</h2>

        <p>
          Experience the power of JVSaaS. Get started today for a more efficient
          and streamlined supply chain
        </p>
        <div className="wfys">
          <a className="HeroLink" href="">
            Request a demo
          </a>{" "}
          <a className="HeroLink lnkdif" href="">
            {" "}
            Get Started
          </a>
        </div>
      </motion.div>

      <Globe2 />
    </section>
  );
}
export default BtmTxtSect;
