import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Seller from './Seller.jsx';
import Item from './Item.jsx';
import ItemDetails from './ItemDetails.jsx';
import Reviewer from './Reviewer.jsx';
import { initialItems, initialSellers, initialReviewers } from './data.js';

const renderHome = (items) => {
  return (
    <div>
      <ul>
        {initialSellers.map((seller) => (
          <li>
            <Link to={`/seller/${seller.id}`}>{seller.name}</Link>
          </li>
        ))}
      </ul>
      {items.map((item) => (
        <Item
          cost={item.price}
          sellerId={item.sellerId}
          imageLocation={item.image}
          description={item.description}
          id={item.id}
        />
      ))}
    </div>
  );
};

const renderSeller = (routerData, items, handleAddItem) => {
  const sellerId = routerData.match.params.sid;
  const seller = initialSellers.find((seller) => {
    return seller.id === sellerId;
  });
  const sellerItems = items.filter((item) => item.sellerId === seller.id);
  return (
    <Seller seller={seller} items={sellerItems} handleAddItem={handleAddItem} />
  );
};

const renderItemDetails = (routerData, items) => {
  const itemId = routerData.match.params.itemId;
  const item = items.find((item) => item.id === itemId);
  return <ItemDetails item={item} />;
};

const renderReviewer = (routerData) => {
  const reviewerId = routerData.match.params.reviewerId;
  const reviewer = initialReviewers.find(
    (reviewer) => reviewer.id === reviewerId
  );
  return <Reviewer reviewer={reviewer} />;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: initialItems,
    };
  }
  handleAddItem = (item) => {
    this.setState({ items: this.state.items.concat(item) });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/"
            render={() => renderHome(this.state.items)}
          />
          <Route
            exact={true}
            path="/seller/:sid"
            render={(routerData) =>
              renderSeller(routerData, this.state.items, this.handleAddItem)
            }
          />
          <Route
            exact={true}
            path="/details/:itemId"
            render={(routerData) =>
              renderItemDetails(routerData, this.state.items)
            }
          />
        </div>
        <Route
          exact={true}
          path="/reviewer/:reviewerId"
          render={renderReviewer}
        />
      </BrowserRouter>
    );
  }
}

export default App;
