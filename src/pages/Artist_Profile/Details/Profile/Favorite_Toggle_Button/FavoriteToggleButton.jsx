import React from "react"
import FavoriteToggleButtonCSS from "./FavoriteToggleButton.module.css"

export default function FavoriteToggleButton(props) {
  const namesOfAddedArtists = props.favoriteArtists.map((artist) => artist.name)
  console.log(namesOfAddedArtists)
  const isArtistAdded = namesOfAddedArtists.includes(props.name)

  const [messagePrompt, setMessagePrompt] = React.useState('')

  React.useEffect(() => {
    setMessagePrompt(isArtistAdded ? 'Remove from favorites' : 'Add to favorites');
  }, [isArtistAdded])
  
  return (
    <div className={FavoriteToggleButtonCSS['favorite-toggle-button-container']}>
      <div className={FavoriteToggleButtonCSS['favorite-toggle-button']} onClick={() => {
        if (!isArtistAdded) {
          setMessagePrompt('Enter')
        } else {
          // remove artist from favorites
        }
        
      }}>
        {messagePrompt}
      </div>
      { messagePrompt === 'Enter' && (<>
                                        <div className={FavoriteToggleButtonCSS['cancel-button']} onClick={() => {setMessagePrompt('Add to favorites')}}>
                                          Cancel
                                        </div>
                                        <input type="text" placeholder="Enter profile picture URL here" className={`${FavoriteToggleButtonCSS['input-url']} ${props.mode ? FavoriteToggleButtonCSS['dark'] : FavoriteToggleButtonCSS['light']}`} /> 
                                      </>
      )} 
      
    </div>
  )
}