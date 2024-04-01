import React from "react"
import FindArtist from "./pages/Find_Artist/FindArtist.jsx"
import ArtistProfile from "./pages/Artist_Profile/ArtistProfile.jsx"
import DisplayMode from "./pages/Display_Mode/DisplayMode.jsx"
import ArtGallery from "./pages/Art_Gallery/ArtGallery.jsx"


export default function App() {
  // switch between ArtGallery and ArtistProfile
  const [switchComponent, setSwitchComponent] = React.useState(() => {
    const localStorageValue = localStorage.getItem('switchComponent')
    return localStorageValue !== null ? parseInt(localStorageValue) : 1
  })
  // save image index of clicked image to display in art gallery
  const [currentImageIndex, setCurrentImageIndex] = React.useState(parseInt(localStorage.getItem('currentImageIndex')) ?? 3)
  // DATA FOR ARTISTS PROFILE
  const [artistsData, setArtistsData] = React.useState([])
  
  const [mode, setMode] = React.useState(() => {
    const localMode = localStorage.getItem('mode')
    return localMode === null ? true : JSON.parse(localMode)
  })


  function getImageIndex(index) {
    setCurrentImageIndex(index)
    localStorage.setItem('currentImageIndex', index)
  }

  function switchPages(num) {
    setSwitchComponent(num)
    localStorage.setItem('switchComponent', num)
    console.log(num)
  }


  return (
    <div>
      { switchComponent === 1 ? (
          <ArtGallery onImageClick={switchPages} 
                      artistsData={artistsData} 
                      setArtistsData={setArtistsData} 
                      currentImageIndex={currentImageIndex}
                      setCurrentImageIndex={setCurrentImageIndex} />
          ) : switchComponent === 2 ? (
          <ArtistProfile artistsData={artistsData} 
                         setArtistsData={setArtistsData} 
                         onImageClick={switchPages} 
                         getImageIndex={getImageIndex} />
          ) : switchComponent === 3 ? (
            <FindArtist onImageClick={switchPages}/>
          ) : null }
      <DisplayMode mode={mode} setMode={setMode} />
    </div>
  )
}