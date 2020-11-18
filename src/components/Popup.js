import React, {Component} from 'react'


// The structure for the popup. Need to pass in the values for onClick and img src from state in Gallery.js

export default class Popup extends Component {
  render() {
    return (
      <div className="popupParent">
        <div className="popupImgWrapper">
          <button 
            className="closePopupBTN"
            onClick={this.props.closePopup}
          >
            Close [x]
          </button>
          <img 
            src={this.props.popupImageURL} 
            className="popupImgLarge" 
            alt="A dog"
          />
        </div>
      </div>
    )
  }
}