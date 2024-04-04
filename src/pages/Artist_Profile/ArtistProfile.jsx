import React from "react"
import ArtistProfileCSS from "./styles/ArtistProfile.module.css"
import Details from "./Details/Details.jsx"
import Artworks from "./Artworks/Artworks.jsx"
import BackButton from "../Find_Artist/Back_Button/BackButton.jsx"

export default function ArtistProfile(props) {
  React.useEffect(() => {
    async function fetchData() {
        const response = await fetch(`https://danbooru.donmai.us/posts.json?tags=${props.artistSearchData ? props.artistSearchData : 'ciloranko'}`)
        const data = await response.json()
        props.setArtistsData(data)
    }
    fetchData()
  }, [])

  return (
    <div className={ArtistProfileCSS['artist-profile-container']}>
      <div className={ArtistProfileCSS['inner-container']}>
        { props.artistSearchData && <BackButton BackButtonValue={3} onImageClick={props.onImageClick} /> }
        <Details artistsData={props.artistsData}/>
        <Artworks artistsData={props.artistsData} 
                  onImageClick={props.onImageClick} 
                  getImageIndex={props.getImageIndex} />
      </div>
    </div>
  )
}