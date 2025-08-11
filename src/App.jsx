import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { Hero, Navbar } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}

export default App