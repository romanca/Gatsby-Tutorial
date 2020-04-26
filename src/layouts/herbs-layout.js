import React from "react"
import Header from "../components/header"

const HerbsLayout = ({ children }) => {
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
