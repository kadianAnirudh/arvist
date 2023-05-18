'use client'
import { CloudArrowUpIcon, LockClosedIcon, ComputerDesktopIcon, VideoCameraIcon } from '@heroicons/react/20/solid'
import { Text } from "@nextui-org/react";
import Laptop from '../../images/laptop.png'
import Image from 'next/image';

const features = [
  {
    name: 'Your Security Cameras : ',
    description:
      'Transform your warehouse into one of the smartest storage units in the world with zero additonal cost to infrastructure',
    icon: VideoCameraIcon,
  },
  {
    name: 'Our AI Platforms : ',
    description: 'Take smarter decisions with the data and visualization from our AI platform. Increase your profits and not your costs',
    icon: ComputerDesktopIcon,
  },
]

export default function PanelOne() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-white">Existing Infrastructure</h2>
            <Text
              h1
              size={40}
              css={{
              textGradient: "45deg, $pink600 -20%, $blue600 50%",
              }}
              weight="bold"
              >
              Actionable Insights
              </Text>
              <p className="mt-6 text-lg leading-8 text-white">
                Arvist’s AI platform uses your Security Camera to provide you better operational insights, 3PL software helps companies in order, warehouse, supplies management.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={Laptop}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={1800}
            height={800}
          />
        </div>
      </div>
    </div>
  )
}