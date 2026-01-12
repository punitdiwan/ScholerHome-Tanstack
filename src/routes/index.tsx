import AboutSection from '@/components/AboutSection'
import AcademicSection from '@/components/AcademicSection'
import AffiliationsSlider from '@/components/AffiliationsSlider'
import { OneCardSlider } from '@/components/AwardCardSlider'

import ImageSlider from '@/components/HeroSlider'
import { LifeAtScholarHomes } from '@/components/LifeAtScholar'
import PhilosophySection from '@/components/PhilosophySection'
import { Testimonials } from '@/components/Testimonials'
import { TrendingSlider } from '@/components/trendingCard'
import { TwoCardSlider } from '@/components/TwoCardSlider'
import { IndexData } from '@/data/demo.newsfeed'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ 
  loader: async () => {
      return await IndexData()
    },
  component: App })

function App() {
    const Data = Route.useLoaderData()
  return (
    <>
      <div>
        <ImageSlider/>
        <div className='px-10 py-8'>
          <AboutSection/>
          <PhilosophySection/>
        </div>
        <AcademicSection/>
        <AffiliationsSlider/>
        <LifeAtScholarHomes/>
        <div className='flex flex-col md:flex-row mx-10 py-8  bg-pink-50'>
          <TwoCardSlider
              title="Our Highlights"
              data={Data.highlightsData}
              KnowBTNRoute="/upcomingEvent"
            />
          <TwoCardSlider
            title="Achievements"
            data={Data.achievementsData}
            KnowBTNRoute='/achievements'
          />
          <TwoCardSlider
            title="News Feed"
            data={Data.newsFeedData}
            KnowBTNRoute='/newsFeed'
          />
        </div>
        <div className='w-auto flex flex-col md:flex-row gap-4 mx-10 py-8 my-8 bg-blue-50'>
          <div className='flex-1'>
            <OneCardSlider
              awards={Data.awardsData}
              logoImage="/award-tag.webp"
            />
          </div>
          <div className='flex-1'>
            <TrendingSlider/>
          </div>
        </div>
        <Testimonials/>
      </div>
    </>
  )
}

