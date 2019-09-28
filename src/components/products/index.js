import React, { Component } from 'react';
import { connect } from 'react-redux';
import './products.scss';
import { getAllProducts } from '../../actions';
import ProductItem from './product_item';

class Products extends Component {
    componentDidMount() {
        this.props.getAllProducts();
        // console.log("this.props: ", this.props);
    }
    goToDetails(id) {
        // console.log("this.props.history: ", this.props.history);
        this.props.history.push(`/products/${id}`)
    }
    render() {
        // console.log("this.props.products: ", this.props.products);
        const { products } = this.props;
        // console.log("Products: ", products);
        const productItems = products.map(product => {
            return <ProductItem
                key={product.id}
                {...product}
                goToDetails={this.goToDetails.bind(this, product.id)}
            />
        })
        return (
            <div className="products">
                <h1>Products Page</h1>
                <div className="productsContainer">{productItems}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("Products Component mapStateToProps state: ", state);
    return {
        products: state.products.list
    }
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);


// Use connect to connect your component and the getAllProducts action creator to Redux

// Connect takes two arguments:

// 1. The first argument is a mapStateToProps function that is used to 
// add pieces of the Redux state to your components props.

// For this example, we have no mapStateToProps function so we just pass connect null.

// 2. The second argument is a mapDispatchToProps function that is used to 
// add action creators to your components props, or a simpler version that is just 
// an object that contains the action creators we want to add to our components props.

// For this example, we will use the simpler version of just passing in an object to connect. 
// We create a key in the object named getAllProducts set to our getAllProducts 
// action creator function.