import "./App.css";
import Todo from "./features/todo/components/Todo/Todo";
import Home from "./features/home/components/Home";
import { Routes, Route } from "react-router-dom";
import Bakery from "./features/bakery/components/Bakery/Bakery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/bakery" element={<Bakery />} />
      </Routes>
    </div>
  );
}

export default App;
