import React from "react"
import MyPhoto from "./assets/yttk.svg"

import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <Container>
      <Layout>
        <Head title="About Yin" />
        <Container className="mb-5 mt-5">
          <Row className="justify-content-center align-items-center">
            <Col className="mb-5" lg={{ order: "last" }}>
              <Container>
                <MyPhoto />
              </Container>
            </Col>
            <Col lg="6" xs="11">
              <h1
                style={{
                  fontWeight: "normal",
                  color: "#454545",
                  fontSize: "50px",
                }}
              >
                I'm
              </h1>
              <h1 style={{ color: "#00CC83", fontSize: "50px" }}>
                Yin Thu Thu Khaing
              </h1>
              <p style={{ fontSize: "14px", color: "#777777" }}>
                - An amateur photographer who takes photos for fun and passion.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </Container>
  )
}
