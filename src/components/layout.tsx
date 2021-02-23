import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { colors, createMuiTheme, ThemeProvider  } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffda52",
    },
  },
  typography: {
    fontFamily: [
      'Balsamiq Sans',
      'Arial'
    ].join(','),
  },
});

const useStyles = makeStyles({
  header: {
    backgroundColor: "#ffda52",
    height: "60px"
  },
  headerContent: {
    maxWidth: "50rem",
    margin: "0 auto",
    lineHeight: "60px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  children: {
    backgroundColor: "#ffeaaa",
    backgroundImage: "repeating-linear-gradient(-45deg,#fff, #fff 7px, transparent 0, transparent 14px)",
    minHeight: "calc(100vh - 100px)",
  },
  childrenContent: {
    maxWidth: "50rem",
    margin: "0 auto",
    padding: "3rem 1rem"
  },
  footer: {
    backgroundColor: "#ffda52",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center"
  }
})

const Layout: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className={classes.header}>
        <div className={classes.headerContent}>
          <Link className="header-link-home" to="/">
            {"PUI PUI MOLCAR"}
          </Link>
        </div>
      </header>
      <main className={classes.children}>
        <div className={classes.childrenContent}>{children}</div>
      </main>
      <footer className={classes.footer}>
        {"2021 "}
        <a href="https://github.com/azusaw">{"azusaw"}</a>
        {" / Built with "}
        <a href="https://www.gatsbyjs.com">{"Gatsby"}</a>
      </footer>
    </ThemeProvider>
  )
}
export default Layout
