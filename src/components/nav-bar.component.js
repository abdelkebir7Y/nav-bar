import logo from "../assets/images/logo.png";
import mobileMenu from "../assets/icons/menu.png";
import search from "../assets/icons/search.png";
import mail from "../assets/icons/mail.png";
import globe from "../assets/icons/globe.png";
import { NavBarItem } from "./nav-bar-item.component";

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
    urlPath: "/offers",
    nestedRoutes: [
      {
        title: "offer 1",
        urlPath: "/offer/1",
        nestedRoutes: [
          {
            title: "offer 1 - 1",
            urlPath: "/offer/1",
          },
          {
            title: "offer 1 - 2",
            urlPath: "/offer/2",
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

export const NavBar = () => {
  return (
    <nav class="border-gray-200 bg-white shadow-sm">
      <div class="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <div class="mr-4 flex items-center gap-2">
          <img src={mobileMenu} alt="" class="w-6 lg:hidden" />
          <a href="/" class="shrink">
            <img src={logo} class="mr-3 h-8" alt="Logo" />
          </a>
        </div>
        <div
          class="absolute bottom-0 left-0 right-0 top-0 -z-50 hidden h-[100vh] bg-white pt-20 lg:relative lg:z-0 lg:block lg:h-auto lg:w-auto lg:pt-0"
          id="navbar-default"
        >
          <ul class="relative flex flex-col p-0 font-medium lg:flex-row lg:space-x-2">
            {NAVIGATION_ROUTES.map(({ title, urlPath, nestedRoutes }) => (
              <NavBarItem
                title={title}
                urlPath={urlPath}
                nestedRoutes={nestedRoutes}
                key={title}
              />
            ))}
          </ul>
        </div>
        <div class="flex flex-row items-center gap-x-3">
          <img src={search} class="h-6" alt="icon" />
          <img src={mail} class="h-6" alt="icon" />
          <img src={globe} class="h-6" alt="icon" />
        </div>
      </div>
    </nav>
  );
};