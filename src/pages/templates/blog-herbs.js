import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import HerbsLayout from "../../layouts/herbs-layout"
import { Drawer } from "@material-ui/core"

const BlogHerbs = ({ data }) => {
  console.log(data)
  return (
    <HerbsLayout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title} </h3>
            </Link>
          </div>
        ))}
      </div>
    </HerbsLayout>
  )
}

export default BlogHerbs

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(herbs)/" } }) {
      edges {
        node {
          id
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
