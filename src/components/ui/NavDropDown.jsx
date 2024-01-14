import "./NavDropDown.css";
import { routes } from "../../routes/routes";
import MobileGlobeAnimation from "./svgs/MobileGlobeAnimation"
import { motion, AnimatePresence } from "framer-motion";

function NavDropDown() {
  return (
    <AnimatePresence>
      <motion.div
        className="NavDropDown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <ul className="list-cont">
          {routes.map((route, idx) => {
            const { title, href, id } = route;
            return (
              <motion.li
                initial={{ transform: "translateY(30px)", opacity: 0 }}
                animate={{ transform: "translateY(3px)", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  delay: 0.1 + idx / 10,
                }}
                key={id}
              >
                {" "}
                <a href={href}> {title} </a>{" "}
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          className="globeM"
          initial={{ transform: "translateY(30px)", opacity: 0 }}
          animate={{ transform: "translateY(3px)", opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
            <MobileGlobeAnimation/>
          {/* <div className="img-div">
            
          </div> */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NavDropDown;
