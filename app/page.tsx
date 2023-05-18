import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroPanel from './components/HeroPanel'
import PanelOne from './components/PanelOne'

export default function Home() {
  return (
<div> 
<Navbar/>
<HeroPanel/>
<PanelOne/>
</div>    
  )
}
