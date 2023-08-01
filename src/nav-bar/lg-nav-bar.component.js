import logo from "../assets/images/logo.png";
import search from "../assets/icons/search.png";
import mail from "../assets/icons/mail.png";
import globe from "../assets/icons/globe.png";
import { NavBarItem } from "./lg-nav-bar-item.component";

export const LgNavBar = ({ navBarRoutes }) => {
  return (
    <nav className="sticky  top-0 border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <div className="mr-4 flex items-center gap-2">
          <a href="/" className="shrink">
            <img src={logo} className="mr-3 h-8" alt="Logo" />
          </a>
        </div>
        <div
          className=" relative bottom-0 left-0 right-0 top-0  block bg-white   "
          id="navbar-default"
        >
          <ul className="relative flex   flex-row space-x-2 p-0 font-medium">
            {navBarRoutes.map(({ title, urlPath, nestedRoutes }) => (
              <NavBarItem
                title={title}
                urlPath={urlPath}
                nestedRoutes={nestedRoutes}
                key={title}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-row items-center gap-x-3">
          <img src={search} className="h-6" alt="icon" />
          <img src={mail} className="h-6" alt="icon" />
          <img src={globe} className="h-6" alt="icon" />
        </div>
      </div>
    </nav>
  );
};
