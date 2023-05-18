'use client'

const Numbers = () => {
    const stats = [
  { id: 1, name: 'Increase in Productivity', value: '5x' },
  { id: 2, name: 'Reduction in Operational Costs', value: '10%' },
  { id: 3, name: 'Reduction in injuries', value: '30%' },
]
  return (
        <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Numbers