import React from "react"
import { graphql } from "gatsby"
import { ContentfulBlogPostQuery } from "../../types/graphql-types"
import { makeStyles } from "@material-ui/core/styles"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    maxWidth: "40rem",
    margin: "0 auto",
  },
  media: {
    height: 300,
  },
  chip: {
    margin: "0.5rem",
  },
  body: {
    fontFamily: "Balsamiq Sans",
  },
})

type Props = {
  data: ContentfulBlogPostQuery
}
const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const classes = useStyles()

  return (
    <Layout>
      {data && (
        <Card className={classes.card}>
          <CardHeader
            title={
              <Typography gutterBottom variant="h5" component="h2">
                {data.contentfulBlogPost?.title}
              </Typography>
            }
            subheader={
              <>
                {data.contentfulBlogPost?.postDate}
                <div style={{ textAlign: "right" }}>
                  {data.contentfulBlogPost?.tags?.map((tag, idx) => (
                    <Chip
                      key={idx}
                      className={classes.chip}
                      variant="outlined"
                      label={tag?.title}
                    />
                  ))}
                </div>
              </>
            }
          />
          <CardMedia
            className={classes.media}
            image={data.contentfulBlogPost?.eyeCatch?.file?.url}
            title="Eye catch img"
          />
          <CardContent className={classes.body}>
            {renderRichText({
              raw: data.contentfulBlogPost?.body?.raw || "",
              references: [],
            })}
          </CardContent>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={data.contentfulBlogPost?.author?.name}
                  src={data.contentfulBlogPost?.author?.icon?.file?.url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={data.contentfulBlogPost?.author?.name}
                secondary={data.contentfulBlogPost?.author?.description}
              />
            </ListItem>
          </List>
        </Card>
      )}
    </Layout>
  )
}
export const query = graphql`
  query contentfulBlogPost {
    contentfulBlogPost {
      author {
        name
        description
        icon {
          file {
            url
          }
        }
      }
      body {
        raw
      }
      eyeCatch {
        file {
          url
        }
      }
      postDate
      title
      tags {
        title
      }
    }
  }
`
export default BlogPostTemplate
