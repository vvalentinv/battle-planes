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
        
        <li id="battles" className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Battles</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#UnchallengedBattles">Players waiting to be challenged</a></li>
            <li><a className="dropdown-item" href="#">Setup a defense</a></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <a id="header3" className="nav-link active" href="#" hidden>some hidden feature</a>
        </li>
        <li className="nav-item">
          <a id="header4" className="nav-link active" href="#" hidden>some hidden feature</a>
        </li>
        <li id="logo" className="nav-item logo">
        <img rel="icon"  src="/public/logo-flat.png" width="142" height="30"/>
        </li>
        <li className="nav-item">
          <a id="header5" className="nav-link active" href="#" hidden>some hidden feature</a>
        </li>
        <li id="welcome" className="nav-item dropdown">
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
