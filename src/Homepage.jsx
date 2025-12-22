import AboutUs from "./AboutUs"
import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"


function HomePage() {
  return (
    <>
    <Header />
        <section id="home" style={{ height: '100vh', padding: '5rem', color: '#1a1a1a', background: '#f5f5f5' }}>
         <HeroSection />
        </section>

        <section id="about" style={{ height: '100vh', padding: '2rem', color: '#1a1a1a', background: '#ddd' }}>
          <h1>About Section</h1>
          <p>About us content goes here.</p>
        </section>

        <section id="contact" style={{ height: '100vh', padding: '2rem', color: '#1a1a1a', background: '#bbb' }}>
          <h1>Contact Section</h1>
          <p>Contact info here.</p>
        </section>
    <Footer />
    </>
  )
}
export default HomePage