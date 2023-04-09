const Header = () => {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div>
          H's Portfolio
          {/* <img className="w-12" src={ReactLogo} alt="React" /> */}
        </div>
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          <li className="bg-indigo-300 btn-style">Introduce</li>
          <li className="bg-indigo-500 btn-style">Portfolio</li>
          <li className="bg-indigo-700 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
