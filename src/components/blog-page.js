import React from "react"
import { graphql } from "gatsby"
import HerbsLayout from "../layouts/herbs-layout"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import SideBar from "../components/sidebar"
import Img from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  link: {
    marginLeft: 555,
  },
  gridList: {
    width: 1800,
    height: 450,
  },
  rightPaper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    height: 640,
    marginTop: 70,
    marginLeft: -170,
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
}))

const BlogPage = ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

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
            <div>
              <Paper className={classes.rightPaper}>
                <div className={classes.link}>
                  <h1>{post.frontmatter.title}</h1>
                  <h2 dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Img fluid={featuredImgFluid} />
      </HerbsLayout>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        featuredImage {
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
