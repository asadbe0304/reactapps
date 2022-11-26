import React from 'react';
import person from "./../../assets/png/moham.png"
import second from './../../assets/png/shihab.png'

const Card = (props) => {
    const {user:{first_name,last_name,avatar,id, email}}=props
    return (
        <>
        <div class="card">
        <div class="card-top">
        <blockquote cite="Najwa Shihab">
        “Cuma perlu <strong>satu buku</strong> untuk jatuh cinta pada membaca, Cari Buku itu! <strong>Mari jatuh cinta!</strong>
                </blockquote>
        </div>
        <div class="card__body card__second">
        <img src={avatar} width={80} height={80} alt="person"/>
        <div class="card__body--inner">
        <h3 class='card__title'>
        {first_name}
        </h3>
        <p class="card__text">
        {last_name}
        </p>
        </div>
        </div>
        </div>   
        </>
    );
};
export default Card;