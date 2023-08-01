import logo from "../assets/images/logo.png";
import mobileMenu from "../assets/icons/menu.png";
import search from "../assets/icons/search.png";
import mail from "../assets/icons/mail.png";
import globe from "../assets/icons/globe.png";
import arrowBack from "../assets/icons/arrow-back.png";
import close from "../assets/icons/close-2.png";
import { MobileNavBarItem } from "./mobile-nav-bar-item.component";
import { useState } from "react";

const NAVIGATION_ROUTES = [
  {
    title: "Home",
    urlPath: "/",
  },
  {
    title: "About us",
    urlPath: "/About-us",
  },
  {
    title: "Products",
    urlPath: "/Products",
  },
  {
    title: "What we offer",
    nestedRoutes: [
      {
        title: "offer 1",
        nestedRoutes: [
          {
            title: "offer 1 - 1",
            urlPath: "/offer/1",
          },
          {
            title: "offer 1 - 2",
            nestedRoutes: [
              {
                title: "offer 1 - 2 - 1",
                urlPath: "/offer/1",
              },
              {
                title: "offer 1 - 2 - 2",
                urlPath: "/offer/2",
              },
            ],
          },
        ],
      },
      {
        title: "offer 2",
        urlPath: "/offer/2",
      },
    ],
  },
  {
    title: "Projects",
    urlPath: "/Projects",
  },
  {
    title: "Download",
    urlPath: "/Download",
  },
];

export const MobileNavBar = () => {
  const [items, setItems] = useState(NAVIGATION_ROUTES);
  const [nestingDept, setNestingDept] = useState(0);
  const [open, setOpen] = useState(false);

  const onItemPressHandler = (nestedRoutes) => () => {
    console.log("item pressed ");
    setItems(nestedRoutes);
    setNestingDept(nestingDept + 1);
  };

  const onMenuIconPressed = () => {
    if (nestingDept > 0) {
      setItems(NAVIGATION_ROUTES);
      setNestingDept(0);
    } else {
      setOpen(!open);
    }
  };

  return (
    <nav class="sticky  top-0 border-gray-200 bg-white shadow-sm">
      <div class="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <div class="z-50 mr-4 flex items-center gap-2">
          <img
            src={open ? (nestingDept ? arrowBack : close) : mobileMenu}
            alt=""
            class="w-6"
            onClick={onMenuIconPressed}
          />
          <a href="/" class="shrink">
            <img src={logo} class="mr-3 h-8" alt="Logo" />
          </a>
        </div>
        {open && (
          <div
            class="absolute bottom-0 left-0 right-0 top-0 z-40  h-[100vh] bg-white pt-20 "
            id="navbar-default"
          >
            <ul class="relative flex flex-col p-0 font-medium ">
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
        <div class="z-50 flex flex-row items-center gap-x-3">
          <img src={search} class="h-6" alt="icon" />
          <img src={mail} class="h-6" alt="icon" />
          <img src={globe} class="h-6" alt="icon" />
        </div>
      </div>
    </nav>
  );
};
