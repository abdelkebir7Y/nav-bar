export const MobileNavBarItem = ({ title, urlPath, nestedRoutes, onPress }) => {
  console.log(nestedRoutes);
  return (
    <li class="gb-red-300 group ">
      {nestedRoutes ? (
        <p
          onClick={onPress(nestedRoutes)}
          href={urlPath}
          class={`  flex items-center gap-3  px-4 py-3 text-primary  `}
        >
          {title}
        </p>
      ) : (
        <a
          href={urlPath}
          class={`  flex items-center gap-3  px-4 py-3 text-primary  `}
        >
          {title}
        </a>
      )}
    </li>
  );
};
