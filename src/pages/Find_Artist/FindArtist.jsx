import React from "react"
import FindArtistCSS from "./FindArtist.module.css"
import Search from "./Search/Search.jsx"
import BackButton from "./Back_Button/BackButton.jsx"
import ExistingFavArtists from "./Existing_Fav_Artists/ExistingFavArtists.jsx"

export default function FindArtist(props) {
  const [foundArtist, setFoundArtist] = React.useState(null)

  if (foundArtist) {
    const results = foundArtist.map((artist) => ({name: artist.name, other_names: artist.other_names}))
    
  }
 

  return (
    <div className={FindArtistCSS['find-artist-container']}>
      <BackButton onImageClick={props.onImageClick} />
      <Search foundArtist={foundArtist} setFoundArtist={setFoundArtist} />
      <ExistingFavArtists foundArtist={foundArtist} />
    </div>
    
  )
}