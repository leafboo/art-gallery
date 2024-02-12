import React from "react"
import Search from "./Search.jsx"
import FindArtistCSS from "./styles/FindArtist.module.css"

export default function FindArtist() {
  return (
    <div className={FindArtistCSS['find-artist-container']}>
      <Search />
    </div>
    
  )
}