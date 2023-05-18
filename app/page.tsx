import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroPanel from './components/HeroPanel'
import PanelOne from './components/PanelOne'
import Testimonial from './components/Testimonial'
import ThreeValues from './components/ThreeValues'
import Numbers from './components/Numbers'


export default function Home() {
  return (
<div> 
<Navbar/>
<HeroPanel/>
<PanelOne/>
<Testimonial/>
<ThreeValues/>
<Numbers/>
</div>    
  )
}
