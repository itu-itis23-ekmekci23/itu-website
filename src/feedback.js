import React from "react";
import './feedback.css'

function Feedback() {
    return (
        <div className="feedbackdiv">
            <p>Şikayet ve önerilerinizi buradan bize bildirebilirsiniz:</p>
            <input id="emailinput" type="email" placeholder="İTÜ e-mail adresi" /><br />
            <textarea id="messageinput" type="text" placeholder="Mesajınız" />
        </div>
    )
}

export default Feedback