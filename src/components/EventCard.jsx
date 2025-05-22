export default function EventCard ({ image, title, date, location }){
  return (
    <div className="bg-white shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-gray-100">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm mb-1">{date}</p>
        <p className="text-sm text-gray-600 mb-3">{location}</p>
        <button className="bg-black text-white px-4 py-1 text-sm">Ver</button>
      </div>
    </div>
  );
};
