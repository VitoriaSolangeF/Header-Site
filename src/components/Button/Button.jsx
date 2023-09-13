import React from "react";
import './Button.css';

function Button () {
    return (
        <div className="button">
            <button className="button-car" >
                <img src="../promocao.png" alt="carrinho"/>
            </button>

            <button className="button-atendimento" >
                <img src="../carrinho.png" alt="carrinho"/>
            </button>

            <button className="button-promocao" >
                <img src="../atendimento.png" alt="carrinho"/>
            </button>

            <button className="button-zap" >
                <img src="../zap.png" alt="carrinho"/>
            </button>
        </div>
    );
}

export default Button;