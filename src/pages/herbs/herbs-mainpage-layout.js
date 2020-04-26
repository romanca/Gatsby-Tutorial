import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import SideBar from "../../components/sidebar"
import HerbsLayout from "../../layouts/herbs-layout"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import HERBAR from "../../images/HERBAR.jpg"

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
  image: {
    width: 300,
    height: 300,
    borderRadius: "8px",
    marginRight: 8,
    float: "left",
    marginTop: 10,
  },

  rightPaper: {
    padding: theme.spacing(2),
    textAlign: "right",
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
  bottomText: {
    textAlign: "left",
    marginLeft: "0px",
    marginTop: 10,
  },
}))

const HerbsMainPageLayout = () => {
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
                <img src={HERBAR} alt="HERBAR" className={classes.image} />
                <div>
                  <Typography className={classes.bottomText}>
                    Slovo herbár má pôvod v latinčine, pôvodné slovo herba
                    znamená rastlinu. V stredoveku sa herbár chápal ako kniha o
                    liečivých rastlinách (hortus sanitatis, materia medica, das
                    Kräuterbuch) a zaoberal sa popisom rastlín a ich liečivými
                    účinkami. Stredoveké herbáre prinášali množstvo informácií o
                    účinkoch bylín a ich príprave, ktoré sa využívali v
                    liečiteľstve, mali vysokú odbornú úroveň a v meštianskych
                    domácnostiach sa používali ako praktické príručky k liečeniu
                    a často aj k vareniu. Najstarším herbárom vo fondoch
                    Slovenskej národnej knižnice je herbár Johannesa von Cubu
                    Hortus sanitatis, ktorý bol vytlačený v roku 1485 u Petra
                    Schöffera v Mohuči. Dielo obsahuje zoznam liečivých rastlín,
                    stromov, hornín, ich popisy, výskyt a ich využitie na
                    liečebné účely. Dodnes najznámejší herbár je Mattioliho
                    herbár zo 16. storočia. Jeho pôvodca, Pietro Andrea
                    Mattioli, bol taliansky lekár a botanik a jeho záujem o
                    botaniku pramenil zo záujmu o lekárske využitie rastlín.
                    Mattioli pôsobil aj v Prahe ako osobný lekár arcikniežaťa
                    Ferdinanda Tyrolského a v roku 1562 vyšlo v preklade Tadeáša
                    Hájka z Hájku české vydanie jeho herbára. Literárne pramene
                    uvádzajú, že najstaršia slovenská herbárová zbierka je
                    zbierka mnícha Cypriána (1724-1775) z Červeného Kláštora v
                    Pieninách z roku 1762. Herbár je zbierka sušených a
                    lisovaných rastlín. Stovky rokov uchovávali vedci a
                    milovníci bylín sušené rastliny v herbároch, aby ich mohli
                    ďalej študovať.Carolus Linnaeus, veľký vedec, ktorý sa
                    zaoberal taxonómiou (teoretická aj praktická klasifikácia
                    živých organizmov do hierarchicky usporiadaných kategórií),
                    mal vo svojom herbári až 14.000 exemplárov!Herbár môže
                    obsahovať celé rastliny vrátane koreňov, semien, listov a
                    kvetov. Vždy sa snažte zbierať vzorky z rôznych miest,
                    napríklad z dvora alebo záhrady, poľa, rieky či jazera, z
                    pláže, močiara a lesa.
                  </Typography>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </HerbsLayout>
    </div>
  )
}

export default HerbsMainPageLayout
