import '../style/components/projects.sass'
import KARATE from "../img/karate.jpg"
import MEA from "../img/mea.jpg"
import ALL from "../img/alltopografia.jpg"

const ProjectsContainer = () => {
    return(
        <section className="projects-container">
            <h2>Projetos</h2>
            <div className='project-grid'>
                <div className='project-card'>
                    <a href="https://karate-shidokan.web.app/index.html"><img src={KARATE} alt="Karate" /></a>
                    <p>
                        Academia de Karate
                    </p>
                </div>
                <div className='project-card'>
                    <a href="https://mulhereacessorios.com.br/"><img src={MEA} alt="Mulher e acessorios" /></a>
                    <p>
                        Loja de Bijouterias
                    </p>
                </div>
                <div className='project-card'>
                    <a href="https://www.alltopografia.com.br/"><img src={ALL} alt="All topografia" /></a>
                    <p>
                        Empresa de Topografia
                    </p>
                </div>             
            </div>
            <a href="https://github.com/renanpd95?tab=repositories" className="btn">
                Ver projetos
            </a>
        </section>
    )
}

export default ProjectsContainer