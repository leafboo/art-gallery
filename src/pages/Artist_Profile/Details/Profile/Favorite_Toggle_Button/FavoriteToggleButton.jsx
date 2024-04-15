import React from "react"
import FavoriteToggleButtonCSS from "./FavoriteToggleButton.module.css"

export default function FavoriteToggleButton(props) {
  const namesOfAddedArtists = props.favoriteArtists.map((artist) => artist.name)
  console.log(namesOfAddedArtists)
  const isArtistAdded = namesOfAddedArtists.includes(props.name)

  const [messagePrompt, setMessagePrompt] = React.useState('')
  const [imageURL, setImageURL] = React.useState()

  React.useEffect(() => {
    setMessagePrompt(isArtistAdded ? 'Remove from favorites' : 'Add to favorites');
  }, [isArtistAdded])


  function handleChange(event) {
    setImageURL(event.target.value)
  }

  function addToFavorites() {
    const newArtist = {
      name: props.name,
      profile_picture: imageURL
    }
    localStorage.setItem('favoriteArtists', JSON.stringify([...props.favoriteArtists, newArtist]))
    props.setFavoriteArtists([...props.favoriteArtists, newArtist])
    props.onImageClick(1)
  }

  function clickButton() {
    if (!isArtistAdded) {
      setMessagePrompt('Enter')
    } else {
      // remove artist from favorites
    }

    if ( messagePrompt === 'Enter' && imageURL) {
      addToFavorites()
    }
  }

  function renderCancelButtonAndInput() {
    return (
            <>
              <div className={FavoriteToggleButtonCSS['cancel-button']} 
                   onClick={() => { setMessagePrompt('Add to favorites'); setImageURL(undefined) }}>
                Cancel
              </div>
              <input type="text" 
                     placeholder="Enter profile picture URL here" 
                     className={`${FavoriteToggleButtonCSS['input-url']} ${props.mode ? FavoriteToggleButtonCSS['dark'] : FavoriteToggleButtonCSS['light']}`} 
                     onChange={handleChange} /> 
            </>
    )
  }

  return (
    <div className={FavoriteToggleButtonCSS['favorite-toggle-button-container']}>
      <div className={FavoriteToggleButtonCSS['favorite-toggle-button']} onClick={clickButton}>
        {messagePrompt}
      </div>
      { messagePrompt === 'Enter' && renderCancelButtonAndInput()} 
      
    </div>
  )
}