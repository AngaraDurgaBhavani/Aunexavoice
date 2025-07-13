import About from "./components/about";
import Features from "./components/features";
import Herosection from "./components/herosection"
import Pricing from "./components/pricing";
import Product from "./components/product";



export default function Page() {
  return (
    <div className="scroll-smooth">
     
      <Herosection/>
      <Product/>
      <Features/>
      <Pricing/>
      <About/>
      
    </div>

  )
}
