
import './App.css'

function App() {

  return (
    <>
    <header className="App-header">
      <img src="src\assets\icons_assets\Logo .svg" className="App-logo" alt="logo" />
      
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <HomePage />
    </main>
    <footer>
      <p>© 2024 My React Router App</p>
    </footer>
    </>
  )
}

function HomePage() {
  return (
    <>
    <h2>Welcome to React Router!</h2>
    <h2> Hompage</h2>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, et laborum accusamus fugiat repellat dolorem eligendi! Hic sint provident similique minus maxime, facilis omnis fugit nulla est, quam iure mollitia.
    </>
  )
}

export default App
