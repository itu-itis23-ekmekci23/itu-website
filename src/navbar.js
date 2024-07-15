import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <div className="bigdiv">
            <span> ITU WEBSITE</span>
            <a href="https://www.google.com" className="dib grow anchor">Sahibinden</a>
            <a href="https://www.google.com" className="dib grow anchor">İş İlanları</a>
            <a href="https://www.google.com" className="dib grow anchor">Süreli İlanlar</a>
            <a href="https://www.google.com" className="dib grow anchor">Ürün Kiralama</a>
            <a href="https://www.google.com" className="dib grow anchor">Ders Yardımcısı</a>
            <a href="https://www.google.com" className="dib grow anchor">Harf Notu Hesaplama</a>
        </div>
    )
}

export default Navbar;