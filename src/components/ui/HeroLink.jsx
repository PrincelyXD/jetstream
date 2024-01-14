import "./HeroLink.css"
import { motion, AnimatePresence } from "framer-motion";
function HeroLink() {
    return(
        <motion.div
        initial={{ opacity: 0, transform: "translateY(8px)" }}
        animate={{ opacity: 1, transform: "translateY(3px)" }}
        transition={{ duration: 0.6, delay:0.4}}
      >
         <a className="HeroLink" href="#">Get started</a>
         </motion.div>

    )
}

export default HeroLink;