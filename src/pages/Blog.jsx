import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Bali 🌴",
    category: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    excerpt:
      "Bali is more than beaches and nightlife. Discover tranquil temples, lush rice terraces, and secret waterfalls waiting to be explored...",
    content: `
# Top 10 Hidden Gems in Bali

Bali, often called the Island of the Gods, has a history dating back over 2,000 years. Its unique Hindu culture remains strong today despite being part of the world's largest Muslim nation.

## Historical Highlights
- Ancient temples such as Besakih Temple built in the 8th century.
- Dutch colonization in the 19th century shaped Bali's trade routes.
- Tourism boomed in the late 20th century, making Bali world-famous.

## Travel Tips
- Visit during the dry season (April–October).
- Don't miss the rice terraces in Ubud.
- Experience a traditional Balinese dance show.
`,
    detailedContent: [
      {
        title: "Cultural Heritage",
        paragraphs: [
          "Bali's cultural heritage is deeply rooted in its Hindu traditions, which influence every aspect of daily life. The island is dotted with thousands of temples, each with its own unique architecture and spiritual significance.",
          "Traditional ceremonies and festivals occur almost daily, creating a vibrant tapestry of color and sound. The most important of these is the Galungan festival, which celebrates the victory of good over evil and occurs every 210 days according to the Balinese calendar."
        ],
        list: [
          "Visit the Mother Temple of Besakih, Bali's largest and holiest temple complex",
          "Witness a traditional Kecak fire dance at Uluwatu Temple at sunset",
          "Explore the artistic heritage in Ubud, the cultural heart of Bali"
        ],
        image: "https://baliblisstours.com/wp-content/uploads/2023/09/budhist-monastery-bali-tour.jpg",
        imageAlt: "Balinese temple ceremony"
      },
      {
        title: "Natural Wonders",
        paragraphs: [
          "Beyond its cultural attractions, Bali boasts diverse landscapes from volcanic mountains to lush rice terraces and pristine beaches. Mount Batur, an active volcano, offers one of the most spectacular sunrise hikes in Southeast Asia.",
          "The island's northern coast features black sand beaches and coral reefs teeming with marine life, while the southern shores offer world-class surf breaks and dramatic cliff formations."
        ],
        list: [
          "Trek to the summit of Mount Batur for sunrise views over the caldera",
          "Explore the Jatiluwih Rice Terraces, a UNESCO World Heritage site",
          "Snorkel or dive at Menjangan Island to see vibrant coral gardens"
        ],
        image: "https://i.pinimg.com/originals/b6/1e/8b/b61e8befe8ccdd214e21213c2c243ca3.jpg",
        imageAlt: "Bali rice terraces"
      }
    ],
    practicalInfo: [
      {
        title: "Best Time to Visit",
        content: "The dry season from April to October offers the best weather for outdoor activities. July and August are peak months with higher prices and crowds."
      },
      {
        title: "Getting Around",
        content: "Renting a scooter is the most popular way to explore Bali. For longer distances, private drivers are affordable and convenient. Ride-hailing apps like Gojek and Grab are widely available in tourist areas."
      },
      {
        title: "Local Customs",
        content: "Dress modestly when visiting temples (sarongs are often provided). Always use your right hand for giving and receiving. Avoid touching people's heads as it's considered sacred."
      },
      {
        title: "Must-Try Foods",
        content: "Sample local specialties like Babi Guling (suckling pig), Bebek Betutu (slow-cooked duck), and Lawar (traditional mixed dish). Fresh tropical fruits like mangosteen and snake fruit are also delicious."
      }
    ],
    timeline: [
      { year: "8th century", text: "First evidence of written records in Bali" },
      { year: "1343", text: "Majapahit Empire establishes rule over Bali" },
      { year: "1597", text: "First Dutch expedition arrives in Bali" },
      { year: "1906", text: "Dutch military intervention leads to the Puputan massacres" },
      { year: "1945", text: "Bali becomes part of the newly independent Indonesia" },
      { year: "2002", text: "Bali bombings tragically impact the island" },
      { year: "Present", text: "Bali is one of the world's most popular tourist destinations" }
    ],
    tags: ["Bali", "Indonesia", "Beaches", "Culture", "Temples"]
  },
  {
    id: 2,
    title: "A Foodie's Guide to Paris 🍷🥖",
    category: "Europe",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop",
    excerpt:
      "Paris isn't just the city of love, it's also a paradise for food lovers. From fresh croissants at sunrise to fine dining with a view of the Eiffel Tower...",
    content: `
# A Foodie's Guide to Paris

Paris has been a hub of art, culture, and cuisine for centuries. Known as the culinary capital of the world, its food culture has roots in the French Revolution.

## Historical Highlights
- 1789: Street food rose in popularity during the French Revolution.
- 19th century: Parisian cafés became cultural meeting points.
- Today: Paris is home to over 100 Michelin-starred restaurants.

## Must-Try Foods
- Croissants & baguettes fresh from a boulangerie.
- Escargot with garlic butter.
- A glass of Bordeaux wine with local cheese.

`,
    detailedContent: [
      {
        title: "Culinary Districts",
        paragraphs: [
          "Paris is divided into distinct culinary neighborhoods, each with its own specialty. The Marais is known for its Jewish delicatessens and falafel stands, while Saint-Germain-des-Prés boasts historic cafés that once hosted literary giants like Hemingway and Sartre.",
          "The Latin Quarter offers a more bohemian atmosphere with affordable bistros, while the 8th arrondissement is home to many of the city's Michelin-starred restaurants and luxury food shops."
        ],
        list: [
          "Explore Rue Mouffetard in the 5th arrondissement for a vibrant market street",
          "Visit Rue Montorgueil for some of Paris's best pastry shops and fromageries",
          "Discover the covered passages of the 2nd arrondissement for hidden culinary gems"
        ],
        image: "https://baseec-img-mng.akamaized.net/images/item/origin/a7c984a6e1b3e1cd2095af9cc30040bc.jpg?imformat=generic&q=90&im=Resize,width=640,type=normal",
        imageAlt: "Parisian bakery"
      },
      {
        title: "Seasonal Specialties",
        paragraphs: [
          "French cuisine is deeply connected to the seasons, with menus changing throughout the year to highlight the best ingredients available. Spring brings fresh asparagus and strawberries, while autumn features game dishes and mushroom varieties.",
          "Winter is the time for hearty dishes like pot-au-feu and cassoulet, and Christmas markets offer vin chaud (mulled wine) and other seasonal treats. Summer brings an abundance of fresh produce to the many outdoor markets."
        ],
        list: [
          "Try oysters and champagne during the winter holidays",
          "Sample the first harvest of Beaujolais Nouveau in November",
          "Enjoy the white asparagus season in April and May"
        ],
        image: "https://www.tripsavvy.com/thmb/PzN8iY75nwOP525fSi2ume4tVzo=/2123x1412/filters:fill(auto,1)/aixmarketpeter-richardson-roberthardingGetty-57972ca95f9b58461fbf41e9.jpg",
        imageAlt: "French market"
      }
    ],
    practicalInfo: [
      {
        title: "Dining Etiquette",
        content: "Lunch is typically served from 12-2 PM and dinner from 7:30-10:30 PM. It's customary to greet staff with 'Bonjour' when entering and 'Au revoir' when leaving. Tipping is not mandatory as service charge is included, but leaving small change is appreciated."
      },
      {
        title: "Food Markets",
        content: "Visit Marché d'Aligre for a authentic local experience, Marché des Enfants Rouges (Paris's oldest covered market) for prepared foods, or Marché Bastille for one of the largest outdoor markets."
      },
      {
        title: "Bakery Tips",
        content: "Look for the sign 'Artisan Boulanger' to ensure bread is made on premises. The best baguettes have a crisp crust and irregular holes in the crumb. Croissants should be buttery and flaky, not bready."
      },
      {
        title: "Wine Culture",
        content: "Don't hesitate to order the house wine (vin de maison) which is often excellent value. Wine is typically served by the carafe (25cl, 50cl, or 1 liter). Most restaurants offer a selection of wines by the glass."
      }
    ],
    timeline: [
      { year: "52 BC", text: "Paris founded as Lutetia by the Parisii tribe" },
      { year: "508", text: "Clovis I made Paris the capital of the Frankish Kingdom" },
      { year: "1163", text: "Construction of Notre-Dame Cathedral began" },
      { year: "1789", text: "French Revolution began at the Bastille" },
      { year: "1889", text: "Eiffel Tower completed for the World's Fair" },
      { year: "1920s", text: "Paris became a hub for artists and writers of the Lost Generation" },
      { year: "Present", text: "Paris remains one of the world's most visited cities" }
    ],
    tags: ["Paris", "France", "Food", "Wine", "Culture"]
  },
  {
    id: 3,
    title: "Why You Should Visit Cape Town 🏔️",
    category: "Africa",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop",
    excerpt:
      "Cape Town combines stunning mountains, world-class beaches, and a vibrant cultural scene. Here's why it should be on your bucket list...",
    content: `
# Why You Should Visit Cape Town

Cape Town, founded in 1652 as a Dutch settlement, is one of the oldest European-established cities in Africa.

## Historical Highlights
- 1652: Dutch East India Company founded Cape Town.
- 1806: Became a British colony.
- 1994 Nelson Mandela gave his first speech after prison release here.

## Travel Tips
- Hike Table Mountain for breathtaking views.
- Visit Robben Island to learn about Mandela's history.
- Explore Cape Winelands for top wines.
`,
    detailedContent: [
      {
        title: "Natural Beauty",
        paragraphs: [
          "Cape Town is nestled between the iconic Table Mountain and the Atlantic Ocean, creating one of the most spectacular settings of any city in the world. The mountain itself is a UNESCO World Heritage Site and home to over 1,400 species of plants, many found nowhere else on Earth.",
          "The coastline stretches from the rugged cliffs of the Cape Peninsula to the pristine white sand beaches of Clifton and Camps Bay. The meeting point of the Atlantic and Indian Oceans at Cape Point creates unique marine ecosystems and dramatic seascapes."
        ],
        list: [
          "Take the cable car or hike up Table Mountain for panoramic views",
          "Drive along Chapman's Peak for one of the world's most scenic coastal roads",
          "Visit Boulders Beach to see the colony of African penguins"
        ],
        image: "https://th.bing.com/th/id/R.a87fa04f63470bd6a3767aaca75ae50e?rik=wJ4hp9IHZV58Qw&pid=ImgRaw&r=0",
        imageAlt: "Chapman's Peak"
      },
      {
        title: "Cultural Diversity",
        paragraphs: [
          "Cape Town's history has created a unique cultural tapestry known as the 'Rainbow Nation'. The city reflects influences from indigenous Khoisan people, Dutch and British colonists, Malay slaves, and immigrants from across Africa and Asia.",
          "This diversity is expressed in the city's architecture, from Cape Dutch buildings to Victorian and Art Deco structures. The Bo-Kaap neighborhood with its brightly colored houses is one of the most photogenic areas, reflecting the Cape Malay heritage."
        ],
        list: [
          "Explore the District Six Museum to understand apartheid's impact",
          "Visit the Zeitz Museum of Contemporary Art Africa at the V&A Waterfront",
          "Experience the vibrant music and dance traditions at a local festival"
        ],
        image: "https://www.andbeyond.com/wp-content/uploads/sites/5/bo-kaap.jpg",
        imageAlt: "Bo-Kaap colorful houses"
      }
    ],
    practicalInfo: [
      {
        title: "Best Time to Visit",
        content: "The best time to visit is during the summer months (November to February) for warm weather and outdoor activities. Spring (September-October) offers beautiful wildflowers and fewer crowds. Whale watching is best from June to November."
      },
      {
        title: "Getting Around",
        content: "Renting a car is the most convenient way to explore beyond the city center. Uber and Bolt are widely available within the city. The MyCiTi bus system provides reliable transport to major attractions."
      },
      {
        title: "Safety Tips",
        content: "Stay alert in crowded areas and avoid displaying valuables. Don't walk alone at night, especially in isolated areas. Stick to well-lit main streets and use reputable taxi services after dark."
      },
      {
        title: "Local Cuisine",
        content: "Don't miss trying braai (South African barbecue), bobotie (spiced minced meat dish), and malva pudding (a sweet dessert). Sample wines from the nearby Stellenbosch and Franschhoek regions, and try craft beers from local breweries."
      }
    ],
    timeline: [
      { year: "1652", text: "Jan van Riebeeck established a supply station for the Dutch East India Company" },
      { year: "1795", text: "British forces captured Cape Town during the Napoleonic Wars" },
      { year: "1910", text: "Cape Town became legislative capital of the Union of South Africa" },
      { year: "1948", text: "Apartheid policies began to be implemented" },
      { year: "1990", text: "Nelson Mandela released from prison after 27 years" },
      { year: "2010", text: "Cape Town hosted FIFA World Cup matches" },
      { year: "Present", text: "Cape Town is a leading tourist destination and cultural hub" }
    ],
    tags: ["Cape Town", "South Africa", "Mountains", "Beaches", "Wildlife"]
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <header
        className="relative h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">Travel Blog ✈️</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Inspiring stories, guides, and tips from travelers around the world.
          </p>
        </div>
      </header>

      {/* Blog List */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Articles</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                {post.category && (
                  <div className="inline-block mb-2 bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wide">
                    {post.category}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                <p className="mt-4 text-gray-700 text-sm">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-block text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export { blogPosts };