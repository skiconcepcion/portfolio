export default function ArtworkCard({ artwork }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <img
        src={artwork.image}
        alt={artwork.title}
        className="aspect-[7/8] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50" />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full translate-y-4 p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-2xl font-bold">
          {artwork.title}
        </h3>

        <p className="text-md text-white">
          {artwork.description}
        </p>

        <p className="mt-2 text-sm text-gray-200 italic">
          {artwork.credit}
        </p>
      </div>
    </div>
  );
}