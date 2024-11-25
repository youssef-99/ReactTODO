import "./App.css";
import Todo from "./components/Todo/Todo";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to={"/about"}>Go To About</Link>
    </>
  );
}
function About() {
  return <h1>About page</h1>;
}

function Contact() {
  return <h1>About page</h1>;
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
