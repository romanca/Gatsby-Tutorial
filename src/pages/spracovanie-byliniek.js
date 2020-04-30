import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import LOGO1 from "../images/LOGO1.png"
import Layout from "../components/layout"

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
    color: "black",
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
  contentTitle: {
    textAlign: "left",
    fontSize: 60,
    color: "black",
    fontFamily: [
      // "Brush Script MT",
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
  content: {
    textAlign: "left",
    color: "black",
    fontSize: 20,
    fontFamily: [
      // "Brush Script MT",
      // "Snell Roundhand",
      // "Apple Chancery",
      // "-apple-system",
      // "BlinkMacSystemFont",
      // '"Segoe UI"',
      // "Roboto",
      // '"Helvetica Neue"',
      // "Arial",
      // "sans-serif",
      // '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}))

const CasZberuByliniek = () => {
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
                      to="../herbs/herbs-mainpage-layout"
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
                    <Link className={classes.link}> Cas zberu byliniek</Link>
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
                    <Link className={classes.link} to="./spracovanie-byliniek">
                      Spracovanie byliniek
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
                <Typography className={classes.contentTitle}>Zber</Typography>{" "}
                <Typography className={classes.content}>
                  Nadzemné časti rastlín zbierame zvyčajne pri slnečnom a suchom
                  počasí, keď nie je na nich vlhkosť alebo rosa. Najlepšie
                  predpoludním, kým nie je ešte moc teplo. Listy zbierame ešte
                  pred začiatkom kvitnutia rastliny. Zbierame len dobre vyvinuté
                  listy, nezakrpatené, zdravé, nepoškodené, nezožltnuté, bez
                  škvŕn, čisté a nezaprášené. Kvety zbierame potom, ako sa
                  rozvijú. Podľa potreby celé, alebo len lupienky. Nemali by byť
                  zvädnuté, zoschnuté, poškodené hmyzom alebo inak porušené,
                  lebo tým sa stávajú bezcennými. Sú dosť chúlostivé, preto
                  musíme s nimi pozorne zaobchádzať. Vňať zbierame vtedy, keď
                  rastlina kvitne, alebo kvitnúť ešte len začína. Z rastlín s
                  vyššou byľou zbierame len kvetné vŕšky (tak asi 15—30 cm od
                  vrchu). Plody zbierame zrelé, alebo prípadne tesne pred
                  dozretím, ak ide o plody, ktoré sa pri dozretí ľahko uvoľňujú,
                  rozletujú, vypadávajú a pod. Choré, zaschnuté, zhnité, staré,
                  nezrelé a ostatné chybné kusy odstránime.{" "}
                  <Typography className={classes.contentTitle}>
                    Sušenie
                  </Typography>{" "}
                  Sušenie je najjednoduchší a najrozšírenejší spôsob
                  konzervácie. Sušíme prirodzeným alebo umelým teplom. Doba
                  sušenia sa mení v závislosti od danej rastliny a jej sušených
                  častí. Nazbierané rastliny pred sušením dôkladne preberieme a
                  prezrieme. Bylinky sú vtedy suché, keď sa stanú lámavými a pri
                  dotyku praskajú. Bobule a korene nesmú byť ani vnútri mäkké.
                  Dĺžka sušenia závisí od vzduchu, teploty a povahy sušeného
                  materiálu. Teplota má byť spravidla 30—40 °C, pri koreňoch a
                  kôre aj vyššia. Rastliny, ktorých obsahové látky sa ľahko
                  rozkladajú, sušíme pri teplote 40—60 °C. Silicové rastliny
                  sušíme pri teplote do 35 °C. Na korene sa odporúča 15 – 20 dní
                  sušenia, na listy 8 – 10 dní, 3 – 4 dni na kvety.
                </Typography>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}
export default CasZberuByliniek
