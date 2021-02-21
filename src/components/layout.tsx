import React from "react"
import { Link } from "gatsby"

const Layout: React.FC = ({ children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <Link className="header-link-home" to="/">
          {"wawaw"}
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
