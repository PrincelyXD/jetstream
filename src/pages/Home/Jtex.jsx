import "./css/Jtex.css";
import jetvision from "../../assets/imgs/jetvision.png";
import { motion, AnimatePresence } from "framer-motion";

function Jtex() {
  return (
    <div className="Jtex">
      <div className="lklm">
        <motion.div
          className="topJtex gklo"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(3px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className="spv">WHO WE ARE</span>
          <h2>
            At Jetstream, we understand the complexities of modern logistics
          </h2>
        </motion.div>

        <div className="btmJtex gklo">
          <motion.p
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            JVSaaS, our cutting-edge Software-as-a-Service solution, is crafted
            to simplify your supply chain management, providing unparalleled
            efficiency and control.
          </motion.p>
        </div>
      </div>

      <motion.section
        className="dashImg"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        whileInView={{ opacity: 1, transform: "translateY(3px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <img src={jetvision} alt="" />
      </motion.section>
    </div>
  );
}

export default Jtex;
