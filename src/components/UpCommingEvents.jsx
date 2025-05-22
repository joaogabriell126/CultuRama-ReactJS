import EventCard from "./EventCard";

import Card1 from '../assets/Desktop/Cards eventos/Card1.png'
import Card2 from '../assets/Desktop/Cards eventos/Card2.png'
import Card3 from '../assets/Desktop/Cards eventos/Card3.png'
import Card4 from '../assets/Desktop/Cards eventos/Card4.png'
import Card5 from '../assets/Desktop/Cards eventos/Card5.png'
import Card6 from '../assets/Desktop/Cards eventos/Card6.png'
import Card7 from '../assets/Desktop/Cards eventos/Card7.png'
import Card8 from '../assets/Desktop/Cards eventos/Card8.png'

const events = [
  {
    image: Card1,
    title: "Festival das Luzes",
    date: "14/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card2,
    title: "Festa Latina",
    date: "16/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card3,
    title: "Festival de Cinema",
    date: "16/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card4,
    title: "Corrida pela Saúde",
    date: "18/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card5,
    title: "Feira de animes",
    date: "14-18/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card6,
    title: "Festival Multicores",
    date: "18/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card7,
    title: "Dia de Balonismo",
    date: "18/08/22",
    location: "São Paulo | SP"
  },
  {
    image: Card8,
    title: "Quinta 3D",
    date: "18/08/22",
    location: "São Paulo | SP"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="mx-auto w-270 py-8">
      <h2 className="text-2xl font-bold mb-6">PRÓXIMOS EVENTOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};