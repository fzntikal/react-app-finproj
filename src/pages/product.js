import React from 'react';

const PRODUCTS = [
    {category: 'Sword', price: 'Rp 55000', stocked: true, name: 'Bastard Sword'},
    {category: 'Sword', price: 'Rp 65000', stocked: true, name: 'Estoc'},
    {category: 'Sword', price: 'Rp 78000', stocked: false, name: 'Rapier'},
    {category: 'Spear', price: 'Rp 150000', stocked: true, name: 'Pike'},
    {category: 'Spear', price: 'Rp 540000', stocked: false, name: 'Longinus'},
    {category: 'Shield', price: 'Rp 240000', stocked: true, name: 'Kite Shield'},
    {category: 'Armor', price: 'Rp 890000', stocked: true, name: 'Full Plate'}
]

class ProductCategory extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th>
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'grey'}}>{product.name}</span>
        
        return(
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory= null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategory
                    category={product.category}
                    key={product.category} />
                )
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category;
        });
        return(
          <table className='product-table'>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>{rows}</tbody>
          </table>  
        )
    }
}

class SearchBar extends React.Component {
    filterText = (e) => {
        this.props.onFilterText(e.target.value);
    }

    stockChange = (e) => {
        this.props.onStockChange(e.target.checked);
    }

    render() {
        return (
            <form className='search-bar'>
                <input 
                    type='text'
                    placeholder='Find it'
                    value={this.props.filterText}
                    onChange={this.filterText}
                />
                <p>
                    <input
                        type='checkbox'
                        checked={this.props.inStockOnly}
                        onChange={this.stockChange}
                    />
                    {''}
                    Filter products in stock
                </p>
            </form>
        )
    }
}

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        }
        this.filterText = this.filterText.bind(this);
        this.stockChange = this.stockChange.bind(this);
    }
    filterText(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    stockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div className='products'>
                <h4>
                    Feel free to browse through our products! It's not much for now but we'll be sure to increase our products variety!
                </h4>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterText={this.filterText}
                    onStockChange={this.stockChange}
                />
                <ProductTable className='product-table'
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <p>For now, to purchase our stuff, you must contact us personally either via the "Contact Us" Page or directly to our Social Media inbox, cheers!</p>
            </div>
        )
    }
}