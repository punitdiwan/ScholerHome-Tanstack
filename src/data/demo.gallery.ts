import { createServerFn } from '@tanstack/react-start'

export const getGalleryData = createServerFn({
  method: 'GET',
}).handler(async () => {
  const galleryData= [
   
        {
          id: "1",
          images: "/gameAndSports/game&sports.jpeg",
        },
        {
          id: "2",
          images: "/gameAndSports/22.jpeg",
        },
        {
          id: "3",
          images: "/public/interh.jpg"
        },
        {
          id: "4",
          images: "/ind1.jpg",
        },
        {
          id: "5",
          images: "/ind2.jpg"
        },
        {
          id: "6",
          images: "/ann1.jpg",
        },
        {
          id: "7",
          images: "/ann2.jpg",
        },
        {
          id: "8",
          images: "/ann3.jpg",
        },
        {
          id: "9",
          images: "/ann4.jpg",
        },
        {
          id: "10",
          images: "/ann4.jpg"
        },
        {
          id: "11",
          images: "/new1.jpeg",
        },
        {
          id: "12",
          images:  "/new2.jpg",
        },
        {
          id: "13",
          images: "/new2.jpg"
        },
        {
          id: "14",
          images: "/new3.jpg",
        },
        {
          id: "15",
          images: "/new4.jpg"
        },
        {
          id: "16",
          images:"/new5.jpg",
        },
        {
          id: "17",
          images: "/new6.jpg",
        },
        {
          id: "18",
          images: "/new7.jpg",
        },
        {
          id: "19",
          images: "/new8.jpg",
        },
        {
          id: "20",
          images: "/new9.jpeg"
        },
        
        {
          id: "21",
          images: "/new10.jpeg",
        },
        {
          id: "22",
          images: "/new11.jpeg",
        },
        {
          id: "23",
          images: "/new12.jpeg"
        },
        {
          id: "24",
          images: "/new13.jpeg",
        },
        {
          id: "25",
          images: "/new14.jpeg"
        },
        {
          id: "26",
          images: "/new15.jpeg",
        },
        {
          id: "27",
          images:"/new16.jpeg",
        },
        {
          id: "28",
          images: "/new17.jpeg",
        },
        {
          id: "29",
          images:"/new18.jpeg",
        },
        {
          id: "30",
          images: "/new19.jpeg"
        },
        {
          id: "31",
          images: "/new20.jpeg",
        },
        {
          id: "32",
          images:  "/new21.jpeg",
        },
        {
          id: "33",
          images: "/new22.jpeg"
        },
        {
          id: "34",
          images: "/new3.jpg",
        },
        {
          id: "35",
          images: "/new4.jpg"
        },
        {
          id: "66",
          images:"/new5.jpg",
        },
        {
          id: "37",
          images: "/new6.jpg",
        },
        {
          id: "38",
          images: "/new7.jpg",
        },
        {
          id: "39",
          images: "/new8.jpg",
        },
        {
          id: "40",
          images: "/new9.jpeg"
        },
        
        
    //   ]
    //     {
    //       id: "independence-day",
    //       title: "Independence Day",
    //       images: [
            
            
    //       ]
    //     }
    //  ,
    //     {
    //       id: "annual-function",
    //       title: "Annual Function",
    //       images: [
    //         "/ann1.jpg",
    //         "/ann2.jpg",
    //         "/ann3.jpg",
    //         "/ann4.jpg"
    //       ]
    //     },
    //     {
    //       id: "science-exhibition",
    //       title: "Science Exhibition",
    //       images: [
    //         "gameAndSports/game&sports2.jpeg",
    //         "gameAndSports/game&sports3.jpeg"
    //       ]
    //     }
    //  ,
    //     {
    //       id: "yoga-day",
    //       title: "Yoga Day",
    //       images: [
    //         "/yoga1.jpg",
    //         "/yoga2.jpeg"
    //       ]
    //     }
     
  ];

  return galleryData;
});




