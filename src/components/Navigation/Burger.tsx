import { useOpenMenu } from "@/hooks";

export const OpenBurger = () => {
  const { handleToggleMenu } = useOpenMenu();
  return (
    <button
      type="button"
      className="group flex justify-center items-center w-12 h-12 md:w-16 md:h-16"
      aria-label="Open the navigation"
      onClick={handleToggleMenu}
    >
      <div className="flex flex-col justify-between items-end w-3/4 h-2/5 group-hover:rotate-90 group-focus-visible:rotate-90 transition-all duration-300">
        <span className="block w-full h-[2px] bg-white" />
        <span className="block w-2/3 h-[2px] bg-white group-hover:w-full group-focus-visible:w-full transition-all duration-150 delay-300" />
        <span className="block w-1/3 h-[2px] bg-white group-hover:w-full group-focus-visible:w-full transition-all duration-150 delay-300" />
        <span className="visually-hidden">Open the navigation</span>
      </div>
    </button>
  );
};

export const CloseBurger = () => {
  const { handleToggleMenu } = useOpenMenu();
  return (
    <button
      type="button"
      className="group flex justify-center items-center w-12 h-12 md:w-16 md:h-16"
      aria-label="Close the navigation"
      onClick={handleToggleMenu}
    >
      <div className="relative w-full h-full group-hover:rotate-90 group-focus-visible:rotate-90 transition-all duration-300">
        <span className="block w-2/3 h-[2px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <span className="block w-2/3 h-[2px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        <span className="visually-hidden">Close the navigation</span>
      </div>
    </button>
  );
};
