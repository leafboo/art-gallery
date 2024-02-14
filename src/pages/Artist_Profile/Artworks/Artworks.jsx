import React from "react"
import Artwork from "./Artwork.jsx"
import ArtworksCSS from "./styles/Artworks.module.css"

export default function Artworks() {
  return (
    <div className={ArtworksCSS['artworks-container']}>
      <Artwork image="https://pbs.twimg.com/media/E_rpq2gUUAMrYLj?format=jpg&name=large" />
      <Artwork image="https://pbs.twimg.com/media/E9wtmhXVUAA9P7Z?format=jpg&name=4096x4096" />
      <Artwork image="https://pbs.twimg.com/media/FO6O3j8acAALooF?format=jpg&name=4096x4096" />
      <Artwork image="https://pbs.twimg.com/media/EsXJc23U0AE1dAh?format=jpg&name=large" />
      <Artwork image="https://pbs.twimg.com/media/FOeloIJakAAmfLe?format=jpg&name=large" />
    </div>
  )
}