import './App.css'
import Header from './HomePage/components/Header'
import Hero from './HomePage/components/HeroSection/Hero'
import WhyUs from './HomePage/components/WhyUs'

function App() {

  return (
    <>
        <Header />
        <main className='container w-2xl max-w-screen-xl mx-auto p-8'>
            <Hero />
            <WhyUs />
        </main>
    </>
  )
}

export default App
