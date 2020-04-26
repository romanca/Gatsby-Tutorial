import React from "react"
import Header from "../components/header"

const HerbsLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default HerbsLayout
