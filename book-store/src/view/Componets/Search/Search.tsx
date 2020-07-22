import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

    render() {
        return (
            <div id="SearchBar">
                <input type="text" id="txtBusca" placeholder="Buscar..." />
                <button id="btnBusca">Buscar</button>
            </div>

        );
    }
}