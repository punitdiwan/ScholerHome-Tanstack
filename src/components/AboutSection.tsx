
import { FC } from "react";
import UnderLine from "./underLine";
import KnowMoreBTN from "./KnowMoreBTN";


const AboutSection: FC = () => {

  return (
    <section className="w-full bg-white ">
      <div className=" ">

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-abhaya tracking-wide mb-2 text-[#585858]">
            About the Scholars Home Public School
          </h2>
          <UnderLine />
          <p className="mt-4 text-[#606060] leading-tight text-justify">
            The Scholars Home Public School is a co-educational, day boarding-cum-residential
            school. Established under the aegis of the Sharda Devi Charitable Trust,
            it is a non-profit institution and a tribute to the memory of our respected
            matriarch.The school is spread over a verdant and picturesque campus of 40 acres in an
            unpolluted, inspiring and happy environment. The wired campus comprises of
            2.5 lac square feet built-up area and offers the best in terms of facilities
            required to enhance learning outcomes.The activities in school orbit around upholding its core values of Nurturing individuals towards excellence in a happy, value-based
            and progressive learning community.
          </p>


          {/* CTA */}
          {/* <button
            className="inline-block mt-4 text-white text-sm font-light p-2 cursor-pointer hover:underline bg-primary"
            onClick={() => navigate({ to: "/about" })}
          >
            Know more →
          </button> */}
          <div className=" mt-4  p-2 ">
            <KnowMoreBTN
              route={"/about"}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
