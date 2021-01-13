import React, { Component } from 'react';
import Slice from './slice';
import plain from './images/plain.jpg';
import pepperoni from './images/pepperoni.jpg';
import meat from './images/meat.jpg';
import hawaiian from './images/hawaiian.jpg';
import bbq from './images/bbq.jpg';
import veggie from './images/veggie.jpeg';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
       <Slice 
            title = "plain"
            description = "It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
            price = "$1.00" 
            img = {plain}/>
        <Slice 
            title = "Pepperoni"
            description = "A classic slice with cheese, sauce, and guess what else... that's right, pepperoni."
            price = "$1.00" 
            img = {pepperoni}/>
        <Slice 
            title = "Meat Lover's Slice"
            description = "Pepperoni not enough neat for you? Well this slice has pepperoni, meatballs, and sausage."
            price = "$1.00" 
            img = {meat}/>
        <Slice 
            title = "Hawaiian Slice"
            description = "We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
            price = "$1.00" 
            img = {hawaiian}/>
        <Slice 
            title = "BBQ Chicken"
            description = "Perhaps the most polular slice we offer. BBQ Chicken over a delicious dollar pizza. What more could one want in life?"
            price = "$1.00" 
            img = {bbq}/>
        <Slice 
            title = "Veggie Slice"
            description = "You trying to be healthy but you still can't resist pizza? Well then the veggie slice is for you! This guilt-free pizza at its finest."
            price = "$1.00" 
            img = {veggie}/>
      </div>
    </div>
  );
}

export default Menu;
