import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/beers">Beers</Link>
          </li>
          <li>
            <Link to="/random-beer">Random Beer</Link>
          </li>
          <li>
            <Link to="/new-beer">New Beer</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
