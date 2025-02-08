"user client"
import "./Footer.scss";
import { FaWhatsapp,  FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Seção Sobre */}
          <div className="footer__section">
            <h2>Sobre Nós</h2>
            <p>Somos uma empresa especialista em pequenos reparos e serviços domésticos.</p>
          </div>

          {/* Seção Links */}
          <div className="footer__section">
            <h2>Links Rápidos</h2>
            <ul>
              <li><a href="#start">Início</a></li>
              <li><a href="#weWork">Trabalhamos com</a></li>
              <li><a href="#HowToWork">Como trabalhamos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          {/* Seção Redes Sociais */}
          <div className="footer__section">
            <h2>Siga-nos</h2>
            <div className="footer__social">
              <FaWhatsapp className="icon"></FaWhatsapp>
              <FaFacebook className="icon"></FaFacebook>
              <FaInstagram className="icon"></FaInstagram>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
