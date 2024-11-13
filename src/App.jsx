
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Service from './components/Service/Service'
import Achievements from './components/Achievements/Achievements'
import FastestDelivary from './components/FastestDelivary/FastestDelivary'
import Testimonial from './components/Testimoinal/Testimonial'
import Contact from './components/Contact/Contact'
import Findus from './components/Findus/Findus'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Achievements />
      <FastestDelivary />
      <Testimonial />
      <Contact/>
      <Findus/>
      <Footer/>
    </>
  )
}

export default App
