import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: 155,
    },
  },
  button: {
    boxShadow: "inset 0px 0px 12px 1px",
    backgroundColor: "#fff8e1",
    borderRadius: "8px",
  },
  header: {
    color: "white",
    margin: "auto",
    textShadow: "4px 4px black",
    fontWeight: "bold",
    fontFamily: [
      "Snell Roundhand",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  appBar: {
    backgroundColor: "#004d40",
  },
  link: {
    textDecoration: "none",
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          {" "}
          <div className={classes.root}>
            <Button variant="contained" className={classes.button}>
              <Link className={classes.link} to="/">
                HOME
              </Link>
            </Button>
            <Button variant="contained" className={classes.button}>
              Zelenina
            </Button>
            <Button variant="contained" className={classes.button}>
              Ovocie
            </Button>
            <Button variant="contained" className={classes.button}>
              Byliny
            </Button>
            <Button variant="contained" className={classes.button}>
              Clánky
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
