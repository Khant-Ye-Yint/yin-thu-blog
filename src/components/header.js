import React from "react"

import { Link } from "gatsby"

import { Container, Nav, Row } from "react-bootstrap"

import headerStyles from "./header.module.css"

export default function Header() {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Link to="/" className={headerStyles.title}>
          {" "}
          Yin Thu Thu Khaing{" "}
        </Link>
      </Row>
      <Nav className="justify-content-center mt-4">
        <Nav.Item>
          <Nav.Link>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Gallary
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              to="/creation"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Creation
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  )
}
