import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

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
              HOME
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/* <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header> */
