import React from "react"

import { Container } from "react-bootstrap"

export default function Footer() {
  return (
    <Container
      className="mt-5 mb-4"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "14px", color: "#4aa639" }}>
        Khant Ye Yint © 2020
      </span>
    </Container>
  )
}
