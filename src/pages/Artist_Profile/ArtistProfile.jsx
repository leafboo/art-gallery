import React from "react"
import ArtistProfileCSS from "./styles/ArtistProfile.module.css"
import Details from "./Details/Details.jsx"
import Artworks from "./Artworks/Artworks.jsx"
import BackButton from "../Find_Artist/Back_Button/BackButton.jsx"

export default function ArtistProfile(props) {
  const { pageNumber } = props
  const artistData = pageNumber === 2 ? props.artistsData : pageNumber === 4 ? props.unaddedArtistData : null
  console.log(artistData)
  // localStorage.setItem('unaddedArtistData', []) !!!!! USE THIS WHEN EXPERIENCING BUG !!!!!

  React.useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(`https://danbooru.donmai.us/posts.json?tags=${pageNumber === 4 ? props.unaddedArtistName : props.selectedArtist}`)
        const data = await response.json()
        pageNumber === 4 ? props.setUnaddedArtistData(data) : props.setArtistsData(data)

        if (pageNumber === 4) {
          props.setUnaddedArtistData(data)
          localStorage.setItem('unaddedArtistData', JSON.stringify(data))
        } else {
          props.setArtistsData(data)
          localStorage.setItem('artistData', JSON.stringify(data))

        }
      }
      fetchData()
    } catch(err) {
      console.error(err)
    }
    

  }, [])
  
  return (
    <div className={ArtistProfileCSS['artist-profile-container']}>
      <div className={ArtistProfileCSS['inner-container']}>
        { props.pageNumber === 4 && <BackButton BackButtonValue={3} onImageClick={props.onImageClick} /> }
        <Details artistsData={artistData}/>
        <Artworks artistsData={artistData} 
                  onImageClick={props.onImageClick} 
                  getImageIndex={props.getImageIndex} />
      </div>
    </div>
  )
}