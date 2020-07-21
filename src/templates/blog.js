import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

import Layout from "../components/layout"
import Head from "../components/head"

import { Container, Row, Image, Col } from "react-bootstrap"

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
      <SimpleReactLightbox>
        <Layout>
          <Head title={`${props.data.contentfulBlogPost.title} | Yin's Blog`} />
          <Container
            className={`mt-5 pt-5 pb-5 border ${blogStyles.container}`}
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
              <Col className={blogStyles.content} xs={10}>
                {documentToReactComponents(
                  props.data.contentfulBlogPost.body.json,
                  options
                )}
              </Col>
            </Row>
            <SRLWrapper>
              {props.data.contentfulBlogPost.images.map(image => (
                <Row className="justify-content-center mt-4">
                  <Col xs={10} lg={8}>
                    <Image
                      src={image.fluid.src}
                      width="100%"
                      height="auto"
                      style={{ objectFit: "cover", borderRadius: 10 }}
                    />
                  </Col>
                </Row>
              ))}
            </SRLWrapper>
          </Container>
        </Layout>
      </SimpleReactLightbox>
    </Container>
  )
}
