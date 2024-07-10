import React from "react";
import Card from "./card";

function CardList() {
    return (
        <div>
            <Card prop={"Sahibinden"} />
            <Card prop={"Süreli ilanlar"} />
            <Card prop={"Ürün kiralama"} />
            <Card prop={"Ders yardımcısı"} />
            <Card prop={"Harf notu hesaplama"} />
        </div>
    )
}

export default CardList