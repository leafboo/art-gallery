import React from "react"
import FavoriteToggleButtonCSS from "./FavoriteToggleButton.module.css"

export default function FavoriteToggleButton(props) {
  const [messagePrompt, setMessagePrompt] = React.useState('Add to favorites')
  console.log(messagePrompt)

  return (
    <div className={FavoriteToggleButtonCSS['favorite-toggle-button-container']}>
      <div className={FavoriteToggleButtonCSS['favorite-toggle-button']} onClick={() => {setMessagePrompt('Enter')}}>
        {messagePrompt}
      </div>
      { messagePrompt === 'Enter' && <input type="text" 
                                             placeholder="Enter profile picture URL here" 
                                             className={`${FavoriteToggleButtonCSS['input-url']} ${props.mode ? FavoriteToggleButtonCSS['dark'] : FavoriteToggleButtonCSS['light']}`} /> 
      } 
      
    </div>
  )
}