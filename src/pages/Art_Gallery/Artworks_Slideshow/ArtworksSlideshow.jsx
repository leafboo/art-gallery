import React from "react"
import ArtworksSlideshowCSS from "./ArtworksSlideshow.module.css"
import MiniBoxProfile from "./Mini_Box_Profile/MiniBoxProfile"
import ArtistsHeader from "./ArtistsHeader/ArtistsHeader"
import ImageNavigator from "./Image_Navigator/ImageNavigator"

export default function ArtworksSlideshow(props) {
  const artworks = props.artistsData.map(data => data.file_url)
  const displayImage = artworks[props.currentImageIndex]
  
  
  function changeImageIndex(num) {
    const newIndex = num === 1
        ? props.currentImageIndex + 1
        : num === 2
        ? props.currentImageIndex - 1
        : props.currentImageIndex;
  
    if (artworks[newIndex]) {
      props.setCurrentImageIndex(newIndex);
      localStorage.setItem('currentImageIndex', newIndex);
    }
  }
   

  return (
    <div className={ArtworksSlideshowCSS['artworks-slideshow-container']}>
      <ImageNavigator changeImageIndex={changeImageIndex}
                      mode={props.mode} />
      <ArtistsHeader selectedArtist={props.selectedArtist}
                     onImageClick={props.onImageClick} 
                     favoriteArtists={props.favoriteArtists}
                     setSelectedArtist={props.setSelectedArtist} />
      <img src={displayImage} alt="Artwork." className={ArtworksSlideshowCSS['artwork']} />
      <MiniBoxProfile onImageClick={props.onImageClick}
                      selectedArtist={props.selectedArtist} />
    </div>
  )
}