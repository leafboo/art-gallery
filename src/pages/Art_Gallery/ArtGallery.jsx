import React from "react"
import ArtworksSlideshow from "./Artworks_Slideshow/ArtworksSlideshow.jsx"
import MiniBoxProfile from "./Mini_Box_Profile/MiniBoxProfile.jsx"
import ArtGalleryCSS from "./ArtGallery.module.css"

export default function ArtGallery(props) {
  return (
    <div className={ArtGalleryCSS['art-gallery-container']}>
      <ArtworksSlideshow onImageClick={props.onImageClick}/>
    </div>
  )
}