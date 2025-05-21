import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HeroGrid from './components/HeroGrid.jsx'
import Categories from './components/Categories.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <HeroGrid />
        <div className="w-270 mx-auto border border-red-950">
            <Categories />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
