import Categories from "./Categories";
import Cources from "./Cources";
import Home from "./Home";
import Membership from "./Membership";
import Navbar from "./Navbar";
import Services from "./Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Cources />
      <Categories />
      <Membership />
    </div>
  );
}

export default App;
