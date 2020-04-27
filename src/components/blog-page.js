import React from "react"
import { graphql } from "gatsby"
import HerbsLayout from "../layouts/herbs-layout"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import SideBar from "../components/sidebar"
import Img from "gatsby-image"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  link: {
    marginLeft: 555,
  },
  title: {
    fontFamily: [
      "Snell Roundhand",
      "Apple Chancery",
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
    fontSize: 50,
    color: "black",
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    color: "black",
    marginTop: -45,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: "8px",
    marginRight: 8,
    float: "left",
    marginTop: 0,
    // marginLeft: -155,
    textAlign: "center",
  },
  gridList: {
    maxWidth: 1800,
    maxHeight: 450,
  },
  rightPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 640,
    marginTop: 70,
    marginLeft: -80,
    maxWidth: 1100,
    borderRadius: "15px 50px 30px",
    backgroundColor: "#fff59d",
    boxShadow: "3px 5px 5px 1px",
  },
  leftPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 640,
    marginTop: 70,
    maxWidth: 230,
    borderRadius: "15px 50px 30px",
    backgroundColor: "#fdd835",
    boxShadow: "3px 5px 5px 1px",
  },
  bottomText: {
    textAlign: "left",
    marginLeft: "0px",
    marginTop: 10,
  },
  content: {
    textAlign: "left",
  },
}))

const BlogPage = ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.image.childImageSharp.fluid

  const classes = useStyles()

  return (
    <div>
      <HerbsLayout>
        <Grid container spacing={2} className={classes.gridList}>
          <Grid item xs={3}>
            <Paper className={classes.leftPaper}>
              <SideBar />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.rightPaper}>
              <p className={classes.title}>{post.frontmatter.title}</p>
              <p className={classes.name}>{post.frontmatter.name}</p>
              <div>
                <Img fluid={featuredImgFluid} className={classes.image} />
                <p
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  className={classes.content}
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </HerbsLayout>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        name
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
