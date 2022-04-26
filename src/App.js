import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {

  const [cart, setCart] = useState(0);

  const [items, setItems] = useState([]);

  const addItem = (event, item) => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: item.name,
        price: item.price,
        imgsrc: item.imgsrc
      }
    ]);
    setCart(items.length + 1);
  };

  return (
    <div className="App">
      <div className="cartDiv">
        <div className='cartVal'><a href='#'>View Cart: {cart}</a></div>
      </div>
      <div id="columns" className="columns_5">
        <div className='figure'>
          <img src="https://i.imgur.com/ruU04I6.jpg" />
          <div className='caption'>Green Checkered Shirt</div>
          <span className="price">$44</span>
          <button href="#" onClick={(e) => addItem(e, { 'name': e.target.value, 'price': '44', 'imgsrc': 'https://i.imgur.com/ruU04I6.jpg' })} value="Green Checkered Shirt">Buy Now</button>
        </div>

        <div className='figure'>
          <img src="https://i.imgur.com/sPxEkEI.jpg" />
          <div className='caption'>Green and Black Flowers</div>
          <span className="price">$44</span>
          <button href="#" onClick={(e) => addItem(e, { 'name': e.target.value, 'price': '44', 'imgsrc': 'https://i.imgur.com/sPxEkEI.jpg' })} value="Green and Black Flowers">Buy Now</button>
        </div>

        <div className='figure'>
          <img src="https://i.imgur.com/S3Umfmb.jpg" />
          <div className='caption'>Black Dots</div>
          <span className="price">$44</span>
          <button href="#" onClick={(e) => addItem(e, { 'name': e.target.value, 'price': '44', 'imgsrc': 'https://i.imgur.com/S3Umfmb.jpg' })} value="Black Dots">Buy Now</button>
        </div>

        <div className='figure'>
          <img src="https://i.imgur.com/x1IZjjy.jpg" />
          <div className='caption'>Red Flowy</div>
          <span className="price">$44</span>
          <button href="#" onClick={(e) => addItem(e, { 'name': e.target.value, 'price': '44', 'imgsrc': 'https://i.imgur.com/x1IZjjy.jpg' })} value="Red Flowy">Buy Now</button>
        </div>

        <div className='figure'>
          <img src="https://i.imgur.com/Jv8IWKQ.jpg" />
          <div className='caption'>Yellow Button-Up</div>
          <span className="price">$44</span>
          <button href="#" onClick={(e) => addItem(e, { 'name': e.target.value, 'price': '44', 'imgsrc': 'https://i.imgur.com/Jv8IWKQ.jpg' })} value="Yellow Button-Up">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
