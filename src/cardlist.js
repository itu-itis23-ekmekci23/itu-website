import React from "react";
import Card from "./card";
import './cardlist.css';

function CardList() {
    return (
        <div className="container">
            <Card prop={"sahibinden"} />
            <Card prop={"sureli-ilanlar"} />
            <Card prop={"urun-kiralama"} />
            <Card prop={"ders-yardimcisi"} />
            <Card prop={"harf-notu-hesaplama"} />
        </div>
    )
}

export default CardList;