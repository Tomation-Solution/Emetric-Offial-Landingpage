import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import HeroSection from '../shared/HeroSection/HeroSection'
import Info from '../shared/Infos/Infos'
import ListProductInfo from '../shared/ListProductInfo/ListProductInfo'
import OtherBenefits from '../shared/OtherBenefis/OtherBenefits'

const Home: NextPage = () => {
  return (
    <GeneralLayout>
      

      <br />
      <HeroSection/>
      <br />
      <Info/>
      <br />
      <ListProductInfo/>
      <br />
      <OtherBenefits/>
    </GeneralLayout>
  )
}

export default Home
