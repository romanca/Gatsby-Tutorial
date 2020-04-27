import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
    color: "black",
  },
}))

const SideBar = ({ data }) => {
  const classes = useStyles()

  return (
    <div>
      <div>
        <List>
          <ListItem>
            <StaticQuery
              query={query}
              render={data => (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node, slug }) => (
                    <div key={node.id}>
                      <Link className={classes.link} to={node.fields.slug}>
                        <h3>{node.frontmatter.title} </h3>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            />
          </ListItem>
        </List>
      </div>
    </div>
  )
}

export default SideBar

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: ["herbs"] } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
