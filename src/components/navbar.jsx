// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navegar
        <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
      </span>
    </nav>
  );
};

export default NavBar;
