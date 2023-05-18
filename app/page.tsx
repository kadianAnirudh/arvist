import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroPanel from './components/HeroPanel'

export default function Home() {
  return (
<div className="text-xl"> 
<Navbar/>
<HeroPanel/>
</div>    
  )
}
