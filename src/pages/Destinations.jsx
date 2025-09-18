import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAirbnb, FaCar } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import BookingModal from "./BookingModal";



const DATA = [
  {
    id: 1, name: 'Bali, Indonesia', region: 'Asia', tagline: 'Island of Gods',
    description: 'Forested volcanic mountains, beaches & vibrant culture.',
    image: 'https://cdn.tui.be/img/destinations/Header/frvacance-indonesie-bali.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 2, name: 'Paris, France', region: 'Europe', tagline: 'City of Light',
    description: 'Cafe culture, Eiffel Tower, and world-class art museums.',
    image: 'https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg',
    affiliate: false, rating: 5
  },
  {
    id: 3, name: 'Tokyo, Japan', region: 'Asia', tagline: 'Eastern Capital',
    description: 'Neon skyscrapers, pop culture, and historic temples.',
    image: 'https://wallpapers.com/images/hd/tokyo-with-mount-fuji-view-in-japan-ta80d91c7celfe1p.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 4, name: 'New York, USA', region: 'North America', tagline: 'The Big Apple',
    description: 'Finance, culture, and endless entertainment.',
    image: 'https://vacations.aircanada.com/.imaging/focalarea/wide/2000x/dam/jcr:1e671bc1-d2a8-4b86-a39e-babbc4d75be7/MCE-26334-DEST-United-States-Main_New-York-City.jpg',
    affiliate: false, rating: 5
  },
  {
    id: 5, name: 'Cape Town, South Africa', region: 'Africa', tagline: 'Mother City',
    description: 'Table Mountain, beaches, and stunning vineyards.',
    image: 'https://media.timeout.com/images/105237728/image.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 6, name: 'Buenos Aires, Argentina', region: 'South America', tagline: 'Paris of South America',
    description: 'Tango, steaks, and colorful neighborhoods.',
    image: 'https://images.squarespace-cdn.com/content/v1/52efc94ae4b01409c74273d6/1585836711975-N7XHQ1OEB1VT1Q28Y0NP/BuenosAires-1815x1200.jpg',
    affiliate: false, rating: 4
  },
  {
    id: 7, name: 'Sydney, Australia', region: 'Oceania', tagline: 'Harbor City',
    description: 'Opera House, stunning beaches, and vibrant nightlife.',
    image: 'https://igamingbusiness.com/wp-content/uploads/2020/08/sydney-opera-house-354375_1920.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 8, name: 'Rome, Italy', region: 'Europe', tagline: 'Eternal City',
    description: 'Ancient ruins, the Vatican, and mouth-watering pasta.',
    image: 'https://images.resosys.com/deals/us-rome/2x-80anj7-rome-italy-with-the-colosseum-2024-01-15-16-22-59-utc.jpg',
    affiliate: false, rating: 5
  },
  {
    id: 9, name: 'Dubai, UAE', region: 'Middle East', tagline: 'City of Gold',
    description: 'Luxury shopping, futuristic architecture, and desert safaris.',
    image: 'https://www.movida-dubai.com/wp-content/uploads/2024/02/Que-faire-a-Dubai-en-decembre.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 10, name: 'London, UK', region: 'Europe', tagline: 'The Old Smoke',
    description: 'History, modernity, and world-class theatre.',
    image: 'https://img.static-af.com/images/meta/IDname/CITY-LON-1?aspect_ratio=2:1&max_width=1920',
    affiliate: false, rating: 5
  },
  {
    id: 11, name: 'Istanbul, Turkey', region: 'Europe / Asia', tagline: 'Where East Meets West',
    description: 'Mosques, bazaars, and rich Ottoman history.',
    image: 'https://th.bing.com/th/id/R.25ef668c4fedb898ed06125dd8dc1a9a?rik=mCqJW9prnLW%2bDQ&pid=ImgRaw&r=0',
    affiliate: true, rating: 4
  },
  {
    id: 12, name: 'Rio de Janeiro, Brazil', region: 'South America', tagline: 'Cidade Maravilhosa',
    description: 'Carnival, Copacabana, and Christ the Redeemer.',
    image: 'https://cdn.mos.cms.futurecdn.net/dxiLtztp2NSCZMRY3SBZne.jpg',
    affiliate: false, rating: 5
  },
  {
    id: 13, name: 'Santorini, Greece', region: 'Europe', tagline: 'Island of Blue Domes',
    description: 'Sunsets, whitewashed houses, and the Aegean Sea.',
    image: 'https://th.bing.com/th/id/R.1e329fee13222c660284258367e8307f?rik=ZnSXo6mC712ZHg&pid=ImgRaw&r=0',
    affiliate: true, rating: 5
  },
  {
    id: 14, name: 'Bangkok, Thailand', region: 'Asia', tagline: 'City of Angels',
    description: 'Temples, street food, and floating markets.',
    image: 'https://wallpapercave.com/wp/wp1916912.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 15, name: 'Marrakech, Morocco', region: 'Africa', tagline: 'The Red City',
    description: 'Colorful souks, palaces, and desert excursions.',
    image: 'https://www.aquamonde-magazine.fr/wp-content/uploads/2024/07/marrakech-en-decembre-avis-climat-logement-et-acti_1_0_26249.webp',
    affiliate: false, rating: 4
  },
  {
    id: 16, name: 'Los Angeles, USA', region: 'North America', tagline: 'City of Angels',
    description: 'Hollywood, beaches, and endless sunshine.',
    image: 'https://th.bing.com/th/id/R.e520d4eb1fcfbca61bd0e75c59b7b470?rik=8HVqykzdSDRaTQ&pid=ImgRaw&r=0',
    affiliate: true, rating: 4
  },
  {
    id: 17, name: 'Barcelona, Spain', region: 'Europe', tagline: 'Gaudí’s Playground',
    description: 'Sagrada Família, tapas, and Mediterranean vibes.',
    image: 'https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Barcelona-Spain.jpg',
    affiliate: false, rating: 5
  },
  {
    id: 18, name: 'Seoul, South Korea', region: 'Asia', tagline: 'Soul of Asia',
    description: 'K-pop, palaces, and high-tech city life.',
    image: 'https://th.bing.com/th/id/R.491403fb2be42136cd9b3f9ec662cfa7?rik=z7iGolH0yvQ6OQ&pid=ImgRaw&r=0',
    affiliate: true, rating: 5
  },
  {
    id: 19, name: 'Vancouver, Canada', region: 'North America', tagline: 'Hollywood North',
    description: 'Mountains, ocean, and multicultural city life.',
    image: 'https://www.10wallpaper.com/wallpaper/2560x1600/1802/Vancouver_Harbor_Ship_Skyscraper_Night_2560x1600.jpg',
    affiliate: false, rating: 4
  },
  {
    id: 20, name: 'Cairo, Egypt', region: 'Africa', tagline: 'Gateway to the Pyramids',
    description: 'The Nile, ancient temples, and vibrant bazaars.',
    image: 'https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 21, name: 'Madrid, Spain', region: 'Europe', tagline: 'Vibrant Capital of Spain',
    description: 'Famous for its art museums, lively plazas, and delicious tapas culture.',
    image: 'https://media.betterroaming.com/f/252707/2048x1152/230afd2c7c/blog_image_madrid_vacation.webp',
    affiliate: true, rating: 4
  },
  {
    id: 22, name: 'Singapore', region: 'Asia', tagline: 'Garden City',
    description: 'Known for its futuristic skyline, gardens, and multicultural food.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 23, name: 'Amsterdam, Netherlands', region: 'Europe', tagline: 'Venice of the North',
    description: 'Canals, cycling culture, and world-class museums.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/504000/504208-north-holland.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 24, name: 'Hong Kong, China', region: 'Asia', tagline: 'Pearl of the Orient',
    description: 'Skyscrapers, bustling harbor, and vibrant food scene.',
    image: 'https://img.static-kl.com/images/media/7091FF81-A347-43F7-A2A3AB2EAFEA5236?w=1280&consumerid=bwp',
    affiliate: true, rating: 5
  },
  {
    id: 25, name: 'Lisbon, Portugal', region: 'Europe', tagline: 'City of Seven Hills',
    description: 'Known for pastel-colored buildings, Fado music, and iconic tram rides.',
    image: 'https://en.kampaoh.com/wp-content/uploads/2024/06/SPAIN-2024-06-20T134315.647.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 26, name: 'Prague, Czech Republic', region: 'Europe', tagline: 'City of a Hundred Spires',
    description: 'Charming medieval old town, Gothic churches, and vibrant nightlife.',
    image: 'https://res.cloudinary.com/djcyhbk2e/image/upload/c_limit,f_auto,q_50,w_1400/v1/gvv/prod/ub5ykj4hsbrhjpmyoh9f',
    affiliate: true, rating: 4
  },
  {
    id: 27, name: 'Miami, USA', region: 'North America', tagline: 'Magic City',
    description: 'Art deco architecture, beaches, and vibrant nightlife.',
    image: 'https://florida-invest.com/wp-content/uploads/2020/01/miami-skyline-2019-billboard-1500x845-1-825x340.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 28, name: 'Berlin, Germany', region: 'Europe', tagline: 'City of Freedom',
    description: 'Rich history, vibrant art scene, and legendary nightlife.',
    image: 'https://www.visittheusa.com/sites/default/files/styles/hero_xl_2x_3200x1400/public/images/hero_media_image/2017-05/c4e5c0611c92f61e055770e932bd8557.jpeg?h=9c2070a3&itok=kDtD_cTy',
    affiliate: true, rating: 4
  },
  {
    id: 29, name: 'Venice, Italy', region: 'Europe', tagline: 'Floating City',
    description: 'Canals, gondolas, and Renaissance architecture.',
    image: 'https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges',
    affiliate: true, rating: 5
  },
  {
    id: 30, name: 'San Francisco, USA', region: 'North America', tagline: 'Golden Gate City',
    description: 'Famous for its hills, Golden Gate Bridge, and tech culture.',
    image: 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltc85bbcd6ff5fa0fd/650882a0a39cd61ce6ace86f/0_-_BCC-2023-THINGS-TO-DO-IN-SAN-FRANCISCO-AT-NIGHT-0.webp?fit=crop&disable=upscale&auto=webp&quality=60&crop=smart',
    affiliate: true, rating: 4
  },
  {
    id: 31, name: 'Beijing, China', region: 'Asia', tagline: 'Ancient Capital',
    description: 'Home to the Great Wall, Forbidden City, and rich imperial culture.',
    image: 'https://www.trotop.be/wp-content/uploads/2024/10/Wat-te-doen-in-Peking-Forbidden-City-3.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 32, name: 'Vienna, Austria', region: 'Europe', tagline: 'City of Music',
    description: 'Imperial palaces, classical music heritage, and coffee house culture.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/498000/498780-innere-stadt-vienna.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 33, name: 'Edinburgh, Scotland', region: 'Europe', tagline: 'Historic Capital of Scotland',
    description: 'Famous for its castle, festivals, and medieval old town.',
    image: 'https://lp-cms-production.imgix.net/2025-07/shutterstock2235807917.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop',
    affiliate: true, rating: 4
  },
  {
    id: 34, name: 'Mumbai, India', region: 'Asia', tagline: 'City of Dreams',
    description: 'Bollywood, colonial architecture, and vibrant street life.',
    image: 'https://content.r9cdn.net/rimg/dimg/8a/fa/7e90a0bf-city-31288-162cb435f1e.jpg?crop=true&width=1020&height=498',
    affiliate: true, rating: 4
  },
  {
    id: 35, name: 'Dublin, Ireland', region: 'Europe', tagline: 'Fair City',
    description: 'Historic pubs, literary heritage, and friendly atmosphere.',
    image: 'https://uniqueirishhomes.ie/wp-content/uploads/2023/06/How-To-Spend-48-Hours-in-Dublin-City-blog-post.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 36, name: 'Florence, Italy', region: 'Europe', tagline: 'Birthplace of the Renaissance',
    description: 'Art, history, and architecture masterpieces at every corner.',
    image: 'https://d1c96a4wcgziwl.cloudfront.net/hd_955cfirenze.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 37, name: 'Kuala Lumpur, Malaysia', region: 'Asia', tagline: 'Cultural Melting Pot',
    description: 'Known for the Petronas Towers and diverse street food culture.',
    image: 'https://img.static-kl.com/images/media/1F159175-0757-4F9E-A9A8EC6DBD5BCE68',
    affiliate: true, rating: 4
  },
  {
    id: 38, name: 'Mexico City, Mexico', region: 'North America', tagline: 'City of Palaces',
    description: 'Ancient ruins, colonial architecture, and vibrant cuisine.',
    image: 'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/Mexico-City-GettyImages-638921947?_a=BAVAZGID0',
    affiliate: true, rating: 4
  },
  {
    id: 39, name: 'Athens, Greece', region: 'Europe', tagline: 'Cradle of Democracy',
    description: 'Famous for the Acropolis, ancient ruins, and vibrant culture.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/df/5f/bd/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_fb919ca59df90d357c53',
    affiliate: true, rating: 4
  },
  {
    id: 40, name: 'Dubrovnik, Croatia', region: 'Europe', tagline: 'Pearl of the Adriatic',
    description: 'Historic walled city, crystal-clear waters, and medieval architecture.',
    image: 'https://lp-cms-production.imgix.net/2021-06/GettyRF_516791906.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges',
    affiliate: true, rating: 5
  }
]

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const closeBooking = () => {
    setSelectedDestination(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore Top Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DATA.map((d) => (
          <motion.div
            key={d.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-semibold">{d.name}</h2>
              <p className="mb-4">{d.tagline}</p>
              <button
                onClick={() => openBooking(d.name)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={closeBooking}
        destination={selectedDestination}
      />
    </div>
  );
}