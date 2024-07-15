import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <div className="bigdiv">
            <span> ITU WEBSITE</span>
            <a href="https://www.google.com" id="nv1" className="dib grow">Sahibinden</a>
            <a href="https://www.google.com" id="nv2" className="dib grow">Süreli İlanlar</a>
            <a href="https://www.google.com" id="nv3" className="dib grow">Ürün Kiralama</a>
            <a href="https://www.google.com" id="nv4" className="dib grow">Ders Yardımcısı</a>
            <a href="https://www.google.com" id="nv5" className="dib grow">Harf Notu Hesaplama</a>
        </div>
    )
}

export default Navbar;