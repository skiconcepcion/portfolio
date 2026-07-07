export default function CertificateCard({ certificate }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="aspect-[6/4] w-full overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}