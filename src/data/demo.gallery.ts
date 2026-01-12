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
            "https://picsum.photos/1200/800?random=11",
            "https://picsum.photos/1200/800?random=12",
            "https://picsum.photos/1200/800?random=13"
          ]
        },
        {
          id: "independence-day",
          title: "Independence Day",
          images: [
            "https://picsum.photos/1200/800?random=14",
            "https://picsum.photos/1200/800?random=15"
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
            "https://picsum.photos/1200/800?random=21",
            "https://picsum.photos/1200/800?random=22",
            "https://picsum.photos/1200/800?random=23",
            "https://picsum.photos/1200/800?random=24"
          ]
        },
        {
          id: "science-exhibition",
          title: "Science Exhibition",
          images: [
            "https://picsum.photos/1200/800?random=25",
            "https://picsum.photos/1200/800?random=26"
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
            "https://picsum.photos/1200/800?random=31",
            "https://picsum.photos/1200/800?random=32"
          ]
        }
      ]
    }
  ];

  return galleryData;
});
