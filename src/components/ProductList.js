import React, { Component } from 'react';
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context';


class ProductList extends Component {
  
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Available" title="Products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(value)=> {
                                    return value.products.map(product =>{
                                        return <Product key={product.id} product={product}> </Product>;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>  

            //   <Product> 
            
        );
    }
}

export default ProductList;