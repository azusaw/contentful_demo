import React, { useState } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import {
  Button,
  createMuiTheme,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffda52",
    },
  },
  typography: {
    fontFamily: ["Balsamiq Sans", "Arial"].join(","),
  },
})

const useStyles = makeStyles({
  header: {
    backgroundColor: "#ffda52",
    height: "60px",
  },
  headerContent: {
    maxWidth: "50rem",
    margin: "0 auto",
    padding: "0 1rem",
    lineHeight: "60px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  children: {
    backgroundColor: "#ffeaaa",
    backgroundImage:
      "repeating-linear-gradient(-45deg,#fff, #fff 7px, transparent 0, transparent 14px)",
    minHeight: "calc(100vh - 100px)",
  },
  childrenContent: {
    maxWidth: "50rem",
    margin: "0 auto",
    padding: "3rem 1rem",
  },
  footer: {
    backgroundColor: "#ffda52",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
  },
})

const Layout: React.FC = ({ children }) => {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className={classes.header}>
        <div className={classes.headerContent}>
          <Link to="/">{"PUI PUI MOLCAR"}</Link>
          <div style={{ float: "right" }}>
            <Button onClick={() => setShowModal(true)}>
              {"What is MOLCAR?"}
            </Button>
          </div>
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
      <Dialog onClose={() => setShowModal(false)} open={showModal}>
        <DialogTitle>{"What's MORCAR?"}</DialogTitle>
        <DialogContent>
          {
            "It is a stop motion animation broadcast in Japan since 2021/1 created by Misato Tomoki."
          }
          <br />
          {
            "MORUCAR is so cute and heal our tiring mind, it become very popular."
          }
          <div style={{ textAlign: "right", margin: "2rem 0" }}>
            <Button
              variant="contained"
              color="primary"
              href="https://molcar-anime.com/"
              target="_blank"
              rel="noopener"
            >
              {"OFFICIAL SITE"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}
export default Layout
