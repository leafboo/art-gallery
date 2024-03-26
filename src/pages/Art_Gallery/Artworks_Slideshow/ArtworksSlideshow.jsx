import React from "react"
import ArtworksSlideshowCSS from "./ArtworksSlideshow.module.css"
import MiniBoxProfile from "../Mini_Box_Profile/MiniBoxProfile"
import ArtistsHeader from "../ArtistsHeader/ArtistsHeader"
import ImageNavigator from "./Image_Navigator/ImageNavigator"

export default function ArtworksSlideshow(props) {
  const artworks = props.artistsData.map(data => data.media_asset.variants[4].url)
  const displayImage = artworks[props.imageIndex]
  
  

  return (
    <div className={ArtworksSlideshowCSS['artworks-slideshow-container']}>
      <ImageNavigator />
      <ArtistsHeader onImageClick={props.onImageClick} />
      <img src={displayImage} alt="Artwork." className={ArtworksSlideshowCSS['artwork']} />
      <MiniBoxProfile onImageClick={props.onImageClick} />
    </div>
  )
}