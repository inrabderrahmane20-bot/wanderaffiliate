import React from 'react'

export default function HotDeals(){
  const deals = [
    {title:'Paris Hotels -20%',link:'https://www.booking.com'},
    {title:'Europcar Car Rentals -15%',link:'https://www.europcar.com'},
    {title:'Airbnb Summer Offers',link:'https://www.airbnb.com'}
  ]
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">🔥 Hot Deals</h1>
      <div className="space-y-4">
        {deals.map((d,i)=>(
          <a key={i} href={d.link} target="_blank" rel="noreferrer" className="block p-4 bg-white rounded-lg shadow hover:scale-105 transition">
            <div className="font-semibold text-indigo-600">{d.title}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
