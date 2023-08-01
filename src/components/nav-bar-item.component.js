import arrowDown from "../assets/icons/arrow-down.png";

export const NavBarItem = ({ title, urlPath, nestedRoutes }) => {
  const active = urlPath === window.location.pathname;

  const classNames = active
    ? " bg-primary text-white"
    : "text-primary hover:bg-gray-100";

  return (
    <li class="gb-red-300 group relative">
      <a
        href={urlPath}
        class={`  flex items-center gap-3  px-4 py-2  ${classNames}`}
      >
        {title}
        {!!nestedRoutes && <img src={arrowDown} class="h-3" alt="icon" />}
      </a>
      {!!nestedRoutes && (
        <div class="absolute bottom-0 left-0 right-0 top-full hidden  h-full  w-[200px] bg-transparent pt-4 text-sm text-gray-600 hover:block group-hover:block">
          <ul class="flex flex-col bg-white drop-shadow-lg">
            {nestedRoutes.map(({ title, urlPath, nestedRoutes }) => (
              <li class="group/contact relative px-5 py-3 hover:bg-gray-200">
                <a class="" href={urlPath}>
                  {title}
                </a>
                {!!nestedRoutes && (
                  <div class="absolute bottom-0   left-full   right-0 top-0   hidden h-full w-[200px] bg-transparent pt-4   text-sm text-gray-600 hover:block group-hover/contact:block">
                    <ul class="flex flex-col bg-white drop-shadow-lg">
                      {nestedRoutes.map(({ title, urlPath, nestedRoutes }) => (
                        <li
                          class="group/contact-nested relative px-5 py-3 hover:bg-gray-200"
                          href="#"
                        >
                          <a class="" href={urlPath}>
                            {title}
                          </a>
                          {!!nestedRoutes && (
                            <div class="absolute bottom-0   left-full   right-0 top-0   hidden   h-full w-[200px] bg-transparent pt-4 text-sm text-gray-600 hover:block group-hover/contact-nested:block">
                              <ul class="flex flex-col bg-white  drop-shadow-lg">
                                {nestedRoutes.map(({ title, urlPath }) => (
                                  <li class="px-5 py-3 hover:bg-gray-200">
                                    <a class="" href={urlPath}>
                                      {title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
