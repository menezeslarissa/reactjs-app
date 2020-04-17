import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    //variavel de estado
    //render pode depender dessas variaveis
    state = {
        products: [],
    }
    
    //método executado assim que o component for mostrado em tela
    componentDidMount(){
        this.loadProducts();
    }
        //arrow func pq eh funçaõ nossa, senao n vai cosneguri acessar o escopo da var this
        //arrow func n subescreve o valor do this
    loadProducts =  async () =>{
        const response = await api.get('/products');
        //response.data.docs 
        //
        this.setState({ products: response.data.docs });
    }
    
    render() {
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key="{product._id}">{product.title}</h2>
                ))}
            </div>
        )

    }
}

