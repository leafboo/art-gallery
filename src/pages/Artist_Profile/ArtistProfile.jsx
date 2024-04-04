import React from "react"
import ArtistProfileCSS from "./styles/ArtistProfile.module.css"
import Details from "./Details/Details.jsx"
import Artworks from "./Artworks/Artworks.jsx"
import BackButton from "../Find_Artist/Back_Button/BackButton.jsx"

export default function ArtistProfile(props) {
  const { pageNumber } = props
  const artistData = pageNumber === 2 ? props.artistsData : pageNumber === 4 ? props.unaddedArtistData : null

  console.log(props.unaddedArtistName)
  React.useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://danbooru.donmai.us/posts.json?tags=${pageNumber === 4 ? props.unaddedArtistName : 'ciloranko'}`)
        const data = await response.json()
        pageNumber === 4 ? props.setUnaddedArtistData(data) : props.setArtistsData(data)
        if (props.unaddedArtistData) {
          props.setUnaddedArtistData(data)
          localStorage.setItem('unaddedArtistData', JSON.stringify(data))
        } else {
          props.setArtistData(data)
          localStorage.setItem('artistData', JSON.stringify(data))

        }
    }
    fetchData()
  }, [])
  
  return (
    <div className={ArtistProfileCSS['artist-profile-container']}>
      <div className={ArtistProfileCSS['inner-container']}>
        { localStorage.getItem('unaddedArtistData') && <BackButton BackButtonValue={3} onImageClick={props.onImageClick} /> }
        <Details artistsData={artistData}/>
        <Artworks artistsData={artistData} 
                  onImageClick={props.onImageClick} 
                  getImageIndex={props.getImageIndex} />
      </div>
    </div>
  )
}