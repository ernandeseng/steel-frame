import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect

    return (
        <section className="hero-section">
            <motion.div
                className="hero-background"
                style={{ y }}
            >
                <div className="hero-overlay"></div>
            </motion.div>

            <div className="hero-content container">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-subtitle"
                >
                    Engenharia de Alto Padrão
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-title"
                >
                    Construa o Futuro com <br />
                    <span className="highlight-text">Tecnologia e Precisão</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-description"
                >
                    Soluções inovadoras em Steel Frame e Drywall para construções rápidas, sustentáveis e de alto padrão.
                </motion.p>

                <div className="hero-cta-group">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Solicitar Orçamento →
                    </motion.a>

                    <motion.a
                        href="#portfolio"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline"
                    >
                        Ver Projetos
                    </motion.a>
                </div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
