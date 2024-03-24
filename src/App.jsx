import React from "react"
import FindArtist from "./pages/Find_Artist/FindArtist.jsx"
import ArtistProfile from "./pages/Artist_Profile/ArtistProfile.jsx"
import DisplayMode from "./pages/DisplayMode.jsx"
import ArtGallery from "./pages/Art_Gallery/ArtGallery.jsx"


export default function App() {
  const [toggleComponent, setToggleComponent] = React.useState(true)

  // save image index of clicked image in artists profile to display the image in art gallery
  const [currentImageIndex, setCurrentImageIndex] = React.useState(3)

  function getImageIndex(index) {
    setCurrentImageIndex(index)
  }


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
      {toggleComponent ? (<ArtGallery onImageClick={switchPages} artistsData={artistsData} setArtistsData={setArtistsData} imageIndex={currentImageIndex} />) : (<ArtistProfile artistsData={artistsData} setArtistsData={setArtistsData} onImageClick={switchPages} getImageIndex={getImageIndex} />)}
      
      {/*<ArtistProfile />*/}
      {/*<FindArtist/ >*/}
      <DisplayMode />
    </div>
  )
}