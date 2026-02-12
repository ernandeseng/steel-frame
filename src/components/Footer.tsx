import { motion } from 'framer-motion';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <motion.div
                className="container footer-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {/* Column 1: Brand */}
                <motion.div
                    className="footer-col"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <img src="https://i.imgur.com/cmyjO8B.png" alt="ESFD Logo" className="footer-logo-img" />
                    <p className="footer-desc">
                        Referência em construção a seco de alto padrão. Engenharia inteligente, sustentável e precisa para projetos que exigem excelência.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><Instagram /></a>
                    </div>
                </motion.div>

                {/* Column 2: Navigation */}
                <motion.div
                    className="footer-col"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <h4 className="footer-heading">Navegação</h4>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#about">Quem Somos</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </motion.div>

                {/* Column 3: Services */}
                <motion.div
                    className="footer-col"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <h4 className="footer-heading">Serviços</h4>
                    <ul className="footer-links">
                        <li><a href="#">Steel Frame Estrutural</a></li>
                        <li><a href="#">Projetos Residenciais</a></li>
                        <li><a href="#">Revestimentos em Drywall</a></li>
                        <li><a href="#">Projetos Comerciais</a></li>
                        <li><a href="#">Estruturas Metálicas</a></li>
                    </ul>
                </motion.div>

                {/* Column 4: Contact */}
                <motion.div
                    className="footer-col"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                    <h4 className="footer-heading">Contato</h4>
                    <ul className="footer-contact">
                        <li>
                            <MapPin size={18} />
                            <span>Santa Catarina, Brasil<br /><span className="text-sm opacity-70">Atendimento em toda região</span></span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>(47) 9 9237-5726</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>contato@esfd.com.br</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>

            <div className="footer-bottom container">
                <p>© 2026 ESFD Empreiteira de Steel Frame e Drywall. Todos os direitos reservados.</p>
                <p>Responsável Técnico: Alexandre</p>
            </div>
        </footer>
    );
};

export default Footer;
