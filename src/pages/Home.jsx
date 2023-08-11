import { Fragment, useEffect } from "react"
import SliderHome from "../components/Slider"

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0,0);
  },[])
  return (
    <Fragment>
      <SliderHome/>
    </Fragment>
  )      
}

export default Home
