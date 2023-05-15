import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

function Footer() {
 
  return (

    <ul className="nav justify-content-end" >
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" 
        href="https://github.com/vvalentinv">
          <GitHubLogoIcon width={20} height={20} />
          <span className="hidden md:block">Github
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page"
        href="https://www.linkedin.com/in/valentin-vlad/">
          <LinkedInLogoIcon width={20} height={20} />
          <span className="hidden md:block">LinkedIn</span>
        </a>
      </li>
    </ul>
  )
}

export default Footer
