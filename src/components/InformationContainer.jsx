import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../style/components/informationcontainer.sass'

const InformationContainer = () =>  {
    return(
        <section id="information">
            <div className="info-card">
                <a href="tel:+11930041482">
                    <AiFillPhone id="phone-icon"/>
                </a>
                <div>
                    <h3>Telefone</h3>
                    <p>(11) 93004-1482</p>
                </div>
            </div>
            <div className="info-card">
                <a href="mailto:renandomiiciano95@gmail.com">
                    <AiOutlineMail id="email-icon"/>
                </a>
                <div>
                    <h3>E-mail</h3>
                    <p>renandomiiciano95@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <a href="https://www.google.com/maps/place/Salto,+SP/@-23.1724336,-47.3770116,12z/data=!3m1!4b1!4m5!3m4!1s0x94cf5265d8ecfaed:0xe774edc5dd9694a7!8m2!3d-23.1994222!4d-47.2877772">
                    <AiFillEnvironment id="pin-icon"/>
                </a>
                <div>
                    <h3>Localização</h3>
                    <p>Salto/Sp</p>
                </div>
            </div>
        </section>
    )
}
export default InformationContainer