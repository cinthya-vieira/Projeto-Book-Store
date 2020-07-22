import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return (
            <div id="Menu">
                <nav>
                    <ul id="MenuItem">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/livros">Livros</Link></li>
                        <li><Link to="/carrinho">Carrinho</Link></li>
                    </ul>
                </nav>
            </div>
        );

    }

}