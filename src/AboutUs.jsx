import Footer from "./Footer"
import Header from "./Header"

function AboutUs() {
  return (
    <>
    <Header />
    <main>
    <section id="about-hero" style={{ height: '100vh', padding: '5rem', color: '#000' }}>
        <h1>About Us</h1>
            <p>We’re passionate about creating amazing experiences for our customers.</p>
    </section>

    <section id="our-story" style={{ height: '100vh', padding: '5rem', color: '#000',}}>
        <h2>Our Story</h2>
        <p>Founded in 2020, we’ve grown from a small startup to a beloved local brand...</p>
    </section>

    <section id="mission-vision" style={{ height: '100vh', padding: '5rem', color: '#000' }}>
        <h2>Our Mission & Vision</h2>
            <p>Mission: Deliver the best experience to our clients.</p>
                <p>Vision: Become the top choice in our industry.</p>
    </section>

    <section id="values" style={{ height: '100vh', padding: '5rem', color: '#000',}}>
        <h2>Our Values</h2>
            <ul>
                <li>Quality</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
            </ul>
    </section>

    <section id="contact-cta" style={{ height: '100vh', padding: '5rem', color: '#000',}}>
        <h2>Want to know more?</h2>
        <a href="/contact">Contact Us</a>
    </section>
    </main>
<Footer />
    </>
  )
}
export default AboutUs