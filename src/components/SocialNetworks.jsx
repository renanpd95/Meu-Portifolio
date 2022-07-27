//components
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

//sass
import "../style/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>},
    { name: "github", icon: <FaGithub/>},
    { name: "instagram", icon: <FaInstagram/>},
]

const SocialNetworks = () => {
    return (
        <section id="social-networks">
                <a href="https://www.linkedin.com/in/renan-domiciano/" className="social-btn">
                   <FaLinkedinIn/> 
                </a>
                <a href="https://github.com/renanpd95" className="social-btn">
                   <FaGithub/>
                </a>
                <a href="https://www.instagram.com/renan__domiciano/" className="social-btn">
                <FaInstagram/>
             </a>
                
        </section>
    )  
}

export default SocialNetworks;