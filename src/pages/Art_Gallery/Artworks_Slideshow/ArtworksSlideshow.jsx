import React from "react"
import ArtworksSlideshowCSS from "./ArtworksSlideshow.module.css"
import MiniBoxProfile from "../Mini_Box_Profile/MiniBoxProfile"
import ArtistsHeader from "../ArtistsHeader/ArtistsHeader"

export default function ArtworksSlideshow(props) {
  return (
    <div className={ArtworksSlideshowCSS['artworks-slideshow-container']}>
      <ArtistsHeader />
      <img src="https://pbs.twimg.com/media/E2xK73tVgAktY1q?format=jpg&name=4096x4096" alt="Artwork." className={ArtworksSlideshowCSS['artwork']} />
      <MiniBoxProfile onImageClick={props.onImageClick} />
    </div>
  )
}