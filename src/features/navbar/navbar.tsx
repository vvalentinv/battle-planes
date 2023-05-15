import { useEffect, useState } from 'react'

function Navbar() {
  const [yOffset, setYOffset] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    const currentYOffset = window.pageYOffset
    const visible = yOffset > currentYOffset

    setYOffset(currentYOffset)
    setVisible(visible)
  }

  return (
    <nav id="nav" className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a id="header1" className="navbar-brand" href="index.html">logo</a>
        <a id="header2" className="navbar-brand" href="#">some menu item</a>
        <a id="header3" className="navbar-brand" href="#" hidden>some hidden menu item</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <span id="welcome" className="navbar-brand"></span>
            <a id="login-status" className="navbar-brand" href="#">Logout</a>
          </div>
        </nav>  
      </div>
    </nav>
  )
}

export default Navbar
