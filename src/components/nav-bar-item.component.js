import arrowDown from "../assets/icons/arrow-down.png";

export const NavBarItem = ({ title, urlPath, nestedRoutes }) => {
  const active = urlPath === window.location.pathname;

  const classNames = active
    ? " lg:bg-primary lg:text-white"
    : "lg:hover:bg-gray-100";

  return (
    <li class="gb-red-300 group lg:relative">
      <a
        href={urlPath}
        class={`  flex items-center gap-3  px-4 py-2 text-primary ${classNames}`}
      >
        {title}
        {!!nestedRoutes && <img src={arrowDown} class="h-3" alt="icon" />}
      </a>
      {!!nestedRoutes && (
        <div class="absolute bottom-0 left-0 right-0 top-0 hidden h-full bg-white text-sm text-primary hover:block group-hover:block lg:top-full lg:w-[200px] lg:bg-transparent lg:pt-4 lg:text-gray-600">
          <ul class="flex flex-col bg-white lg:drop-shadow-lg">
            {nestedRoutes.map(({ title, urlPath, nestedRoutes }) => (
              <li class="group/contact px-5 py-3 hover:bg-gray-200 lg:relative">
                <a class="" href={urlPath}>
                  {title}
                </a>
                {!!nestedRoutes && (
                  <div class="absolute bottom-0 left-0 right-0 top-0 hidden h-full bg-white text-sm text-primary hover:block group-hover/contact:block lg:left-full lg:top-0 lg:w-[200px] lg:bg-transparent lg:pt-4 lg:text-gray-600">
                    <ul class="flex flex-col bg-white lg:drop-shadow-lg">
                      {nestedRoutes.map(({ title, urlPath, nestedRoutes }) => (
                        <li
                          class="group/contact-nested px-5 py-3 hover:bg-gray-200 lg:relative"
                          href="#"
                        >
                          <a class="" href={urlPath}>
                            {title}
                          </a>
                          {!!nestedRoutes && (
                            <div class="absolute bottom-0 left-0 right-0 top-0 hidden h-full bg-white text-sm text-primary hover:block group-hover/contact-nested:block lg:left-full lg:top-0 lg:w-[200px] lg:bg-transparent lg:pt-4 lg:text-gray-600">
                              <ul class="flex flex-col bg-white lg:drop-shadow-lg">
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
