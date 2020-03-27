import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Header />
    <p>Such wow. Very React.</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)
