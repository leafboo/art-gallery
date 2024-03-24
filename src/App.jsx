import React from "react"
import FindArtist from "./pages/Find_Artist/FindArtist.jsx"
import ArtistProfile from "./pages/Artist_Profile/ArtistProfile.jsx"
import DisplayMode from "./pages/DisplayMode.jsx"
import ArtGallery from "./pages/Art_Gallery/ArtGallery.jsx"


export default function App() {
  const [toggleComponent, setToggleComponent] = React.useState(true)

  React.useEffect(() => {
    const storedToggleComponent = localStorage.getItem('toggleComponent')
    if (storedToggleComponent !== null) {
      setToggleComponent(storedToggleComponent === 'true')
    }
  }, [])


  // DATA FOR ARTISTS PROFILE
  const [artistsData, setArtistsData] = React.useState([])

  function switchPages() {
    setToggleComponent(prevToggleComponent => !prevToggleComponent)
    // Store the updated state in localStorage
    localStorage.setItem('toggleComponent', !toggleComponent);
  }
  
  return (
    <div>
      {toggleComponent ? (<ArtGallery onImageClick={switchPages} />) : (<ArtistProfile artistsData={artistsData} setArtistsData={setArtistsData} onImageClick={switchPages} />)}
      
      {/*<ArtistProfile />*/}
      {/*<FindArtist/ >*/}
      <DisplayMode />
    </div>
  )
}