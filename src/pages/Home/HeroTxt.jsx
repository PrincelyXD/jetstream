import { motion, AnimatePresence } from "framer-motion";
import HeroLink from "../../components/ui/HeroLink";

function HeroTxt() {
  return (
    <AnimatePresence>
      <div className="HeroTsx">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="top-span"
        >
          One platform. unmatched excellence.
        </motion.span>

        <motion.div
          className="generic"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(3px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2>
            E-logistics without  the headaches
          </h2>
          <p>
            Revolutionize your supply chain management with JVSaaS. 
            Efficiency, visibility, control - experience the future of
            logistics.
          </p>
        </motion.div>

          <HeroLink />


      </div>
    </AnimatePresence>
  );
}

export default HeroTxt;
