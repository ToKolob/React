import { Outlet, Link } from "react-router-dom"
export default function RootLayout() {
  return (
    <div>
      <h1>RootLayout</h1>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="historic">Historic</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}