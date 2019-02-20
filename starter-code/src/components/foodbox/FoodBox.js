import React, { Component } from 'react';
import foods from '../../foods.json';
import './FoodBox.css';
import AddFood from '../addFood/AddFood';

class FoodBox extends Component {
  render() {
    const array = this.props.foodArray;
    console.log('$$$$$', array);
    const foodList = array.map((element, idx) => {
      return (
        <div>
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={element.image} width="100"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{element.name}</strong> <br />
                    <small>{element.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      type="number" 
                      value={element.quantity}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      )
    })
    return foodList;
  }
}

export default FoodBox;