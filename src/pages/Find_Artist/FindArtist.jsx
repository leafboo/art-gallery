import React from "react"
import FindArtistCSS from "./styles/FindArtist.module.css"
import Search from "./Search.jsx"
import BackButton from "./BackButton.jsx"
import ExistingFavArtists from "./ExistingFavArtists.jsx"

export default function FindArtist(props) {
  return (
    <div className={FindArtistCSS['find-artist-container']}>
      <BackButton onImageClick={props.onImageClick} />
      <Search />
      <ExistingFavArtists />
    </div>
    
  )
}