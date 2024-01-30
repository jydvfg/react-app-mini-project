import menuImg from "../assets/—Pngtree— vector icon_3791388.png";

export default function Navbar() {
  return (
    <nav>
      <img src={menuImg} className="menu-icon" alt="menu-icon"></img>
      <h1 id="app-name"> List</h1>
    </nav>
  );
}
