'use client'

import Image from "next/image"

const Testimonial = () => {
  return (
  <section className="relative  overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              “We are developing AI systems that amplify and augment rather than displace human abilities improving productivity and increasing profits in a data secure manner”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://media.licdn.com/dms/image/D5603AQGTZJxvfjJ7JA/profile-displayphoto-shrink_800_800/0/1682488334980?e=1689811200&v=beta&t=4Ezgk8IY3Twnt73N1otH1_ZXli6BQUX0cEwH2DTrnIo"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white"> Anirudh Kadian</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white"> Frontend Developer </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Testimonial