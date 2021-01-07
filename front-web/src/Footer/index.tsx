import './styles.css';
import { ReactComponent as Youtubeicon } from './youtube.svg';
import { ReactComponent as Linkedinicon } from './linkedin.svg';
import { ReactComponent as Instagramicon } from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido  pelo Bruno Vicente Alves durante a 2° ed do evento semana devsuperior
            <div className="footer-icons">
                <a href="https://www..youtube.com/c/Devsuperior" target="_new">
                    <Youtubeicon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                    <Linkedinicon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <Instagramicon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;