export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 py-12 sm:px-10 bg-black relative md:grid md:place-items-center border-t-2 border-stone-600 border-dashed">
      <div className="flex justify-between items-center md:w-6/12 max-w-[650px]">
        <p className="font-unbounded font-[500] text-center text-2xl md:text-3xl xl:text-4xl bg-gradient-to-r from-indigo-600 via-indigo-300 to-blue-300 text-transparent bg-clip-text select-none">
          @mpiskadlo
        </p>
        <ul className="text-white flex flex-col items-end gap-2 font-unbounded text-base md:text-lg xl:text-xl">
          <li>
            <a
              href="mailto:milosz.devmail@gmail.com"
              className="hover:underline"
            >
              Via mail
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mvjl000"
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mi%C5%82osz-piskad%C5%82o-477a2a1b5/"
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mpiskadlo/"
              rel="noreferrer"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <p className="absolute bottom-0 left-0 pl-4 pb-1 text-indigo-200 font-[300]">
        Copyright &copy; Miłosz Piskadło {year}
      </p>
    </footer>
  );
};
