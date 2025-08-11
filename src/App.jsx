import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='text-3xl text-orange-700'>App</div>
  )
}

export default App