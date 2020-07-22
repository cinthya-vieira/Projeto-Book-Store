import React, { Component } from 'react';
import './Home.css';
import Menu from './../../Componets/Menu/Menu';
import Search from './../../Componets/Search/Search';
import Livro from './../../Componets/Livro/Livro';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <header className="Home-header">
                    <p> Books Story </p>
                    <Search />
                    <Menu />
                    <h1>Bem Vindo a Loja de Livros</h1>
                    <Livro />
                </header>
            </div>
        );
    }
}