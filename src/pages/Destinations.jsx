import React, { useState } from 'react'

const DATA = [
  {
    id: 1, name: 'Bali, Indonesia', region: 'Asia', tagline: 'Island of Gods',
    description: 'Forested volcanic mountains, beaches & vibrant culture.',
    image: 'https://cdn.tui.be/img/destinations/Header/frvacance-indonesie-bali.jpg',  // Bali
    affiliate: true, rating: 4
  },
  {
    id: 2, name: 'Paris, France', region: 'Europe', tagline: 'City of Light',
    description: 'Cafe culture, Eiffel Tower, and world-class art museums.',
    image: 'https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg',  // Paris
    affiliate: false, rating: 5
  },
  {
    id: 3, name: 'Tokyo, Japan', region: 'Asia', tagline: 'Eastern Capital',
    description: 'Neon skyscrapers, pop culture, and historic temples.',
    image: 'https://wallpapers.com/images/hd/tokyo-with-mount-fuji-view-in-japan-ta80d91c7celfe1p.jpg',  // Tokyo
    affiliate: true, rating: 4
  },
  {
    id: 4, name: 'New York, USA', region: 'North America', tagline: 'The Big Apple',
    description: 'Finance, culture, and endless entertainment.',
    image: 'https://vacations.aircanada.com/.imaging/focalarea/wide/2000x/dam/jcr:1e671bc1-d2a8-4b86-a39e-babbc4d75be7/MCE-26334-DEST-United-States-Main_New-York-City.jpg',  // New York
    affiliate: false, rating: 5
  },
  {
    id: 5, name: 'Cape Town, South Africa', region: 'Africa', tagline: 'Mother City',
    description: 'Table Mountain, beaches, and stunning vineyards.',
    image: 'https://media.timeout.com/images/105237728/image.jpg',  // Cape Town
    affiliate: true, rating: 4
  },
  {
    id: 6, name: 'Buenos Aires, Argentina', region: 'South America', tagline: 'Paris of South America',
    description: 'Tango, steaks, and colorful neighborhoods.',
    image: 'https://images.squarespace-cdn.com/content/v1/52efc94ae4b01409c74273d6/1585836711975-N7XHQ1OEB1VT1Q28Y0NP/BuenosAires-1815x1200.jpg',  // Buenos Aires
    affiliate: false, rating: 4
  },
  {
    id: 7, name: 'Sydney, Australia', region: 'Oceania', tagline: 'Harbor City',
    description: 'Opera House, stunning beaches, and vibrant nightlife.',
    image: 'https://igamingbusiness.com/wp-content/uploads/2020/08/sydney-opera-house-354375_1920.jpg',  // Sydney
    affiliate: true, rating: 5
  },
  {
    id: 8, name: 'Rome, Italy', region: 'Europe', tagline: 'Eternal City',
    description: 'Ancient ruins, the Vatican, and mouth-watering pasta.',
    image: 'https://images.resosys.com/deals/us-rome/2x-80anj7-rome-italy-with-the-colosseum-2024-01-15-16-22-59-utc.jpg',  // Rome
    affiliate: false, rating: 5
  },
  {
    id: 9, name: 'Dubai, UAE', region: 'Asia', tagline: 'City of Gold',
    description: 'Luxury shopping, futuristic architecture, and desert safaris.',
    image: 'https://www.movida-dubai.com/wp-content/uploads/2024/02/Que-faire-a-Dubai-en-decembre.jpg',  // Dubai
    affiliate: true, rating: 4
  },
  {
    id: 10, name: 'London, UK', region: 'Europe', tagline: 'The Old Smoke',
    description: 'History, modernity, and world-class theatre.',
    image: 'https://img.static-af.com/images/meta/IDname/CITY-LON-1?aspect_ratio=2:1&max_width=1920',  // London
    affiliate: false, rating: 5
  },
  {
    id: 11, name: 'Istanbul, Turkey', region: 'Europe / Asia', tagline: 'Where East Meets West',
    description: 'Mosques, bazaars, and rich Ottoman history.',
    image: 'https://th.bing.com/th/id/R.25ef668c4fedb898ed06125dd8dc1a9a?rik=mCqJW9prnLW%2bDQ&pid=ImgRaw&r=0',  // Istanbul
    affiliate: true, rating: 4
  },
  {
    id: 12, name: 'Rio de Janeiro, Brazil', region: 'South America', tagline: 'Cidade Maravilhosa',
    description: 'Carnival, Copacabana, and Christ the Redeemer.',
    image: 'https://cdn.mos.cms.futurecdn.net/dxiLtztp2NSCZMRY3SBZne.jpg',  // Rio
    affiliate: false, rating: 5
  },
  {
    id: 13, name: 'Santorini, Greece', region: 'Europe', tagline: 'Island of Blue Domes',
    description: 'Sunsets, whitewashed houses, and the Aegean Sea.',
    image: 'https://th.bing.com/th/id/R.1e329fee13222c660284258367e8307f?rik=ZnSXo6mC712ZHg&pid=ImgRaw&r=0',  // Santorini
    affiliate: true, rating: 5
  },
  {
    id: 14, name: 'Bangkok, Thailand', region: 'Asia', tagline: 'City of Angels',
    description: 'Temples, street food, and floating markets.',
    image: 'https://wallpapercave.com/wp/wp1916912.jpg',  // Bangkok
    affiliate: true, rating: 4
  },
  {
    id: 15, name: 'Marrakech, Morocco', region: 'Africa', tagline: 'The Red City',
    description: 'Colorful souks, palaces, and desert excursions.',
    image: 'https://www.aquamonde-magazine.fr/wp-content/uploads/2024/07/marrakech-en-decembre-avis-climat-logement-et-acti_1_0_26249.webp',  // Marrakech
    affiliate: false, rating: 4
  },
  {
    id: 16, name: 'Los Angeles, USA', region: 'North America', tagline: 'City of Angels',
    description: 'Hollywood, beaches, and endless sunshine.',
    image: 'https://th.bing.com/th/id/R.e520d4eb1fcfbca61bd0e75c59b7b470?rik=8HVqykzdSDRaTQ&pid=ImgRaw&r=0',  // LA
    affiliate: true, rating: 4
  },
  {
    id: 17, name: 'Barcelona, Spain', region: 'Europe', tagline: 'Gaudí’s Playground',
    description: 'Sagrada Família, tapas, and Mediterranean vibes.',
    image: 'https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Barcelona-Spain.jpg',  // Barcelona
    affiliate: false, rating: 5
  },
  {
    id: 18, name: 'Seoul, South Korea', region: 'Asia', tagline: 'Soul of Asia',
    description: 'K-pop, palaces, and high-tech city life.',
    image: 'https://th.bing.com/th/id/R.491403fb2be42136cd9b3f9ec662cfa7?rik=z7iGolH0yvQ6OQ&pid=ImgRaw&r=0',  // Seoul
    affiliate: true, rating: 5
  },
  {
    id: 19, name: 'Vancouver, Canada', region: 'North America', tagline: 'Hollywood North',
    description: 'Mountains, ocean, and multicultural city life.',
    image: 'https://www.10wallpaper.com/wallpaper/2560x1600/1802/Vancouver_Harbor_Ship_Skyscraper_Night_2560x1600.jpg',  // Vancouver
    affiliate: false, rating: 4
  },
  {
    id: 20, name: 'Cairo, Egypt', region: 'Africa', tagline: 'Gateway to the Pyramids',
    description: 'The Nile, ancient temples, and vibrant bazaars.',
    image: 'https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg',  // Cairo
    affiliate: true, rating: 5
  }
]

