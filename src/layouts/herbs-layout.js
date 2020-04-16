import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      marginTop: 70,
    },
  },
}))

const HerbsLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />
      <div>
        <main className={classes.root}>{children}</main>
      </div>
    </>
  )
}

export default HerbsLayout
