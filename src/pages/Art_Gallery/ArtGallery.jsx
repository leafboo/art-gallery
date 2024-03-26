import React from "react"
import ArtworksSlideshow from "./Artworks_Slideshow/ArtworksSlideshow.jsx"
import ArtGalleryCSS from "./ArtGallery.module.css"

export default function ArtGallery(props) {
  React.useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://danbooru.donmai.us/posts.json?tags=ciloranko")
        const data = await response.json()
        props.setArtistsData(data)
    }
    fetchData()
  }, [])
  
  return (
    <div className={ArtGalleryCSS['art-gallery-container']}>
      <ArtworksSlideshow onImageClick={props.onImageClick} 
                         artistsData={props.artistsData} 
                         currentImageIndex={props.currentImageIndex} 
                         setCurrentImageIndex={props.setCurrentImageIndex}/>
    </div>
  )
}