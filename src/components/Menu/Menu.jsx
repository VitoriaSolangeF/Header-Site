import React, { useState, useEffect, useRef } from 'react';


// Styles
import './Menu.css';

function Menu () {
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            setOpen(false);
            console.log(menuRef.current);
          }      
        };

        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
          }
      
        });

    return (
        <div className="Menu">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                    <span>MENU</span>
                </div>

                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                    <h3>Bem Vindo(a)<br/><span>Catalogo Kimaster</span></h3>
                    <ul>
                        <DropdownItem text = {"- Cadastro"}/>
                        <DropdownItem text = {"- Ofertas"}/>
                        <DropdownItem text = {"- Carrinho"}/>
                        <DropdownItem text = {"- Pedidos"}/>
                        <DropdownItem text = {"- Promoções"}/>
                        <DropdownItem text = {"- Suporte"}/>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

function DropdownItem(props){
    return(
        <li className='dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}

export default Menu;