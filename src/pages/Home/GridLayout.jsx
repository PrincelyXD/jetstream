import "./css/GridLayout.css";
import Grid1 from "../../components/ui/svgs/Grid1";
import Icon1 from "../../components/ui/svgs/Icon1";
import Icon2 from "../../components/ui/svgs/Icon2";
import gridImg from "../../assets/imgs/grid2.png";
import { motion, AnimatePresence } from "framer-motion";
function GridLayout() {
  return (
    <div className="GridLayout">
      <section className="parent-cont">
        <div className=" cont cont1">
          <motion.div
            className="box hee"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>CENTRALIZE CLIENT DOCUMENTS</span>
            <p>
              Get and store documents from your clients in one place. Locate
              historical documents with a few clicks of a mouse.
            </p>
            <Grid1 />
          </motion.div>

          <motion.div
            className="box2"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Icon1 />
            <span>IMPLEMENT VESSEL UPDATES</span>
            <p>
              Subscribe to automated updates on vessel arrival and other key
              milestones, pushed to your mobile phone. Send some or all of those
              updates to your clients, automatically.
            </p>
          </motion.div>
        </div>

        <div className=" cont cont2">
          <motion.div
            className="box2"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Icon2 />
            <span>AUTOMATE SHIPPING DOCUMENT</span>
            <p>
              Leverage automation to digitally scan and generate shipping
              documents, and streamline the process of incorporating corrections
              and changes.{" "}
            </p>
          </motion.div>

          <motion.div
            className="box ooes"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={gridImg} alt="" />
            <span>SUPPORT SHIPMENT GROWTH</span>

            <p>
              Help your clients grow their shipment volumes by accessing trade
              finance and insurance products to optimize cash flow and manage
              risks.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default GridLayout;
