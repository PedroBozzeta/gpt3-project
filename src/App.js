import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Footer />
      <Blog />
      <Possibility />
      <Features />
      <WhatGPT3 />
      <CTA />
      <Brand />
    </div>
  );
}

export default App;
