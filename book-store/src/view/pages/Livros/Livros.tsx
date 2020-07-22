import React, { Component } from 'react';
import './Livros.css';
import Menu from './../../Componets/Menu/Menu';
import Search from './../../Componets/Search/Search';
//import Livro from '../../Componets/Livro/Livro';
import SimpleLivro from '../../../model/SimpleLivro';



export default class Livros extends Component {
    render() {
        return (
            <div id="Livros">
                <header className="Livros-header">
                    <p> Books Story </p>
                        <Search />
                        <Menu />
                        <h1> Livros Disponíveis da Nossa Loja </h1>
                        <SimpleLivro />
                                                
                </header>
            </div>
        );
    }

}

