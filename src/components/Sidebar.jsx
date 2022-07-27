//components
import SocialNetworks from "./SocialNetworks";
//img
import Avatar from "../img/eu.jpeg"
import Circle from "../img/circle.png"

//sass
import "../style/components/sidebar.sass"
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img className="img-circle" src={Circle} alt="circulo" />
            <img src={Avatar} alt="Renan Domiciano" />
            <p className="title">Front End</p>
            <SocialNetworks/>
            
            <InformationContainer/>
            <a href="../public/CV.pdf" className="btn" download="CV renan.pdf">Download Currículo</a>
        </aside>
    )
}
export default Sidebar;