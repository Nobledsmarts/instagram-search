'use client'
import {  useEffect, useState } from 'react'
import { Nav } from '@/components/Nav'
import Image from 'next/image'

import AppDesc from '@/components/AppDesc'
import AppHeading from '@/components/AppHeading'
import { SearchInput } from '@/components/SearchInput';
import { SignInModal } from '@/components/SignInModal'
import { UseModal } from '@/components/context/ModalContext'

export default function Home() {
  const appTagline = "A tool that allows you to scrape and download Instagram accounts that matches anything you search.";
  const [searchValue, setSearchValue] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { state, dispatch } = UseModal();

  const onSearchInput = (e) => {
    setSearchValue(e.target.value);
  }
  const showLogin = (value = true) => {
    setShowLoginModal(value);
  }
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <main className='container mx-auto'>
          <Nav showLogin={dispatch}></Nav>
            <section className='flex flex-col mt-[6rem]'>
              <div className='flex justify-center flex-col w-full'>
                <AppHeading firstpart='Insta' secondpart='Search'/>
                <AppDesc content={appTagline} />
              </div>
              <div className='flex justify-center mt-8'>
                <SearchInput 
                  placeholder='Search Something...' 
                  value={searchValue} 
                  onInput={onSearchInput}
                />
              </div>
          </section>
      </main>
      <SignInModal active={showLoginModal} showLogin={showLogin}/>
    </div>
  )
}
