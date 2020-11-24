// import { render } from '@testing-library/react'
import React, {useState} from 'react'
import Popup from './Popup'

export default function Gallery() {
  const [imageURLArray] = useState([
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
    'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80',
    'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
  ])
  const [showPopup, setPopup] = useState()
  const [popupImageURL, setPopupImgURL] = useState('')


  // When clicking on an image, we'll pass in the URL of the clicked image as props
  // As we've clicked, we'll want the popup to show, so setPopup returns true
  // Then we need to pass the URL of the clicked image to the popup, done with setPopupImgURL
  const handlePopup = (url) => {
    setPopup(true)
    setPopupImgURL(url)
  }


  // Create and map through the image array from array of URLs stored in state.
  const images = imageURLArray.map((url, index) => {
    console.log(url)
    return (
      <img
        className="singleImage"
        src={url}
        key={index}
        onClick={() => handlePopup(url)}
        alt="a dog"
      />
    )
  })



  // First render the array of images with {images} as created above
  // Then a ternary operator to determine when to show popup. 
    return (
      <div className="Images">
      
      {images}

      {showPopup ?
        (
          <Popup 
            popupImageURL={popupImageURL}
            closePopup={() => setPopup(false)}
          />
        )
        :
        null
      }

    </div>
    )
}