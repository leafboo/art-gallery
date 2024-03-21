import React from "react"
import ArtworksSlideshowCSS from "./ArtworksSlideshow.module.css"

export default function ArtworksSlideshow() {
  return (
    <div>
      <img src="https://pbs.twimg.com/media/E2xK73tVgAktY1q?format=jpg&name=4096x4096" alt="Artwork." className={ArtworksSlideshowCSS['artwork']} />
    </div>
  )
}