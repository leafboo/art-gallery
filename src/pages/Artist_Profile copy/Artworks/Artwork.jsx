import React from "react"
import ArtworkCSS from "../../Artist_Profile/Artworks/styles/Artwork.module.css"

export default function Artwork(props) {
  return (
    <img className={ArtworkCSS['artwork']} src={props.image} alt="" onClick={() => {
      props.onImageClick(1)
      props.getImageIndex(props.index)
    }} />
  )
}