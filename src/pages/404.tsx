import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import { Card, CardContent, Typography } from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    margin: "0.5rem 0",
    maxWidth: "45rem",
  },
})

const NotFound: React.FC = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {"404 Page Not Found"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Sorry, we couldn't find the page."}
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}
export default NotFound
