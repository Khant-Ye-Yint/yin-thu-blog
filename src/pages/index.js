import React from "react"

import Layout from "../components/layout"
import Gallery from "../components/gallery"
import Head from "../components/head"

import { graphql, useStaticQuery } from "gatsby"

import { Container } from "react-bootstrap"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGallery {
        edges {
          node {
            image {
              title
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Layout>
        <Head title="Yin's Gallary" />
        <Container className="mt-1">
          <Gallery edges={data.allContentfulGallery.edges} />
        </Container>
      </Layout>
    </Container>
  )
}
