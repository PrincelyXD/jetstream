import "./css/TxtSect.css";
import HeroLink from "../../components/ui/HeroLink";
import { motion, AnimatePresence } from "framer-motion";

function TxtSect() {
  return (
    <section className="TxtSect">
      <motion.div className="parent"
      initial={{ opacity: 0, transform: "translateY(30px)" }}
      whileInView={{ opacity: 1, transform: "translateY(3px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      > 
        <span>OUR SOLUTION</span>
        <h2>Introducing JetVision</h2>

        <p>
          Supercharge your African logistics business with our automation
          platform. Boost services, from trade finance to insurance, for
          enhanced client support.
        </p>
        <div className="wfys">
          <HeroLink />
        </div>
      </motion.div>
    </section>
  );
}
export default TxtSect;
