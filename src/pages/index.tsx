import React from "react"
import { graphql, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { AllContentfulBlogPostQuery } from "../../types/graphql-types"
import Layout from "../components/layout"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

type Props = {
  data: AllContentfulBlogPostQuery
}
const Index: React.FC<Props> = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      {data?.allContentfulBlogPost?.nodes.map((post) => (
        <>
          {post && (
            <Link to={`/post/${post.slug}`}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={post.eyeCatch?.file?.url}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {post.postDate}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          )}
        </>
      ))}
    </Layout>
  )
}
export const query = graphql`
  query allContentfulBlogPost {
    allContentfulBlogPost {
      nodes {
        title
        postDate
        eyeCatch {
          file {
            url
          }
        }
        slug
      }
    }
  }
`
export default Index
