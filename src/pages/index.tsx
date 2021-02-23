import React from "react"
import { graphql, Link } from "gatsby"
import { AllContentfulBlogPostQuery } from "../../types/graphql-types"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
  chip: {
    marginTop: "0.5rem",
    marginRight: "0.5rem",
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
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={post.eyeCatch?.file?.url}
                    title="Eye catch img"
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
                    {post.tags?.map((tag, idx) => (
                      <Chip
                        key={idx}
                        className={classes.chip}
                        variant="outlined"
                        size="small"
                        label={tag?.title}
                      />
                    ))}
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
        tags {
          title
        }
      }
    }
  }
`
export default Index
