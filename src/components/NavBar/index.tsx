import CartWidget from "../CartWidget";
import logo from "../imgs/logo3.png";

const NavBar = () => {
  return (
    <header className=" ">
      <nav className="flex space-x-10 bg-emerald-600 text-green-950 font-bold m-auto">
        <img src={logo} alt="" className="w-28" />
        <div className="flex space-x-4 items-end">
          <a href="./">PROMOÇÕES</a>
          <a href="./">PC GAMER</a>
          <a href="./">HARDWARE</a>
          <a href="./">PERIFÉRICOS</a>
          <a href="./">MONITORES</a>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
