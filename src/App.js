import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Photoshop', price:'$20.99/mo', description:'Edit, composite and create beautiful images, graphics, and art on desktop and ipad.'},
    {name:'Acrobat Pro', price:'$14.99/mo', description:'The complete pdf solution for working anywhere(includes desktop, web and mobile access).'},
    {name:'Premiere Pro', price:'$20.99/mo', description:'Professional video and film editing.'},
    {name:'Illustrator', price:'$20.99/mo', description:'Create beautiful vector art and illustration.'},
    {name:'InDesign', price:'$20.99/mo', description:'Page design and layout for print and digital media.'},
    {name:'Premiere Rush', price:'$9.99/mo', description:'Create and share online videos. Fast and easy.'},
    {name:'After Effects', price:'$20.99/mo', description:'Creat motion graphics and visual effects for film, TV, video and web.'},
    {name:'Audition', price:'$20.99/mo', description:'Audio recording, mixing and restoration.'},
    {name:'Animate', price:'$20.99/mo', description:'Design interactive vector animations for multiple platforms.'},
    {name:'Dreamweaver', price:'$20.99/mo', description:'Design and develop modern, responsive websites.'}
  ];
  return (
    <div className="App">
     {
       products.map(pd => <Product product={pd}></Product>)
     }
    </div>
  );
}
function Product(props) {
  const {name, price, description} = props.product;
  const productStyle ={
    width: "270px",
    height: "285px",
    backgroundColor: "#f5f5f5",
    border: "1px solid #e1e1e1",
    borderRadius: "4px",
    margin: "16px",
    padding: "15px",
  }
  return (
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <p>{description}</p>
      <a href="#" style={{color:"blue"}}>Start free trial</a>
      <br/><br/>
      <button style={{border:"none", backgroundColor: "#1473e6", borderColor: "#1473e6", color: "#fff", padding: "8px 20px", borderRadius:"25px"}}>Buy now</button>
    </div>
  )
}
export default App;
