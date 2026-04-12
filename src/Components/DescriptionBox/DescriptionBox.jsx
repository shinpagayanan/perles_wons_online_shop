import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>

        </div>
        <div className="descriptionbox-description">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo lectus, egestas et tortor non, commodo pretium ligula. Pellentesque condimentum lectus ac cursus tincidunt. Vestibulum porttitor nulla iaculis, gravida nisl vitae, egestas ante.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo lectus, egestas et tortor non, commodo pretium ligula. Pellentesque condimentum lectus ac cursus tincidunt. Vestibulum porttitor nulla iaculis, gravida nisl vitae, egestas ante.
            </p>
        </div>
    </div>
  )
}
export default DescriptionBox
