import { createServerFn } from "@tanstack/react-start";


export const holidayData = createServerFn({method:'GET'}).handler(
    async()=>{
          const holidays = [
            { id: 1, date: "15 Aug 2025", occasion: "Independence Day" },
            { id: 2, date: "02 Oct 2025", occasion: "Gandhi Jayanti" },
            { id: 3, date: "24 Oct 2025", occasion: "Dussehra" },
            { id: 4, date: "12 Nov 2025", occasion: "Diwali" },
            { id: 5, date: "25 Dec 2025", occasion: "Christmas" },
            { id: 6, date: "26 Jan 2026", occasion: "Republic Day" },
            { id: 7, date: "08 Mar 2026", occasion: "Holi" },
          ];
          return holidays;
    }
)