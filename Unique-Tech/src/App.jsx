import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Portfolio from './Components/Portfolio'
import MapImage from './Components/MapImage'
import OurFeatures from './Components/OurFeatures'
import OurPackages from './Components/OurPackages'
import OurHistory from './Components/OurHistory'
import OurBusiness from './Components/OurBusiness'
import OurTeam from './Components/OurTeam'
import OurSupport from './Components/OurSupport'
import HireUs from './Components/HireUs'
import Footer from './Components/Footer'
import projectData from './Components/mockData/businessData'
import data from './Components/mockData/ourFeaturesData'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <Portfolio/>
    <MapImage/>
    <OurFeatures data={data}/>
    <OurPackages/>
    <OurHistory/>
    <OurBusiness projectData={projectData} />
    <OurTeam/>
    <OurSupport/>
    <HireUs/>
    <Footer/>
    </>
  )
}

export default App
