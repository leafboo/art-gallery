import React from "react"
import ArtworkCSS from "./styles/Artwork.module.css"

export default function Artwork(props) {
  return (
    <img className={ArtworkCSS['artwork']} src={props.image} alt="" onClick={props.onImageClick} />
  )
}