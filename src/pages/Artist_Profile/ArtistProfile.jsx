import React from "react"
import ArtistProfileCSS from "./styles/ArtistProfile.module.css"
import Details from "./Details/Details.jsx"
import Artworks from "./Artworks/Artworks.jsx"
import BackButton from "../Find_Artist/Back_Button/BackButton.jsx"

export default function ArtistProfile(props) {
  const { pageNumber } = props
  const artistData = pageNumber === 2 ? props.artistsData : pageNumber === 4 ? props.unaddedArtistData : null
 
  // localStorage.setItem('unaddedArtistData', []) !!!!! USE THIS WHEN EXPERIENCING BUG !!!!!

  React.useEffect(() => {
    if (pageNumber === 4) {
      try {
        async function fetchData() {
          const response = await fetch(`https://danbooru.donmai.us/posts.json?tags=${props.unaddedArtistName}`)
          const data = await response.json()
  
          props.setUnaddedArtistData(data)
          localStorage.setItem('unaddedArtistData', JSON.stringify(data))
          
        }
        fetchData()
      } catch(err) {
        console.error(err)
      }
    }
  }, [])
  
  return (
    <div className={ArtistProfileCSS['artist-profile-container']}>
      <div className={ArtistProfileCSS['inner-container']}>
        <div className={props.mode ? ArtistProfileCSS['top-blur-light-mode'] : ArtistProfileCSS['top-blur-dark-mode']}>
        </div>
        { props.pageNumber === 4 && <BackButton BackButtonValue={3} onImageClick={props.onImageClick} /> }
        <Details artistData={artistData}
                 selectedArtist={pageNumber !== 4 ? props.selectedArtist : null}
                 mode={props.mode}
                 favoriteArtists={props.favoriteArtists}
                 onImageClick={props.onImageClick}
                 setFavoriteArtists={props.setFavoriteArtists}
                 setSelectedArtist={props.setSelectedArtist} />
        <Artworks artistsData={artistData}
                  onImageClick={pageNumber !== 4 ? props.onImageClick : null} 
                  getImageIndex={props.getImageIndex} />
        <div className={props.mode ? ArtistProfileCSS['bottom-blur-light-mode'] : ArtistProfileCSS['bottom-blur-dark-mode']}>
        </div>
      </div>
    </div>
  )
}