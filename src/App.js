import Categories from "./Categories";
import Cources from "./Cources";
import Home from "./Home";
import Membership from "./Membership";
import Navbar from "./Navbar";
import Services from "./Services";
import Block from './Block';
import PopularCources from "./PopularCources";
import Testimonials from "./Testimonials";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Cources />
      <Categories />
      <Membership />
      <Block btn='Enroll Now' btnName='Category Name' heading='Popular Cources'/>
      <PopularCources />
      <Testimonials />
      <Block btn='Enroll Now' btnName='Expert Name' heading='Eperts Only On Zuan'/>

    </div>
  );
}

export default App;
