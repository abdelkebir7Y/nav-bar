import { LgNavBar } from "./lg-nav-bar.component";
import { MobileNavBar } from "./mobile-nav-bar.component";

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
  const isMobile = window.innerWidth < 1200;

  return (
    <>
      {isMobile ? (
        <MobileNavBar navBarRoutes={NAVIGATION_ROUTES} />
      ) : (
        <LgNavBar navBarRoutes={NAVIGATION_ROUTES} />
      )}
    </>
  );
};
