import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

import { Container, Row, Image } from "react-bootstrap"

import blogStyles from "./blog.module.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
      images {
        fluid(maxWidth: 500) {
          src
        }
      }
    }
  }
`

export default function Blog(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Container>
      <Layout>
        <Head title={`${props.data.contentfulBlogPost.title} | Yin's Blog`} />
        <Container
          className="mt-5 pt-5 pb-5 border"
          style={{
            width: "70%",
            boxShadow: "1px 1px 5px 1px #ffe4fa",
          }}
        >
          <Row className="justify-content-center">
            <span className={blogStyles.title} style={{ color: "#28cf90" }}>
              {props.data.contentfulBlogPost.title}
            </span>
          </Row>
          <Row className="justify-content-center">
            <p className={blogStyles.date}>
              <cite>-{props.data.contentfulBlogPost.publishedDate}-</cite>
            </p>
          </Row>
          <Row className="justify-content-center mt-4">
            <span className={blogStyles.content}>
              {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
              )}
            </span>
          </Row>
          {props.data.contentfulBlogPost.images.map(image => (
            <Row className="justify-content-center mt-4">
              <Image
                src={image.fluid.src}
                style={{ width: "70%", height: "auto" }}
              />
            </Row>
          ))}
        </Container>
      </Layout>
    </Container>
  )
}
