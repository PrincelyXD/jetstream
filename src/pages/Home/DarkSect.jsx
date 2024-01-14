import HeroLink from "../../components/ui/HeroLink";
import DrkStar from "../../components/ui/svgs/DrkStar";
import DrkPx from "../../components/ui/svgs/DrkPx";
import "./css/DarkSect.css";
import { motion, AnimatePresence } from "framer-motion";
import BlvckBtm from "./BlvckBtm";

function DarkSect() {
  return (
    <section className="DarkSect">

      <div className="blvck">
        <div className="blvck-top">
          <motion.section
            className="vswrd"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(3px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>BUILT FOR YOU</span>
            <h2>What sets us apart</h2>

            <p>
              At JetVision, we grasp the intricacies of today's logistics
              landscape, delivering unmatched efficiency and control.
            </p>
            <HeroLink />
          </motion.section>

          <section className="mtwdo">
            <motion.div
              className="wtyk"
              initial={{ opacity: 0, transform: "translateY(40px)" }}
              whileInView={{ opacity: 1, transform: "translateY(3px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DrkStar />
              <div>
                <h2>AI-Enabled Automation</h2>
                <p>
                  Harness AI's capabilities to streamline document handling.
                  Instantly convert a photo into a shipment booking, receive
                  real-time alerts on vessel status, and benefit from
                  AI-generated suggestions for precise document alignment with
                  client requests.
                </p>
              </div>
            </motion.div>

            <hr />

            <motion.div
              className="wtyk2 wtyk"
              initial={{ opacity: 0, transform: "translateY(20px)" }}
              whileInView={{ opacity: 1, transform: "translateY(3px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <DrkPx />
              <div>
                <h2>Rapid Trade Finance</h2>
                <p>
                  Unlock trade finance solutions seamlessly on our platform.
                  Connect clients to financing based on credit and shipment
                  data, significantly reducing wait times from 4 weeks to just
                  48 hours.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
{/* ----------white box --------- */}


      <BlvckBtm/>
      </div>

    </section>
  );
}

export default DarkSect;
