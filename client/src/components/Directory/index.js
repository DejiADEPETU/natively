import React from 'react';
import ShopMen from './../../assets/img/shopMens.jpg';
import ShopWomen from './../../assets/img/shopWomens.jpg';
// import ShopKid from '../../assets/img/shopKids.jpg';
import './styles.scss';
import { Link } from 'react-router-dom';



// Welcome (Sale Furnel) MODAL comes here   ****  {Refactor Phase 3, if time permits}




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
            <Link to="/tx">Shop Womens</Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
            <Link to="/tx">Shop Mens</Link>
        </div>
        {/* <div
          className="item"
          style={{
            backgroundImage: `url(${ShopKid})`
          }}
        >
                   <Link to="/tx">Shop Kids</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Directory;
