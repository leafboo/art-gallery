import React from "react"
import ArtistsHeaderCSS from "./ArtistsHeader.module.css"
import ArtistBlob from "./Artist_Blob/ArtistBlob.jsx"
import PlusButton from "./Plus_Button/PlusButton.jsx"

export default function ArtistsHeader(props) {
  const artists = props.favoriteArtists.map(({ name, profile_picture }) => 
    <ArtistBlob picture={profile_picture}
                changeArtist={() => { 
                                      props.setSelectedArtist(name)
                                      localStorage.setItem('selectedArtist', name)
                                    }} />
  )

  

  return (
    <div className={ArtistsHeaderCSS['artists-header-container']}>
      <PlusButton onImageClick={props.onImageClick}s />
      { artists }
    </div>
  )
}