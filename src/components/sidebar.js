import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import HerbsLayout from "../../layouts/herbs-layout"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"

const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: 65,
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const SideBar = ({ data }) => {
  const classes = useStyles()
  const post = data.markdownRemark

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        {/* <List>
            <ListItem button>
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                    <Link to={node.fields.slug}>
                      <h3>{node.frontmatter.title} </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </ListItem>
          </List>
          <Divider />
          {/* <List>
            <ListItem button>HAHAAAA</ListItem>
          </List> */}{" "}
        */}
      </div>
    </Drawer>
  )
}

export default SideBar

// export const query = graphql`
//   query {
//     allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(herbs)/" } }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `
