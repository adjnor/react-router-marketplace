import React, { Component } from 'react';

class ItemForm extends Component {
  constructor() {
    super();

    this.state = {
      image: '',
      description: '',
      price: '0',
    };
  }

  // handleFieldChange = (evt, field) => {
  //   this.setState({ [field]: evt.target.value });
  // };
  // This is an alternative to avoid repeating the logic. Not necessary in this simple application
  // Usage example: onChange={(evt) => this.handleFieldChange(evt, 'description')}
  // Caveat: We end up creating a new function every render

  handleDescriptionChange = (evt) => {
    this.setState({ description: evt.target.value });
  };

  handlePriceChange = (evt) => {
    this.setState({ price: evt.target.value });
  };

  handleImageChange = (evt) => {
    this.setState({ image: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const randomId = `${Math.floor(Math.random() * 1000000)}`;
    this.props.handleAddItem({
      ...this.state,
      id: randomId,
      sellerId: this.props.sellerId,
      inventory: 0,
      reviews: [],
    });

    // Reset form on submission
    this.setState({
      image: '',
      description: '',
      price: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Description:
          <input
            onChange={this.handleDescriptionChange}
            value={this.state.description}
          />
        </label>
        <label>
          Price:
          <input onChange={this.handlePriceChange} value={this.state.price} />
        </label>
        <label>
          Image:
          <input onChange={this.handleImageChange} value={this.state.image} />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default ItemForm;
