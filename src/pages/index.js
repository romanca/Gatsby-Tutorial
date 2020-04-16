import React from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import LOGO1 from "../images/LOGO1.png"
import HERBS1 from "../images/HERBS1.jpg"
import "typeface-roboto"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    display: "flex",
    flexWrap: "wrap",
  },
  gridList: {
    width: 1800,
    height: 450,
  },
  font: {
    color: "#ab47bc",
    margin: "auto",
    textShadow: "2px 5px 7px black",
    fontWeight: "bold",
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
  },
  leftPaperFont: {
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
  },
  image: {
    width: 100,
    height: 100,
    marginTop: "40px",
    border: "1px solid black",
    borderRadius: "15px",
  },
  herbsImage: {
    width: 850,
    height: 450,
    borderRadius: "15px 50px 30px",
    marginTop: "20px",
  },
  rightPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 640,
    borderRadius: "15px 50px 30px",
    backgroundColor: "#fff59d",
    boxShadow: "3px 5px 5px 1px",
  },
  leftPaper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 640,
    borderRadius: "15px 50px 30px",
    backgroundColor: "#fdd835",
    boxShadow: "3px 5px 5px 1px",
  },
  sidebar: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
    textAlign: "left",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
    fontSize: "25px",
    fontFamily: [
      "Brush Script MT",
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
  },
  bottomText: {
    fontSize: "10px",
    fontWeight: "normal",
    marginTop: "20px",
  },
  bottomText1: {
    marginTop: "30px",
    fontSize: "15px",
  },
  divider: {
    width: "850px",
    marginLeft: "9%",
    marginTop: "25px",
    color: "black",
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={2} className={classes.gridList}>
          <Grid item xs={3}>
            <Paper className={classes.leftPaper}>
              <List>
                <ListItem>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.sidebar}
                  >
                    <Link
                      className={classes.link}
                      to="../templates/blog-herbs/"
                    >
                      Herbar
                    </Link>
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.sidebar}
                  >
                    <Link className={classes.link}>Cas zberu byliniek</Link>
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.sidebar}
                  >
                    <Link className={classes.link}>Spracovanie byliniek</Link>
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.sidebar}
                  >
                    <Link className={classes.link}>
                      Liecive ucinky byliniek
                    </Link>
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.sidebar}
                  >
                    <Link className={classes.link}>
                      Bylinkové recepty pre zdravie
                    </Link>
                  </Typography>
                </ListItem>
              </List>
              <Divider />
              <img src={LOGO1} alt="Cinque Terre" className={classes.image} />
              <Typography className={classes.bottomText}>
                <strong> UPOZORNENIE: </strong>Rady a informácie na tejto
                stránke sú len všeobecné, nenahrádzajú rady skutočného lekára.
                Preto použitie liečivých rastlín konzultujte so svojím lekárom.
                Tvorcovia tohoto webu nezodpovedajú za zdravotné problemy alebo
                ujmy na zdraví, ktoré budú výsledkom nesprávneho výkladu obsahu
                tohoto servera bez porady s lekárom.{" "}
                <strong>
                  {" "}
                  Pri neznalosti rastlín, ich zberu a spracovania, nakupujte
                  tieto rastliny v lekárni, obchode alebo na Internete.
                </strong>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <div>
              <Paper className={classes.rightPaper}>
                <Typography variant="h2" className={classes.font}>
                  Liečivá sila prírody
                </Typography>
                <img src={HERBS1} alt="HERBS" className={classes.herbsImage} />
                <Typography className={classes.bottomText1}>
                  {" "}
                  <strong>
                    Na tejto stránke nájdete široký sortiment liečivých
                    byliniek,bylinkových produktov a bylinkových receptov.
                  </strong>
                </Typography>
                <Divider className={classes.divider} />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
