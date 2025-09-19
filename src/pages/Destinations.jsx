import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaStar, FaRegStar, FaMedal } from "react-icons/fa";
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
    image: 'https://media.cntraveler.com/photos/6864668f116fb8ad6898dce6/16:9/w_2560%2Cc_limit/Dubrovnik_190625_GettyImages-1032802174.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 41, name: 'Osaka, Japan', region: 'Asia', tagline: 'Nation\'s Kitchen',
    description: 'Famous for its modern architecture, nightlife, and hearty street food.',
    image: 'https://photos.smugmug.com/Osaka/Osaka-Categories/i-J9MFjBv/0/L/Osaka_Districts-L.jpg', 
    affiliate: true, rating: 4
  },
  {
    id: 42, name: 'Stockholm, Sweden', region: 'Europe', tagline: 'Venice of the North',
    description: 'Spread across 14 islands, known for its beautiful architecture and clean streets.',
    image: 'https://media.timeout.com/images/106197174/image.jpg', 
    affiliate: false, rating: 4
  },
  {
    id: 43, name: 'Budapest, Hungary', region: 'Europe', tagline: 'Pearl of the Danube',
    description: 'Historic thermal baths, stunning Parliament building, and ruin bars.',
    image: 'https://lp-cms-production.imgix.net/2023-03/GettyRF_473481530.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges', 
    affiliate: true, rating: 4
  },
  {
    id: 44, name: 'Hanoi, Vietnam', region: 'Asia', tagline: 'City of Lakes',
    description: 'Ancient temples, French colonial architecture, and vibrant street markets.',
    image: 'https://content.r9cdn.net/rimg/dimg/9f/f9/b80f2b97-city-34211-1648f9bdee7.jpg?width=1366&height=768&xhint=1744&yhint=910&crop=true', 
    affiliate: true, rating: 4
  },
  {
    id: 45, name: 'Zurich, Switzerland', region: 'Europe', tagline: 'Financial Hub',
    description: 'Clean, efficient city with beautiful lakeside setting and high quality of life.',
    image: 'https://images.winalist.com/blog/wp-content/uploads/2025/06/26123743/adobestock-118763263-1500x831.jpeg', 
    affiliate: false, rating: 5
  },
  {
    id: 46, name: 'Seville, Spain', region: 'Europe', tagline: 'City of Flamenco',
    description: 'Moorish architecture, orange trees, and passionate cultural traditions.',
    image: 'https://lp-cms-production.imgix.net/2025-06/GettyImages-2197733609.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop', 
    affiliate: true, rating: 4
  },
  {
    id: 47, name: 'Toronto, Canada', region: 'North America', tagline: 'The Six',
    description: 'Diverse multicultural city with iconic CN Tower and vibrant neighborhoods.',
    image: 'https://cdn.authentik.com/canada/uploads/images/orig/dec_toronto/1-toronto-downtown-skyline-1000x600jpeg.jpg', 
    affiliate: false, rating: 4
  },
  {
    id: 48, name: 'Helsinki, Finland', region: 'Europe', tagline: 'Daughter of the Baltic',
    description: 'Modern design, sauna culture, and beautiful archipelago setting.',
    image: 'https://rp-cms.imgix.net/wp-content/uploads/tapio-haaja-bpDJvls-h-0-unsplash-scaled.jpg?fit=max', 
    affiliate: true, rating: 4
  },
  {
    id: 49, name: 'Kyoto, Japan', region: 'Asia', tagline: 'City of Ten Thousand Shrines',
    description: 'Ancient capital with traditional temples, gardens, and geisha culture.',
    image: 'https://lp-cms-production.imgix.net/2023-02/shutterstock_1017748444.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges', 
    affiliate: true, rating: 5
  },
  {
    id: 50, name: 'Copenhagen, Denmark', region: 'Europe', tagline: 'City of Spires',
    description: 'Cycling culture, hygge lifestyle, and innovative Nordic cuisine.',
    image: 'https://media.admiddleeast.com/photos/66f29abed4f18d717dcd82af/16:9/w_2560%2Cc_limit/GettyImages-1587697699.jpg', 
    affiliate: false, rating: 5
  },
  {
    id: 51, name: 'Melbourne, Australia', region: 'Oceania', tagline: 'Cultural Capital',
    description: 'Laneway cafes, street art, and world-class sporting events.',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/230417065723-melbourne-australia-skyline-restricted.jpg?c=original', 
    affiliate: true, rating: 4
  },
  {
    id: 52, name: 'Munich, Germany', region: 'Europe', tagline: 'Secret Capital',
    description: 'Famous for Oktoberfest, Baroque architecture, and beer gardens.',
    image: 'https://statemag.state.gov/wp-content/uploads/2020/10/1120POM-1.jpg',
    affiliate: false, rating: 4
  },
  {
    id: 53, name: 'São Paulo, Brazil', region: 'South America', tagline: 'Land of Drizzle',
    description: 'Vast metropolis with diverse culture, cuisine, and vibrant arts scene.',
    image: 'https://travelwandergrow.com/wp-content/uploads/2023/06/Sao-Paulo-scaled.jpeg',
    affiliate: true, rating: 4
  },
  {
    id: 54, name: 'Warsaw, Poland', region: 'Europe', tagline: 'Phoenix City',
    description: 'Rebuilt after WWII, mixing historic charm with modern development.',
    image: 'https://statemag.state.gov/wp-content/uploads/2023/03/0423pom-1-scaled.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 55, name: 'Shanghai, China', region: 'Asia', tagline: 'Pearl of the Orient',
    description: 'Futuristic skyline, historic Bund, and bustling commercial center.',
    image: 'https://images.squarespace-cdn.com/content/v1/63f8b23b0626755198127ae3/1677503985851-ZZIR59T4GDLQU7KI7HJJ/shanghai-0-thebund-01.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 56, name: 'Brussels, Belgium', region: 'Europe', tagline: 'Capital of Europe',
    description: 'Grand Place, Art Nouveau architecture, and famous for chocolate and beer.',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/24/17/shutterstock-560991079.jpg',
    affiliate: false, rating: 4
  },
  {
    id: 57, name: 'Lima, Peru', region: 'South America', tagline: 'City of Kings',
    description: 'Gastronomic capital with colonial architecture and Pacific coastline.',
    image: 'https://www.voyage-perou.com/wp-content/uploads/reg-lim-centre-historique002.jpeg',
    affiliate: true, rating: 4
  },
  {
    id: 58, name: 'Oslo, Norway', region: 'Europe', tagline: 'The Tiger City',
    description: 'Fjord setting, Viking history, and modern Scandinavian design.',
    image: 'https://img.delicious.com.au/3FmTgUXd/w1200/del/2018/08/explore-norwegian-design-87094-2.jpg',
    affiliate: false, rating: 4
  },
  {
    id: 59, name: 'Moscow, Russia', region: 'Europe', tagline: 'Third Rome',
    description: 'Red Square, Kremlin, and iconic St. Basil\'s Cathedral.',
    image: 'https://lp-cms-production.imgix.net/2023-03/500pxRF_61786861.jpg?auto=format,compress&q=72&w=1095&fit=crop&crop=faces,edges',
    affiliate: true, rating: 4
  },
  {
    id: 60, name: 'Manila, Philippines', region: 'Asia', tagline: 'Pearl of the Orient',
    description: 'Vibrant chaos, Spanish colonial history, and resilient spirit.',
    image: 'https://assets.executivecentre.com/assets/Article-GuideToManila-CityTEC.jpeg',
    affiliate: true, rating: 3
  },
  {
    id: 61, name: 'New Orleans, USA', region: 'North America', tagline: 'The Big Easy',
    description: 'Jazz music, Creole cuisine, and historic French Quarter.',
    image: 'https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/United-States/New-Orleans/112099_SCN_New-Orleans_iStock1047897858_ZA2A81.jpg?tr=w-1200%2Cfo-auto',
    affiliate: true, rating: 4
  },
  {
    id: 62, name: 'Reykjavik, Iceland', region: 'Europe', tagline: 'Smoky Bay',
    description: 'Northern Lights, geothermal pools, and dramatic natural landscapes.',
    image: 'https://silversea-discover.imgix.net/2021/06/REYKJAVIK-shutterstock_613997816.jpg?auto=compress%2Cformat&ixlib=php-3.3.1',
    affiliate: true, rating: 4
  },
  {
    id: 63, name: 'Kathmandu, Nepal', region: 'Asia', tagline: 'City of Temples',
    description: 'Ancient palaces, sacred sites, and gateway to the Himalayas.',
    image: 'https://flagmatch.com/assets/capitals/kathmandu-93aa9f0f838f7527785e2b62ba79c70d092979e16006ef4625307036a4b27960.webp',
    affiliate: true, rating: 3
  },
  {
    id: 64, name: 'Casablanca, Morocco', region: 'Africa', tagline: 'White House',
    description: 'Art deco architecture, Hassan II Mosque, and Atlantic coastline.',
    image: 'https://media.istockphoto.com/id/544676786/fr/photo/mosquée-de-casablanca.jpg?s=612x612&w=0&k=20&c=Ghdq0SbzJ_uyVvi9NDrwgK6O6aeZMhoamW2S3aWNUkA=',
    affiliate: false, rating: 4
  },
  {
    id: 65, name: 'Hawaii, USA', region: 'North America', tagline: 'Paradise of the Pacific',
    description: 'Volcanic islands, pristine beaches, and unique Polynesian culture.',
    image: 'https://p-airnz.com/cms/assets/Common-Assets/Destination-Images/united-states-hawaii-city-beach-2100x1400__ScaleMaxWidthWzkzMF0.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 66, name: 'Valletta, Malta', region: 'Europe', tagline: 'Fortress City',
    description: 'Baroque architecture, Crusader history, and Mediterranean charm.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/St_Sebastian_Curtain_%28cropped%29.jpg/1200px-St_Sebastian_Curtain_%28cropped%29.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 67, name: 'Jakarta, Indonesia', region: 'Asia', tagline: 'Big Durian',
    description: 'Bustling capital with diverse cultures and rapid modernization.',
    image: 'https://content.r9cdn.net/rimg/dimg/1b/61/ad879e55-city-22380-17ea1cf2107.jpg?crop=true&width=1020&height=498',
    affiliate: true, rating: 3
  },
  {
    id: 68, name: 'Luxor, Egypt', region: 'Africa', tagline: 'World\'s Greatest Open-Air Museum',
    description: 'Ancient Thebes with spectacular temples and royal tombs.',
    image: 'https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/456526336_Templo%20de%20Luxor%20(4).jpg',
    affiliate: true, rating: 4
  },
  {
    id: 69, name: 'Edmonton, Canada', region: 'North America', tagline: 'Gateway to the North',
    description: 'River valley parks, festivals, and proximity to natural wonders.',
    image: 'https://i.natgeofe.com/n/e97305bb-4f2c-427d-8fba-1147924e1053/At-The-Lookout-Photo-copy-EDIT-_4x3.jpg',
    affiliate: false, rating: 3
  },
  {
    id: 70, name: 'Colombo, Sri Lanka', region: 'Asia', tagline: 'Garden City of the East',
    description: 'Colonial architecture, bustling markets, and Indian Ocean coastline.',
    image: 'https://lp-cms-production.imgix.net/2025-06/GettyImages-1181382649.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800',
    affiliate: true, rating: 3
  },
  {
    id: 71, name: 'Brasília, Brazil', region: 'South America', tagline: 'Capital of Hope',
    description: 'Futuristic planned city with unique Oscar Niemeyer architecture.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg',
    affiliate: false, rating: 4
  },
  {
    id: 72, name: 'Wellington, New Zealand', region: 'Oceania', tagline: 'Windy City',
    description: 'Compact capital with vibrant arts scene and beautiful harbor.',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/179000/179180-Wellington.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 73, name: 'Naples, Italy', region: 'Europe', tagline: 'City of the Sun',
    description: 'Birthplace of pizza, vibrant chaos, and proximity to Pompeii.',
    image: 'https://www.bed-breakfast-napoli.com/wp-content/uploads/2023/08/Naples-1.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 74, name: 'Tbilisi, Georgia', region: 'Asia', tagline: 'City of Warmth',
    description: 'Ancient baths, cobblestone streets, and Eurasian crossroads.',
    image: 'https://www.advantour.com/img/georgia/images/tbilisi.jpg',
    affiliate: true, rating: 4
  },
  {
    id: 75, name: 'Montreal, Canada', region: 'North America', tagline: 'City of Saints',
    description: 'French charm, underground city, and vibrant festival culture.',
    image: 'https://www.airtransat.com/getmedia/cafc7e6e-d0ff-497e-9998-e708f41aa191/Montreal-estival.aspx',
    affiliate: false, rating: 4
  },
  {
    id: 76, name: 'Havana, Cuba', region: 'North America', tagline: 'City of Columns',
    description: 'Vintage cars, colorful architecture, and vibrant music scene.',
    image: 'https://www.viajes.cl/hs-fs/hubfs/La%20Habana%20Vieja%20en%20Cuba.png?width=2184&name=La%20Habana%20Vieja%20en%20Cuba.png',
    affiliate: true, rating: 4
  },
  {
    id: 77, name: 'Krakow, Poland', region: 'Europe', tagline: 'Royal Capital',
    description: 'Medieval old town, Jewish quarter, and proximity to Auschwitz.',
    image: 'https://polish-presidency.consilium.europa.eu/media/2xljqezp/54384915012_fc48f51f41_o.jpg',
    affiliate: true, rating: 5
  },
  {
    id: 78, name: 'Auckland, New Zealand', region: 'Oceania', tagline: 'City of Sails',
    description: 'Volcanic landscape, twin harbors, and Polynesian culture.',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/191206180458-u114-auckland-city-new-zealand-chris-mclennan.jpg?q=w_1110,c_fill',
    affiliate: false, rating: 4
  },
  {
  id: 79, name: 'Tangier, Morocco', region: 'Africa', tagline: 'Gateway to Africa',
  description: 'Where the Mediterranean meets the Atlantic, with a rich history and cosmopolitan culture.',
  image: 'https://assets.dm.rccl.com/is/image/RoyalCaribbeanCruises/royal/ports-and-destinations/ports/tangier-morocco/overview/tangier-morroco-city-aerial-view-bay-port.jpg?$1440x600$',
  affiliate: true, rating: 5
  },
];

const DestinationGrid = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const regions = ["All", ...new Set(DATA.map((d) => d.region))];

  const filteredDestinations = DATA.filter((d) => {
    const matchesRegion =
      selectedRegion === "All" || d.region === selectedRegion;
    const matchesSearch = d.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0) {
      const filtered = DATA.filter((d) =>
        d.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
    setSelectedRegion("All"); // ✅ ensures destination always shows
  };

  // ✅ Function to highlight the matching part
  const highlightMatch = (text) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={i} className="text-pink-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      {/* 🔥 Stylish Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 px-6 mb-12 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
          alt="Travel background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-yellow-300 to-red-400 text-transparent bg-clip-text relative z-30"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Top Destinations 🌍
          </motion.h1>

          {/* ✅ Search */}
          <div className="relative w-full md:w-2/3 mx-auto mb-8 z-50">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 rounded-full shadow-lg bg-white text-black placeholder-gray-500 backdrop-blur focus:ring-2 focus:ring-pink-400 outline-none"
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white border rounded-lg shadow mt-2 z-50 text-left">
                {suggestions.map((s, idx) => (
                  <li
                    key={s.id}
                    onClick={() => handleSuggestionClick(s.name)}
                    className={`px-4 py-2 text-black hover:bg-gray-100 cursor-pointer ${
                      idx !== suggestions.length - 1 ? "border-b border-gray-200" : ""
                    }`}
                  >
                    {highlightMatch(s.name)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Region Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 relative z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2 rounded-full transition font-semibold shadow-md ${
                  selectedRegion === region
                    ? "bg-pink-500 text-white"
                    : "bg-white/80 text-gray-900 hover:bg-pink-100"
                }`}
              >
                {region}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Destination Grid */}
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((dest) => (
            <motion.div
              key={dest.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{dest.name}</h3>
                <p className="text-sm text-gray-200">{dest.tagline}</p>
              </div>

              <motion.div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
                  onClick={() => setSelectedDestination(dest)}
                >
                  Book Now
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No destinations found.
          </p>
        )}
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={!!selectedDestination}
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </div>
  );
};

export default DestinationGrid;
