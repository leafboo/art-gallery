import React from "react"
import Artwork from "./Artwork.jsx"
import ArtworksCSS from "./styles/Artworks.module.css"

export default function Artworks() {
  const [artistsData, setArtistsData] = React.useState([])
  React.useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://danbooru.donmai.us/posts.json?tags=ciloranko")
        const data = await response.json()
        setArtistsData(data)
    }
    fetchData()
  }, [])

  
  const artworks = artistsData.map(data => data.media_asset.variants[4].url)
  console.log(artworks)
  const ArtistsElement = artworks.map( artwork => <Artwork image={artwork}/> )

  
  return (
    <div className={ArtworksCSS['artworks-container']}>
      {ArtistsElement}
    </div>
  )
}