import React from 'react';
import ShopMen from './../../assets/img/shopMens.jpg';
import ShopWomen from './../../assets/img/shopWomens.jpg';
// import ShopKid from '../../assets/img/shopKids.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <a>
            Shop Womens
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          <a>
            Shop Mens
          </a>
        </div>
        {/* <div
          className="item"
          style={{
            backgroundImage: `url(${ShopKid})`
          }}
        >
          <a>
            Shop Kids
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Directory;
