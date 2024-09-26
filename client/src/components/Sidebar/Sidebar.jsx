import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { menuStyles } from "./menuStyles";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Menu
        styles={menuStyles}
        isOpen={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
      ></Menu>
    </>
  );
};

export default Sidebar;
