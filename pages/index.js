import '../css/main.scss';

import React from 'react';

import ProductList from '../components/news';
import Sidebar from '../components/Sidebar';

import Spinner from '../components/Spinner';
const products = require('../static/products');

class App extends React.Component {
  state = {
    source: 'google-news',
    news: products.products,
  };

  handleSourceChange = newSource => {
    if (newSource === this.state.source) return;

    this.setState({
      source: newSource,
    });
  };

  render() {
    return (
      <div id="content-wrapper">
        <main className="layout">
          <Sidebar onSelect={this.handleSourceChange} />
          {this.state.news ? (
            <ProductList products={this.state.news} />
          ) : (
            <Spinner size={20} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
