import React from "react"
import Artwork from "./Artwork.jsx"
import ArtworksCSS from "./styles/Artworks.module.css"

export default function Artworks(props) {
  const artworks = props.artistsData.map(data => data.media_asset.variants[4].url)
  const ArtistsElement = artworks.map( artwork => <Artwork image={artwork} onImageClick={props.onImageClick} /> )

  
  return (
    <div className={ArtworksCSS['artworks-container']}>
      {ArtistsElement}
    </div>
  )
}