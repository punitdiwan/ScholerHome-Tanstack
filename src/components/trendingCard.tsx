import React from "react";

import UnderLine from "./underLine";

export const TrendingSlider: React.FC = () => {
  

  return (
    <section className="p-4 bg-white shadow">
      <h1 className="text-2xl font-bold font-abhaya text-secondary mb-2">
        Trending @ Sanskaar
      </h1>
      <UnderLine/>
        <div className="flex gap-4 mt-4">
            <img
                src={'/accademic/child.jpg'}
                alt="firs "
                className="w-24 h-24 object-cover mb-4"
            />
            <div>
                Fresh smiles & new year dream!
            </div>
        </div>
     
    </section>
  );
};
