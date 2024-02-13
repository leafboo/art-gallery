import React from "react"
import FindArtistCSS from "./styles/FindArtist.module.css"
import Search from "./Search.jsx"
import ExistingFavArtists from "./ExistingFavArtists.jsx"

export default function FindArtist() {
  return (
    <div className={FindArtistCSS['find-artist-container']}>
      <Search />
      <ExistingFavArtists />
    </div>
    
  )
}