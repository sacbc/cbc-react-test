import { Link } from "react-router-dom";

export default function Header() {
  return(
    <header>
      <nav>
        <ul>
          <Link to="/">COMMUNITY BIBLE CHURCH</Link>
          <ul>
            <li><Link>WELCOME</Link></li>
            <li><Link>SERVE</Link></li>
            <li><Link>GIVE</Link></li>
            <li><Link>MINISTRIES</Link></li>
          </ul>
        </ul>
      </nav>
    </header>
  )
}