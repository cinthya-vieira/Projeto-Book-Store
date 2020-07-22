import React, { Component } from 'react';
import "./SimpleLivro.css";

export default class SimpleLivro extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td><img src="livro1.jpg" alt="foto" /></td>
                        <td>The Witcher: O Último Desejo</td>
                        <td>R$50,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="Livro2.jpg" alt="foto2" /></td>
                        <td>O Fabuloso Livro Azul</td>
                        <td>R$70,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="Livro3.jpg" alt="foto3" /></td>
                        <td>Caminhos Infindos</td>
                        <td>R$80,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="Livro4.jpg" alt="foto4" /></td>
                        <td>João e Levi: e a Loteria da Vida</td>
                        <td>R$200,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="Livro5.jpg" alt="foto5" /></td>
                        <td>Harry Potter e o Prisioneiro de Azkaban</td>
                        <td>R$55,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="Livro6.png" alt="foto6" /></td>
                        <td>O Hobbit</td>
                        <td>R$44,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="Livro7.jpg" alt="foto7" /></td>
                        <td>O Fabuloso Livro Vermelho</td>
                        <td>R$34,00</td>
                        <td><button>Comprar</button></td>
                    </tr>
                    <tr>
                        <td><img src="livro8.jpg" alt="foto8" /></td>
                        <td>O Pequeno Principe</td>
                        <td>R$380,00</td>
                        <td><button itemID="livro8" onClick={() => this.comprarLivro} >Comprar</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }

 comprarLivro(livro: [HTMLButtonElement]){

        const livrosComprados = document.getElementById;
        
        livro.forEach(HTMLButtonElement => {
            console.log(livro);

        });
        return console.log(livrosComprados);

    }
}

/*let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
});*/ 
