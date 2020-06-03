import React, { Component } from 'react';
import './Tx.css';
import { Link } from 'react-router-dom';

function Tx(){ 
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (

  <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">NATIVELY</Link> 
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
  
          <li>
            <a href="index.html">Shirts</a>
          </li>
  
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <div><h1>232353</h1></div>
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="../../../public/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./men/aa.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./men/aa.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./men/aa.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./men/aa.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="./men/aa.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
  
          </ul>
        </div>
  
      </main>
      <footer className="footer">
        All right reserved.
      </footer>
    </div>
      

            
    )
  }

  export default Tx;










// <script>
// function openMenu() {
//   document.querySelector(".sidebar").classList.add("open");
// }
// function closeMenu() {
//   document.querySelector(".sidebar").classList.remove("open")
// }
// </script>
// </body>

// </html>