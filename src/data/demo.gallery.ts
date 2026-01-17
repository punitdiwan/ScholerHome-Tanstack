import { createServerFn } from '@tanstack/react-start'

export const getGalleryData = createServerFn({
  method: 'GET',
}).handler(async () => {
  const galleryData= [
    {
      year: "2023-24",
      activities: [
        {
          id: "sports-day",
          title: "Annual Sports Day",
          images: [
            "/gameAndSports/game&sports.jpeg",
            "/gameAndSports/22.jpeg",
            "/public/interh.jpg"
          ]
        },
        {
          id: "independence-day",
          title: "Independence Day",
          images: [
            "/ind1.jpg",
            "/ind2.jpg"
          ]
        }
      ]
    },
    {
      year: "2024-25",
      activities: [
        {
          id: "annual-function",
          title: "Annual Function",
          images: [
            "/ann1.jpg",
            "/ann2.jpg",
            "/ann3.jpg",
            "/ann4.jpg"
          ]
        },
        {
          id: "science-exhibition",
          title: "Science Exhibition",
          images: [
            "gameAndSports/game&sports2.jpeg",
            "gameAndSports/game&sports3.jpeg"
          ]
        }
      ]
    },
    {
      year: "2025-26",
      activities: [
        {
          id: "yoga-day",
          title: "Yoga Day",
          images: [
            "/yoga1.jpg",
            "/yoga2.jpeg"
          ]
        }
      ]
    }
  ];

  return galleryData;
});
