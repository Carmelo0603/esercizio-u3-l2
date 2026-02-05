import { Container } from "react-bootstrap";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./components/dataBooks/fantasy.json";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Welcome></Welcome>

      <BookList books={fantasy}></BookList>

      <MyFooter></MyFooter>
    </>
  );
}

export default App;
