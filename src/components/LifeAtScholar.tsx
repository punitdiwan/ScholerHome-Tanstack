
import UnderLine from "./underLine";


const images = {
  row1: [
    { src: "/images/life1.jpg", title: "Campus Life" },
    { src: "/images/life2.jpg", title: "Classroom Learning" },
    { src: "/images/life3.jpg", title: "Sports Activities" },
    { src: "/images/life4.jpg", title: "Creative Arts" },
  ],
  row2: [
    { src: "/images/life5.jpg", title: "Student Engagement" },
    { src: "/images/life6.jpg", title: "Cultural Programs" },
    { src: "/images/life7.jpg", title: "Leadership Activities" },
  ],
  row3: [
    { src: "/images/life8.jpg", title: "Laboratory Sessions" },
    { src: "/images/life9.jpg", title: "Library & Reading" },
    { src: "/images/life10.jpg", title: "School Events" },
    { src: "/images/life11.jpg", title: "Outdoor Learning" },
  ],
};

const ImageCard = ({ src, title, height }: { src: string; title: string; height: string }) => (
  <div className="relative overflow-hidden group">
    <img
      src={src}
      alt={title}
      className={`w-full ${height} object-cover group-hover:scale-110 transition-transform duration-500`}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

    {/* Title */}
    <div className="absolute bottom-4 left-4 right-4">
      <p className="text-white text-lg font-semibold tracking-wide">
        {title}
      </p>
    </div>
  </div>
);

export const LifeAtScholarHomes = () => {
  return (
    <section className="px-6 py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-abhaya  text-secondary mb-2">
          Life @ Scholar Homes
        </h2>

        <UnderLine/>

        {/* ROW 1 – 4 Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-4">
          {images.row1.map((item, idx) => (
            <ImageCard
              key={idx}
              src={item.src}
              title={item.title}
              height="h-48"
            />
          ))}
        </div>

        {/* ROW 2 – Big + 2 Small */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

          {/* BIG IMAGE */}
          <div className="md:col-span-2">
            <ImageCard
              src={images.row2[0].src}
              title={images.row2[0].title}
              height="h-64"
            />
          </div>

          {/* SMALL IMAGES */}
          {images.row2.slice(1).map((item, idx) => (
            <ImageCard
              key={idx}
              src={item.src}
              title={item.title}
              height="h-64"
            />
          ))}
        </div>

        {/* ROW 3 – 4 Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.row3.map((item, idx) => (
            <ImageCard
              key={idx}
              src={item.src}
              title={item.title}
              height="h-48"
            />
          ))}
        </div>

      </div>
    </section>
  );
};
