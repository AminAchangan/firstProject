import React, { Component } from 'react';
import Product from './../Product/Product';

class ProductList extends React.Component {
    state = {
        products: [
            { title: "React.js", price: "99$", id: 1, quantity: 1 },
            { title: "Node.js", price: "89$", id: 2, quantity: 2 },
            { title: "JavaScript", price: "79$", id: 3, quantity: 3 }
        ],
    };

    removeHandler = (id) => {
        const filteredProduct = this.state.products.filter((p) => p.id !== id);
        this.setState({ products: filteredProduct })
    }
    incrementHandler = (id) => {
        // 1. id => ok
        // 2. find selected item =>
        // 3. add one to item quantity
        // 4. setState();

        const products = [...this.state.products]

        const selectedItem = products.find(p => p.id === id);
        selectedItem.quantity++;
        // console.log(products);
        this.setState({ products })
    }

    decrementHandler = (id) => {
        const products = [...this.state.products]

        const selectedItem = products.find(p => p.id === id);
        if (selectedItem.quantity === 1) {
            const filteredProduct = products.filter(p => p.id !== id);
            this.setState({ products: filteredProduct })
        } else {
            selectedItem.quantity--;
            this.setState({ products })
        }
    }

    changeHandler = (e, id) => {
        const products = [...this.state.products]

        const selectedItem = products.find(p => p.id === id);
        selectedItem.title = e.target.value;
        this.setState({ products });
    }


    renderProduct = () => {
        if (this.state.products.length === 0)
            return <div>there is no product in cart</div>

        return this.state.products.map((product, index) => {
            return (
                <Product
                    product={product}
                    key={index}
                    onDelete={() => this.removeHandler(product.id)}
                    onIncrement={() => this.incrementHandler(product.id)}
                    onDecrement={() => this.decrementHandler(product.id)}
                    onChange={(e) => this.changeHandler(e, product.id)}
                />
            );
        })
    }

    render() {

        return (
            <div>
                {!this.state.products.length && (<div>go to shopping</div>)}
                {this.renderProduct()}
            </div>
        );
    }
}

export default ProductList;