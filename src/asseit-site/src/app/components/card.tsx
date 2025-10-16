interface CardProps {
  title: string;
  description: string;
  image?: string;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
      )}
      <h3 className="text-lg font-semibold text-asseitBlue mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}
