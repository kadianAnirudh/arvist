'use client'

import Image from "next/image"
import Warehouse from '../../images/Warehouse.jpg'
import { Text } from "@nextui-org/react";
import Camera from '../../images/Camera.png'
import Forklift from '../../images/forklift-detected.jpg'

const ThreeValues = () => {
  return (
    <div className="overflow-hidden bg-black sm:py-32">
    {/* value 1 */}
    <div className="h-[70vh] flex">
    <div className="w-6/12 hidden md:block">
    <Image
    src={Warehouse}
    alt="Product screenshot"
    className="rounded-xl shadow-xl md:-ml-4 min-h-[500px]"
    />   
    </div>
    <div className="h-max md:w-6/12">
      <Text
        h1
        className="px-8 md:px-24 py-24"
        size={60}
        css={{
          textGradient: "45deg, $red600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        Operational Insights
      </Text>
{/* description */}
        <Text
        h1
        className="px-8 md:px-24"
        size={20}
        css={{
        //   textGradient: "45deg, $blue600 -20%, $pink600 50%",
        color: "white"
        }}
        weight="bold"
      >
        Realize cost saving for your logistics operations with actionable recommendations from your existing cameras without any new sensors or IoT devices
      </Text>         
    </div>
    </div>

    {/* value 2 */}
    <div className="h-[70vh] flex">

    <div className="full md:w-6/12 py-12 md:py-24">
      <Text
        h1
        className="px-8 md:px-24 py-24"
        size={60}
        css={{
          textGradient: "45deg, $red600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        Prevention
      </Text>
{/* description */}
        <Text
        h1
        className="px-8 md:px-24"
        size={20}
        css={{
        //   textGradient: "45deg, $blue600 -20%, $pink600 50%",
        color: "white"
        }}
        weight="bold"
      >
        Get proactive insights to prevent workplace injuries and prevent unplanned leave of absences while ensuring compliance
      </Text>         
    </div>
    <div className="Image w-6/12 py-24 hidden md:block">
    <Image
    src={Camera}
    alt="Product screenshot"
    className="rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 min-h-[500px]"
    // className="rounded-xl shadow-xl w-fullsm:w-[57rem] md:-ml-4 lg:-ml-0"
    />   
    </div>
    </div>

    {/* Value 3 */}
    <div className="h-[70vh] flex py-24">
    <div className="Image w-6/12 hidden md:block">
    <Image
    src={Forklift}
    alt="Product screenshot"
    className="rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 min-h-[500px]"
    // className="rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
    />   
    </div>
    <div className="full md:w-6/12">
      <Text
        h1
        className="px-8 md:px-24 py-12 md:py-24"
        size={60}
        css={{
          textGradient: "45deg, $red600 -20%, $yellow600 100%",
        }}
        weight="bold"
      >
        Real-Time Response
      </Text>
{/* description */}
        <Text
        h1
        className="px-8 md:px-24"
        size={20}
        css={{
        //   textGradient: "45deg, $blue600 -20%, $pink600 50%",
        color: "white"
        }}
        weight="bold"
      >
        Reduce reaction times and potential operation shut-downs with real-time alerts for any accidents and incidents in your facility
      </Text>         
    </div>
    </div>
    </div>
  )
}

export default ThreeValues