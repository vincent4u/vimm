import { Link } from "react-router-dom"


function Navigation_bar() {
    return (
        <>
        <div className="header_box">
         <img src="src\assets\icons_assets\Logo .svg" className="App-logo" alt="logo" />
      
      <nav className="navigate_links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About </Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Booking</Link></li>
        </ul>
      </nav>
      </div>
        </>
    )
}
export default Navigation_bar