import { FC } from "react";

const PhilosophySection: FC = () => {
  return (
    <section className="w-full bg-gray-50 mt-4">
      <div className=" flex flex-col md:flex-row items-center "
      style={{
                backgroundImage: "url('/shlok.jpg')",
                backgroundPosition: "left center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

        {/* LEFT CONTENT */}
        <div className="w-full md:w-4xl px-6 py-4 h-full"
            >
          {/* Sanskrit Shloka */}
          <p className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
            ॥ आत्मना विन्दते वीर्यं विद्यया विन्दते अमृतम् ॥
          </p>

          {/* English Meaning */}
          <p className="mt-4 text-2xl uppercase font-abhaya tracking-widest text-gray-900">
            From the soul comes valour. From knowledge comes immortality.
          </p>

          {/* Description */}
          <p className="mt-2 text-gray-500 leading-relaxed text-justify">
            At The Scholars Home Public School, we believe in harnessing the inborn
            potential of every child and empowering him with knowledge. And if
            there is joy in learning and happiness in gaining knowledge, it will
            remain with the soul forever.
          </p>
        </div>

        {/* RIGHT VIDEO */}
        <div className=" w-55 sm:w-75 md:w-90 lg:w-100 
         h-37.5 sm:h-50 md:h-62.5 lg:h-70 overflow-hidden mx-auto md:ml-auto">
          <video
            className="w-full h-full object-cover"
            src="/school-video.mp4"
            controls
            muted
            playsInline
          />
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
