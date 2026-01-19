import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
// import { AiOutlineCaretRight } from "react-icons/ai";
import ImageTitleSection from "@/components/ImageHeader";
import { getGalleryData } from "@/data/demo.gallery";

interface Activity {
  id: string;
  // title: string;
  images: string;
}



// const galleryData: GalleryYear[] = [
//   {
//     year: "2023-24",
//     activities: [
//       {
//         id: "sports-day",
//         title: "Annual Sports Day",
//         images: [
//           "https://picsum.photos/1200/800?random=11",
//           "https://picsum.photos/1200/800?random=12",
//           "https://picsum.photos/1200/800?random=13"
//         ]
//       },
//       {
//         id: "independence-day",
//         title: "Independence Day",
//         images: [
//           "https://picsum.photos/1200/800?random=14",
//           "https://picsum.photos/1200/800?random=15"
//         ]
//       }
//     ]
//   },
//   {
//     year: "2024-25",
//     activities: [
//       {
//         id: "annual-function",
//         title: "Annual Function",
//         images: [
//           "https://picsum.photos/1200/800?random=21",
//           "https://picsum.photos/1200/800?random=22",
//           "https://picsum.photos/1200/800?random=23",
//           "https://picsum.photos/1200/800?random=24"
//         ]
//       },
//       {
//         id: "science-exhibition",
//         title: "Science Exhibition",
//         images: [
//           "https://picsum.photos/1200/800?random=25",
//           "https://picsum.photos/1200/800?random=26"
//         ]
//       }
//     ]
//   },
//   {
//     year: "2025-26",
//     activities: [
//       {
//         id: "yoga-day",
//         title: "Yoga Day",
//         images: [
//           "https://picsum.photos/1200/800?random=31",
//           "https://picsum.photos/1200/800?random=32"
//         ]
//       }
//     ]
//   }
// ];

export const Route = createFileRoute("/gallery")({
  loader: async () => {
    return await getGalleryData()
  },
  component: GalleryPage
});

function GalleryPage() {
  const galleryData = Route.useLoaderData() as Activity[];
  // const [selectedYear, setSelectedYear] = useState(galleryData[0].year);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // const selectedYearData = galleryData.find(
  //   (y) => y.year === selectedYear
  // );

  // const getPreviewImage = (activity: Activity) => 
  //   activity.images[activity.images.length - 1];

  return (
    <>
      <ImageTitleSection
        title="Gallery"
        imageUrl="home7.png"
      />

      {/* <div className="flex gap-6 px-10 py-8"> */}
      {/* <div className="w-40 relative">
          {galleryData.map((y:any) => (
            <div key={y.year} className="relative flex items-center">

              <button
                className={`w-full cursor-pointer px-10 py-7 border-b border-gray-300 transition text-left
          ${selectedYear === y.year
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                onClick={() => setSelectedYear(y.year)}
              >
                {y.year}
              </button>

              {selectedYear === y.year && (
                <div className="absolute -right-3.5 flex items-center justify-center">
                  <AiOutlineCaretRight
                    className="text-primary text-xl"
                  />
                </div>
              )}

            </div>
          ))}
        </div> */}

      {/* <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selectedYearData?.activities.map((activity:Activity) => (
            <div
              key={activity.id}
              onClick={() => {
                setActiveImages(activity.images);
                setLightboxOpen(true);
              }}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md group"
            >
              <img
                src={getPreviewImage(activity)}
                alt={activity.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-3 bg-white">
                <h3 className="font-semibold">{activity.title}</h3>
                <p className="text-sm text-gray-500">
                  {activity.images.length} Photos
                </p>
              </div>
            </div>
          ))}
        </div> */}

      <div className="px-10 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {galleryData.map((item, index) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              setLightboxOpen(true);
            }}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md group"
          >
            <img
              src={item.images}
              alt="Gallery Image"
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>


      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={activeIndex}
          slides={galleryData.map((item) => ({ src: item.images }))}
          plugins={[Thumbnails]}
          thumbnails={{ width: 100, height: 60 }}
        />
      )}
      {/* </div> */}
    </>
  );
}
