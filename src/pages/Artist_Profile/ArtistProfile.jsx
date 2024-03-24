import React from "react"
import ArtistProfileCSS from "./styles/ArtistProfile.module.css"
import Details from "./Details/Details.jsx"
import Artworks from "./Artworks/Artworks.jsx"

export default function ArtistProfile(props) {
  const [artistsData, setArtistsData] = React.useState([])
  React.useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://danbooru.donmai.us/posts.json?tags=ciloranko")
        const data = await response.json()
        setArtistsData(data)
    }
    fetchData()
  }, [])

  return (
    <div className={ArtistProfileCSS['artist-profile-container']}>
      <div className={ArtistProfileCSS['inner-container']}>
        <Details artistsData={artistsData}/>
        <Artworks artistsData={artistsData} onImageClick={props.onImageClick} />
      </div>
    </div>
  )
}