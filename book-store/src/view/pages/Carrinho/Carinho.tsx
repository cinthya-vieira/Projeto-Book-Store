import React, { Component } from 'react';
import './Carrinho.css';
import Menu from './../../Componets/Menu/Menu';
import Search from './../../Componets/Search/Search';

export default class Carrinho extends Component {
    render() {

        return (
            <div id="Carrinho">
                <header className="Carrinho-header">
                    <p> Books Story </p>
                        <Search />
                        <Menu />
                        <h1>Carrinho</h1>

                    <div className="pedidos">
                        <p> Seus Pedidos</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td><img src="livro1.jpg" alt="imagem"/></td>
                                    <td>The Witcher: O Último Desejo</td>
                                    <td>R$50,00</td>
                                </tr>
                            </tbody>
                        </table>                    
                    </div>

                    
                    <div className="carrinho">
                        <img src="carrinho.png" alt="carrinho" width="50px" />
                        <button>Finalizar Compra</button>
                    </div>

                </header>
            </div>
        );
    }

}
