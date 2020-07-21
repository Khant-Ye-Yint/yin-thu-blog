import React from "react"

import { SRLWrapper } from "simple-react-lightbox"

import { Container, Image } from "react-bootstrap"

import styles from "./gallery.module.css"

export default function Gallery({ edges }) {
  return (
    <SRLWrapper>
      <Container className={styles.gallery}>
        {edges.map(edge => (
          <div className={styles.imgCon}>
            <Image
              className={styles.img}
              src={edge.node.image.fluid.src}
              alt={edge.node.image.title}
              rounded
            />
          </div>
        ))}
      </Container>
    </SRLWrapper>
  )
}
