import React from "react";
import './Button.css';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

function Button () {
    return (
        <div className="button">
            <button className="button-car" >
                <div> <MdOutlineWhatsapp/> </div>
            </button>

            <button className="button-atendimento" >
                <div> <BsCart3/> </div>
            </button>

            <button className="button-promocao" >
                <div> <RiContactsLine/> </div>
            </button>

            <button className="button-zap" >
                <div> <HiOutlineSpeakerphone/> </div>
            </button>
        </div>
    );
}

export default Button;