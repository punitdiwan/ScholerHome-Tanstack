import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { InfoCard } from "./InfoCard";
import KnowMoreBTN from "./KnowMoreBTN";
import UnderLine from "./underLine";


interface TwoCardSliderProps {
    title: string;
    data: InfoCardItem[];
    KnowBTNRoute?:string
}
export interface InfoCardItem {
    id: number;
    title: string;
    date: string;
    description: string;
}

export const TwoCardSlider: React.FC<TwoCardSliderProps> = ({
    title,
    data,
    KnowBTNRoute,
}) => {
    const [index, setIndex] = useState(0);

    const ITEMS_PER_SLIDE = 2;
    const maxIndex = Math.ceil(data.length / ITEMS_PER_SLIDE) - 1;

    const next = () => setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    const prev = () => setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

    return (
        <section className="px-6 py-2 ">
            <div className="max-w-7xl mx-auto">

                {/* TITLE FROM PROP */}
                <h2 className="text-2xl font-abhaya text-secondary mb-1">
                    {title}
                </h2>
                <UnderLine/>
                {/* SLIDER */}
                <div className="overflow-hidden mt-2">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {Array.from({
                            length: Math.ceil(data.length / ITEMS_PER_SLIDE),
                        }).map((_, slideIdx) => (
                            <div
                                key={slideIdx}
                                className="min-w-full flex flex-col gap-6"
                            >
                                {data
                                    .slice(
                                        slideIdx * ITEMS_PER_SLIDE,
                                        slideIdx * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                                    )
                                    .map((item) => (
                                        <InfoCard
                                            key={item.id}
                                            title={item.title}
                                            date={item.date}
                                            description={item.description}
                                        />
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM CONTROLS */}
                <div className="mt-10 flex items-center justify-between">

                    {/* KNOW MORE */}
                    <KnowMoreBTN
                        route={KnowBTNRoute}
                    />

                    {/* PREV / NEXT */}
                    <div className="flex gap-3">
                        <button
                            onClick={prev}
                            className="cursor-pointer w-10 h-10 flex items-center justify-center
                         border border-gray-400 text-gray-600 rounded-full
                         hover:bg-secondary hover:border-secondary hover:text-black
                         transition-all duration-300"
                        >
                            <HiChevronLeft size={22} />
                        </button>

                        <button
                            onClick={next}
                            className="cursor-pointer w-10 h-10 flex items-center justify-center
                         border border-gray-400 text-gray-600 rounded-full
                         hover:bg-secondary hover:border-secondary hover:text-black
                         transition-all duration-300"
                        >
                            <HiChevronRight size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
