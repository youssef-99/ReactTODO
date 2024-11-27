import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/todo">Todo App</Link>
        </li>
        <li>
          <Link to="/bakery">Bakery App</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