export default function Destinations() {
  const [region, setRegion] = useState('all')
  const [visibleCount, setVisibleCount] = useState(6)  // show first 6
  const regions = ['all', ...Array.from(new Set(DATA.map(d => d.region)))]
  const filteredAll = DATA.filter(d => region === 'all' ? true : d.region === region)
  const visible = filteredAll.slice(0, visibleCount)

  const loadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  return (
    <div>
      <header className="relative h-72 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">Explore Our <span className="text-indigo-200">Travel Destinations</span></h1>
          <p className="mt-3 text-gray-200 max-w-2xl">Handpicked destinations with affiliate links to accommodations, cars and tours.</p>
        </div>
      </header>

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Browse by Region</h2>
          <p className="mt-2 text-gray-500">Find travel inspiration for your next adventure</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {regions.map(r => (
              <button
                key={r}
                onClick={() => {
                  setRegion(r)
                  setVisibleCount(6)  // reset when change region
                }}
                className={`px-4 py-2 rounded-full ${region === r ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {r === 'all' ? 'All Destinations' : r}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visible.map(dest => (
              <article key={dest.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{dest.name}</h3>
                    {dest.affiliate && <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">AFFILIATE</span>}
                  </div>
                  <p className="text-sm text-gray-500">{dest.tagline}</p>
                  <p className="mt-3 text-gray-600">{dest.description}</p>

                  <div className="mt-4 flex space-x-2 flex-wrap">
                    <a
                      href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(dest.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 text-sm rounded-md border"
                    >
                      Booking
                    </a>
                    <a
                      href={`https://www.airbnb.com/s/${encodeURIComponent(dest.name)}/homes`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 text-sm rounded-md border"
                    >
                      Airbnb
                    </a>
                    <a
                      href={`https://www.europcar.com/en/stations?q=${encodeURIComponent(dest.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 text-sm rounded-md border"
                    >
                      Europcar
                    </a>
                    <a
                      href={`https://www.getyourguide.com/s/?q=${encodeURIComponent(dest.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 text-sm rounded-md border"
                    >
                      Tours
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {visible.length < filteredAll.length && (
            <div className="mt-8 text-center">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
