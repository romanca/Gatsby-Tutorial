import React from "react"
import { graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"
import HerbsLayout from "../../layouts/herbs-layout"

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
  fontType: {
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
  link: {
    textDecoration: "none",
  },
}))

const BlogPage = ({ data }) => {
  const post = data.markdownRemark
  const classes = useStyles()

  return (
    <HerbsLayout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </HerbsLayout>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
