import { useState } from "react";
import './Toggler.css'
import { Divide as Hamburger } from "hamburger-react";
import NavDropDown from "./NavDropDown";

function Toggler() {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen((currValue) => !currValue);
  }

  const vrt = document.querySelector("#body")
  
 if (isOpen) {
  vrt.classList.add("noScroll")
 }
else{
 vrt.classList.remove("noScroll")
}
 

  return (
    <span className="Toggler">
      <Hamburger
        toggled={isOpen}
        toggle={toggle}
        distance="lg"
        size={29}
        duration={0.2}
      />

      {isOpen && <NavDropDown />}
    </span>
  );
}

export default Toggler;
