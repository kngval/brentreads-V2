import ThemeSwitch from "../utils/theme";

const Header = () => {
  return (
    <div className="main">
      <div>
        <div className="justify-between mt-5 text-center mb-10 lg:flex text-xs lg:text-[1rem] font-ibm">
          <div>An Independent Reading Journal.</div>
          <div className="lg:text-end">
            <div>Last Updated: 21 NOV 2026</div>
            <div className="my-5 lg:my-0">
              <ThemeSwitch />
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between text-center lg:text-start">
          <div className="mb-5 lg:mb-0">
            <h1 className="font-baskerville text-3xl lg:text-5xl">The Sanctuary Hill.</h1>
            <div className="font-lora italic mt-5">The soil of a man's heart is stonier; a man grows what he can and tends it. - Stephen King, 'Pet Sematary'</div>
          </div>
          <div className="font-ibm lg:text-end">

            <div>A journal by KV</div>
            <div>Las Vegas, NV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
