import React from "react"

import Header from "./header"
import Footer from "./footer"

import SimpleReactLightbox from "simple-react-lightbox"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

export default function Layout(props) {
  return (
    <Container style={{ fontFamily: "Montserrat" }}>
      <Header />
      <SimpleReactLightbox>{props.children}</SimpleReactLightbox>
      <Footer />
    </Container>
  )
}
