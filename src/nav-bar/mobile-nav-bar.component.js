import logo from "../assets/images/logo.png";
import mobileMenu from "../assets/icons/menu.png";
import search from "../assets/icons/search.png";
import mail from "../assets/icons/mail.png";
import globe from "../assets/icons/globe.png";
import arrowBack from "../assets/icons/arrow-back.png";
import close from "../assets/icons/close-2.png";
import { MobileNavBarItem } from "./mobile-nav-bar-item.component";
import { useState } from "react";

export const MobileNavBar = ({ navBarRoutes }) => {
  const [items, setItems] = useState(navBarRoutes);
  const [nestingDept, setNestingDept] = useState(0);
  const [open, setOpen] = useState(false);

  const onItemPressHandler = (nestedRoutes) => () => {
    console.log("item pressed ");
    setItems(nestedRoutes);
    setNestingDept(nestingDept + 1);
  };

  const onMenuIconPressed = () => {
    if (nestingDept > 0) {
      setItems(navBarRoutes);
      setNestingDept(0);
    } else {
      setOpen(!open);
    }
  };

  return (
    <nav className="sticky  top-0 border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <div className="z-50 mr-4 flex items-center gap-2">
          <img
            src={open ? (nestingDept ? arrowBack : close) : mobileMenu}
            alt=""
            className="w-6"
            onClick={onMenuIconPressed}
          />
          <a href="/" className="shrink">
            <img src={logo} className="mr-3 h-8" alt="Logo" />
          </a>
        </div>
        {open && (
          <div
            className="absolute bottom-0 left-0 right-0 top-0 z-40  h-[100vh] bg-white pt-20 "
            id="navbar-default"
          >
            <ul className="relative flex flex-col p-0 font-medium ">
              {items.map(({ title, urlPath, nestedRoutes }) => (
                <MobileNavBarItem
                  title={title}
                  urlPath={urlPath}
                  nestedRoutes={nestedRoutes}
                  key={title}
                  onPress={onItemPressHandler}
                />
              ))}
            </ul>
          </div>
        )}
        <div className="z-50 flex flex-row items-center gap-x-3">
          <img src={search} className="h-6" alt="icon" />
          <img src={mail} className="h-6" alt="icon" />
          <img src={globe} className="h-6" alt="icon" />
        </div>
      </div>
    </nav>
  );
};
