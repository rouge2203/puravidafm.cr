import lobsterlabs_logo from "../../assets/lobsterlabs_logo.png";

function Footer() {
  return (
    <div className="  justify-between  py-8 space-y-4 text-black flex flex-col items-center bg-[#fafafa] relative">
      <img
        src={lobsterlabs_logo}
        alt="Lobster Labs Logo"
        className="w-auto h-8 opacity-75 cursor-pointer"
        onClick={() => {
          window.open("https://lobsterlabs.net", "_blank");
        }}
      />
      <h1 className="text-sm text-black opacity-75 font-normal">
        Pura Vida 106.3 FM del Grupo Vision de Costa Rica ®
      </h1>
    </div>
  );
}

export default Footer;
