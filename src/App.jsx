
import './App.css'
import Clients from './components/Clients'
import Collabs from './components/Collabs/collabs'
import FaqAccordion from './components/FAQ_Section'

import HeroComponent from './components/Hero/Hero'
import LatestProject from './components/OurLatest'

function App() {

  return (
    <>
        <HeroComponent />
        <Clients/>
        <LatestProject/>
        <FaqAccordion/>
        <Collabs/>

    </>
  )
}

export default App
