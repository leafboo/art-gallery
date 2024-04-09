import React from "react"
import ArtworksSlideshow from "./Artworks_Slideshow/ArtworksSlideshow.jsx"
import ArtGalleryCSS from "./ArtGallery.module.css"

export default function ArtGallery(props) {
  return (
    <div className={ArtGalleryCSS['art-gallery-container']}>
      <ArtworksSlideshow selectedArtist={props.selectedArtist}
                         setSelectedArtist={props.setSelectedArtist}
                         onImageClick={props.onImageClick} 
                         artistsData={props.artistsData} 
                         currentImageIndex={props.currentImageIndex} 
                         setCurrentImageIndex={props.setCurrentImageIndex}
                         favoriteArtists={props.favoriteArtists} />
    </div>
  )
}