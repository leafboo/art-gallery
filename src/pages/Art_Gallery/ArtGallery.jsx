import React from "react"
import ArtworksSlideshow from "./Artworks_Slideshow/ArtworksSlideshow.jsx"
import ArtGalleryCSS from "./ArtGallery.module.css"

export default function ArtGallery(props) {
  React.useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(`https://danbooru.donmai.us/posts.json?tags=${props.selectedArtist}`)
        const data = await response.json()
        props.setArtistsData(data)
      }
      fetchData()
    } catch(err) {
      console.error(err)
    }
    
  }, [props.selectedArtist])
  
  return (
    <div className={ArtGalleryCSS['art-gallery-container']}>
      <ArtworksSlideshow setSelectedArtist={props.setSelectedArtist}
                         onImageClick={props.onImageClick} 
                         artistsData={props.artistsData} 
                         currentImageIndex={props.currentImageIndex} 
                         setCurrentImageIndex={props.setCurrentImageIndex}
                         favoriteArtists={props.favoriteArtists} />
    </div>
  )
}