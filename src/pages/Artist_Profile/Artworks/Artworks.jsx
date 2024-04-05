import React from "react"
import Artwork from "./Artwork.jsx"
import ArtworksCSS from "./styles/Artworks.module.css"

export default function Artworks(props) {
  const artworks = props.artistsData.map(data => data.file_url)
  const ArtworksElement = artworks.map( (artwork, index) => 
    <Artwork image={artwork} 
             onImageClick={props.onImageClick} 
             getImageIndex={props.getImageIndex} 
             index={index} /> 
  )
  

  return (
    <div className={ArtworksCSS['artworks-container']}>
      {ArtworksElement}
    </div>
  )
}