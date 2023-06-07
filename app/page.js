import { Nav } from '@/components/Nav'
import Image from 'next/image'

import AppDesc from '@/components/AppDesc'
import AppHeading from '@/components/AppHeading'

export default function Home() {
  const appTagline = "A tool that allows you to scrape and download Instagram accounts that matches anything you search.";
  return (
    <main className='container mx-auto'>
        <Nav></Nav>
          <section className='flex mt-[6rem]'>
            <div className='flex justify-center flex-col w-full'>
              <AppHeading firstpart='Insta' secondpart='Search'/>
              <AppDesc content={appTagline} />
            </div>
        </section>
    </main>
  )
}
