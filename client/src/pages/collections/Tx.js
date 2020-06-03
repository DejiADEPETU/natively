import React, { Component } from 'react';
import './Tx.css';
import { Link } from 'react-router-dom';
import data from './Data';
import  ProductDetails from './ProductDetails';

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
        <h3>COLLECTIONS</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>  {/*  <Link to="/">mSuits wSuits gCloths bCloths</Link>       */}
          </li>
  
          <li>
            <a href="index.html">Shirts</a>
          </li>
  
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product => 
                <li>
                <div className="product">
                <Link to={'/product/' + product.id}><img className="product-image" src={product.image} alt="product" /></Link>
                  
                  <div className="product-name">
                    <Link to={'/product/' + product.id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">{product.rating} Stars {product.numReveiws}</div>
                </div>
              </li> )
            }
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



