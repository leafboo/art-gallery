import React from "react"
import FindArtistCSS from "./FindArtist.module.css"
import Search from "./Search/Search.jsx"
import BackButton from "./Back_Button/BackButton.jsx"
import ExistingFavArtists from "./Existing_Fav_Artists/ExistingFavArtists.jsx"

export default function FindArtist(props) {
  return (
    <div className={FindArtistCSS['find-artist-container']}>
      <BackButton onImageClick={props.onImageClick} />
      <Search />
      <ExistingFavArtists />
    </div>
    
  )
}