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
    <ul id="navbar" className="nav nav-pills nav-justified">
        <li className="nav-item">
          <a id="header1" className="nav-link" href="#">logo</a>
        </li>
        <li className="nav-item">
          <a id="header2" className="nav-link" href="#">Some feature</a>
        </li>
        <li className="nav-item">
          <a id="header3" className="nav-link active" href="#" hidden>some hidden feature</a>
        </li>
        <li className="nav-item">
          <a id="header4" className="nav-link active" href="#" hidden>some hidden feature</a>
        </li>
        <li className="nav-item">
          <a id="header5" className="nav-link active" href="#" hidden>some hidden feature</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Welcome username</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Change email address</a></li>
            <li><a className="dropdown-item" href="#">Change password</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a id="login-status" className="nav-link" href="#">Logout</a>
        </li>
 
    </ul>
    
  )
}

export default Navbar
