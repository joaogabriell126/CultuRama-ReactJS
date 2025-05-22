import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HeroGrid from './components/HeroGrid.jsx'
import Categories from './components/Categories.jsx'
import Highlights from './components/Highlights.jsx'
import UpcomingEvents from './components/UpCommingEvents.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroGrid />
        <div className="w-270 mx-auto flex justify-between gap-5">
          <Categories />
          <Highlights />
        </div>
        <UpcomingEvents />
      </main>
      <Footer />
    </>
  )
}

export default App
