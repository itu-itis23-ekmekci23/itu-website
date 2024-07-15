import React from "react";
import Card from "./card";
import './cardlist.css';

function CardList() {
    return (
        <div className="container">
            <Card
                name={"Sahibinden"}
                linkname={"sahibinden"}
                explanation={"Buzdolabı mı satıyorsunuz?"}
            />
            <Card
                name={"Süreli İlanlar"}
                linkname={"sureli-ilanlar"}
                explanation={"Süreli ilanlar verip okeye 4. bulabilirsiniz."}
            />
            <Card
                name={"Ürün kiralama"}
                linkname={"urun-kiralama"}
                explanation={"Kaleci eldiveni kiralamak için doğru yer."}
            />
            <Card
                name={"Ders Yardımcısı"}
                linkname={"ders-yardimcisi"}
                explanation={"Lineer cebirde zorlanınca yeriniz burası."}
            />
            <Card
                name={"Harf notu heaplama"}
                linkname={"harf-notu-hesaplama"}
                explanation={"Yaklaşık harf notunuzu hesaplayın."}
            />
        </div>
    )
}

export default CardList;