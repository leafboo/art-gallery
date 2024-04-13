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
  const [artistData, setArtistData] = React.useState([])
  const [unaddedArtistName, setUnaddedArtistName] = React.useState(localStorage.getItem('unaddedArtistName') ? localStorage.getItem('unaddedArtistName') : '')
  const [unaddedArtistData, setUnaddedArtistData] = React.useState(localStorage.getItem('unaddedArtistData') ? JSON.parse(localStorage.getItem('unaddedArtistData')) : [])
  const [favoriteArtists, setFavoriteArtists] = React.useState([{
                                                                  name: 'yoneyama_mai',
                                                                  profile_picture: 'https://pbs.twimg.com/profile_images/1155680462464942081/JBCvjutU_400x400.jpg'
                                                                }, {
                                                                  name: 'ciloranko',
                                                                  profile_picture: 'https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg'
                                                                }, {
                                                                  name: 'rella',
                                                                  profile_picture: 'https://pbs.twimg.com/profile_images/1466177220905295878/iwAMQRAw_400x400.jpg'
                                                                }])
  const [selectedArtist, setSelectedArtist] = React.useState(JSON.parse(localStorage.getItem('selectedArtist')) ?? ({ name: 'ciloranko', 
                                                                                                          profile_picture: 'https://pbs.twimg.com/profile_images/1564831789625257984/W4F7yvkP_400x400.jpg' 
                                                                                                        }))
  console.log(selectedArtist)
  console.log(artistData)

  const [mode, setMode] = React.useState(() => {
    const localMode = localStorage.getItem('mode')
    return localMode === null ? true : JSON.parse(localMode)
  })


  React.useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(`https://danbooru.donmai.us/posts.json?tags=${selectedArtist.name}`)
        const data = await response.json()
        setArtistData(data)
      }
      fetchData()
    } catch(err) {
      console.error(err)
    }
    
  }, [selectedArtist.name])

  //switchPages(1)

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
          <ArtGallery setSelectedArtist={setSelectedArtist}
                      selectedArtist={selectedArtist}
                      onImageClick={switchPages} 
                      artistsData={artistData} 
                      currentImageIndex={currentImageIndex}
                      setCurrentImageIndex={setCurrentImageIndex}
                      favoriteArtists={favoriteArtists}
                      mode={mode} />
          ) : switchComponent === 2 ? (
          <ArtistProfile artistsData={artistData} 
                         setArtistsData={setArtistData} 
                         onImageClick={switchPages} 
                         getImageIndex={getImageIndex}
                         pageNumber={switchComponent}
                         selectedArtist={selectedArtist}
                         mode={mode} />
          ) : switchComponent === 3 ? (
          <FindArtist onImageClick={switchPages}
                      mode={mode}  
                      setUnaddedArtistName={setUnaddedArtistName} />
          ) : switchComponent === 4 ? (
            <ArtistProfile unaddedArtistName={unaddedArtistName}
                           setUnaddedArtistData={setUnaddedArtistData} 
                           unaddedArtistData={unaddedArtistData}
                           pageNumber={switchComponent}
                           onImageClick={switchPages}
                           mode={mode} />
          ) : null }
      <DisplayMode mode={mode} setMode={setMode} />
    </div>
  )
}