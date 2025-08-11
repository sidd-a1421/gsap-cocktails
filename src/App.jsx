import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { Hero, Navbar } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      
    </main>
  )
}

export default App