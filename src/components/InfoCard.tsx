import React from "react";

interface InfoCardProps {
  title: string;
  date: string;
  description: string;
  titleLimit?: number;       // optional prop
  descriptionLimit?: number; // optional prop
}

/* 🔹 helper function to slice text */
const sliceText = (text: string, limit: number) => {
  if (!text) return "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  date,
  description,
  titleLimit = 30,        // default 60 chars
  descriptionLimit = 80, // default 120 chars
}) => {
  return (
    <div className=" h-full">
      <div className="flex flex-col h-full">

        {/* Date */}
        <p className="text-sm text-gray-500">{date}</p>

        {/* Title */}
        <h3
          className="text-md font-semibold text-gray-900 line-clamp-2"
          title={title} // full title on hover
        >
          {sliceText(title, titleLimit)}
        </h3>

        {/* Description */}
        <p
          className="text-gray-600 text-sm leading-relaxed line-clamp-3"
          title={description} // full description on hover
        >
          {sliceText(description, descriptionLimit)}
        </p>

      </div>
    </div>
  );
};
