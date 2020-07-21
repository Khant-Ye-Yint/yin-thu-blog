import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.css"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            images {
              title
              fluid {
                src
                sizes
              }
            }
          }
        }
      }
    }
  `)

  const post = (title, date, slug, imageUrl) => (
    <Row className="justify-content-center mb-3">
      <Col md="6">
        <Link to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
          <Card className={blogStyles.blogCard}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <h5>{title}</h5>
              </blockquote>
              <footer className="blockquote-footer">
                <cite>{date}</cite>
              </footer>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  )

  return (
    <Container>
      <Layout>
        <Head title="Yin's Blog" />
        <Container className="mt-5">
          {data.allContentfulBlogPost.edges.map(value =>
            post(
              value.node.title,
              value.node.publishedDate,
              value.node.slug,
              value.node.images[0].fluid.src
            )
          )}
        </Container>
      </Layout>
    </Container>
  )
}
