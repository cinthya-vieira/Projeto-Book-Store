import React, { Component } from 'react';
import Menu from './../../Componets/Menu/Menu';
import Search from './../../Componets/Search/Search';

export default class NotFound extends Component {
    render() {
        return (
            <div id="NotFound">
                <header className="NotFound-header">
                    <p> Books Story </p>
                        <Search />
                        <Menu />
                        <h1>Página Não Encontrada</h1>
                </header>
            </div>
        );
    }

}