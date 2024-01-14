import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import HeroLink from "./ui/HeroLink";
import Logo from "./ui/Logo";
import Toggler from "./ui/Toggler";
import { routes } from "../routes/routes";

function Header() {
  return (
    <div className="Header">
      <Logo />
      
      <motion.div
        className="m-div"
        initial={{ opacity: 0, transform: "translateY(8px)" }}
        whileInView={{ opacity: 1, transform: "translateY(3px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ul className="nav-links">
          {routes.map((route) => {
            const { title, href, id } = route;
            return (
              <li key={id}>
                {" "}
                <a href={href}> {title} </a>{" "}
              </li>
            );
          })}
        </ul>
      </motion.div>

      <span className="nav-btn">
         <HeroLink />
      </span>
     

      <Toggler />
    </div>
  );
}

export default Header;
