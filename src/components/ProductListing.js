// src/ProductListing.js

import React from 'react'
import './productlisting.css'

const DownArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.293 6.293a1 1 0 011.414 0L8 8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
  </svg>
)

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li className="chaperone">Chaperone</li>
        <div className="nav-middle">
          <li>Home</li>
          <li className="highlight">Plants & Plots</li>
          <li>
            Tools <DownArrowIcon />
          </li>
          <li>
            Our Services <DownArrowIcon />
          </li>
          <li>Blog</li>
          <li>Our Story</li>
          <li>FAQs</li>
        </div>
        <li className="profile">
          <img src="path/to/profile-image.jpg" />
          My Profile
        </li>
        <li className="cart">
          <img src="path/to/cart-image.jpg" />
          Add to Cart
        </li>
      </ul>
    </nav>
  </header>
)
const ImageGallery = () => {
  const images = [
    {src: 'path/to/image1.jpg', alt: 'Image 1', text: 'Text 1'},
    {src: 'path/to/image2.jpg', alt: 'Image 2', text: 'Text 2'},
    {src: 'path/to/image3.jpg', alt: 'Image 3', text: 'Text 3'},
    {src: 'path/to/image4.jpg', alt: 'Image 4', text: 'Text 4'},
    {src: 'path/to/image5.jpg', alt: 'Image 5', text: 'Text 5'},
    {src: 'path/to/image6.jpg', alt: 'Image 6', text: 'Text 6'},
    {src: 'path/to/image7.jpg', alt: 'Image 7', text: 'Text 7'},
    {src: 'path/to/image4.jpg', alt: 'Image 4', text: 'Text 4'},
    {src: 'path/to/image5.jpg', alt: 'Image 5', text: 'Text 5'},
    {src: 'path/to/image6.jpg', alt: 'Image 6', text: 'Text 6'},
    {src: 'path/to/image7.jpg', alt: 'Image 7', text: 'Text 7'},
  ]

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-card">
          <img src={image.src} alt={image.alt} className="circle-image" />

          <p>{image.text}</p>
        </div>
      ))}
    </div>
  )
}

const Sidebar = () => {
  const categories = [
    'Types of Plants    +',
    'Price  +',
    'Nursery  +',
    'Ideal Plant Location +',
    'Indoor/Outdoor +',
    'Maintenance +',
    'Plant Size +',
    'Water Schedule +',
    'Color +',
    'Seasonal +',
    'Water Efficient +',
  ]

  return (
    <div className="sidebar">
      {categories.map((category, index) => (
        <div key={index} className="sidebar-item">
          {category}
          {index < categories.length - 1 && <hr />}{' '}
          {/* Add line between items except for the last one */}
        </div>
      ))}
    </div>
  )
}

const ProductListing = ({products}) => {
  return (
    <div className="screen">
      <div className="greenhedaer">
        <p className="free">Free shipping on orders above 999</p>
        <p className="caaus">Call us on: 000000000000</p>
      </div>
      <Header />
      <div className="search-container">
        <input type="search" placeholder="Search..." />
        <i className="fas fa-search"></i> {/* Font Awesome search icon */}
      </div>
      <div>
        <button className="plantsbutton">plants</button>
        <button className="plotsbutton">plots</button>
      </div>
      <p className="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <ImageGallery />
      <div className="division">
        <Sidebar />

        <div className="product-listing">
          <div className="sortbutton">
            <h3>300 products</h3>
            <button className="sortbybutton">SortBy</button>
          </div>
          <h1>Product Listing</h1>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />                
                <h2>{product.name}</h2>
                <h3>{product.description}</h3>
                <h4>⭐⭐⭐⭐⭐ {product.rating}</h4>
                <p>${product.price}</p>
                <button>- Add to Cart +</button>
                <button>Buy on Rent</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing
