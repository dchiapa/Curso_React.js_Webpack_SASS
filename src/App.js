import "./App.scss";
import Characters from "./components/Characters/Characters";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header title="Rick and Morty API" />
      <Characters />
    </>
  );
};

export default App;
