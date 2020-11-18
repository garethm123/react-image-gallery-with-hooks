import React, {Component} from 'react'
import Popup from './Popup'



// Start by storing your images in state as an array. You can change the URLs or call one from your files, e.g. ../images/anImage.jpg
// Need to set showPopup to false, otherwise it will show the large image, we don't want that until setPopup is called.
// popupImageURL needs to be an empty string as it depends on which image is clicked. It's then set in setPopup.


export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      imageURLArray: [
        'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80',
        'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80',
        'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
      ],
      showPopup: false,
      popupImageURL: ''
    }
  }

  setPopup = (url) => {
    this.setState({
      showPopup: !this.state.showPopup,
      popupImageURL: url
    })
  }



render() {

  // Create and map through the image array from array of URLs stored in state.

  let imageURLArray = this.state.imageURLArray;
  const images = imageURLArray.map((url, index) => {
    return (
      <img
        className="singleImage"
        src={url}
        key={index}
        onClick={ () => this.setPopup(url) }
        alt="a dog"
      />
    )
  })

  // First render the array of images with {images}
  // Then a ternary operator to determine when to show popup. 
  return(
    <div className="Images">
      
      {images}

      {this.state.showPopup ?
        (
          <Popup 
            popupImageURL={this.state.popupImageURL}
            closePopup={this.setPopup}
          />
        )
        :
        null
      }

    </div>

  )
}
}

