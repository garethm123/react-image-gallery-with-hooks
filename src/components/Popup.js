import React from 'react'

// The structure for the popup
// Pass in the closePopup and popupImageURL props from the parent component

export default function Popup({closePopup, popupImageURL}) {
  return (
    <div className="popupParent">
    <div className="popupImgWrapper">
      <button 
        className="closePopupBTN"
        onClick={closePopup}
      >
        Close [x]
      </button>
      <img 
        src={popupImageURL} 
        className="popupImgLarge" 
        alt="A dog"
      />
    </div>
  </div>
  )
}