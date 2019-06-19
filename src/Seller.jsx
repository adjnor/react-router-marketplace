import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemForm from './ItemForm.jsx';

class Seller extends Component {
  render() {
    const { seller, items } = this.props;
    return (
      <div className="card center">
        <div>{seller.name}</div>
        <div>{seller.rating}</div>
        <ul>
          {items.map((item) => (
            <li>
              <Link to={`/details/${item.id}`}>{item.description}</Link>
            </li>
          ))}
        </ul>
        <h1>Add item</h1>
        <ItemForm
          sellerId={seller.id}
          handleAddItem={this.props.handleAddItem}
        />
      </div>
    );
  }
}

export default Seller;
