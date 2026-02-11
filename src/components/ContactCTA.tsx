import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
    return (
        <section className="contact-cta-section section" id="contact">
            <div className="container contact-cta-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-cta-title"
                >
                    Pronto para construir com tecnologia e segurança?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="contact-cta-subtitle"
                >
                    Nossa equipe está pronta para orçar seu projeto e oferecer a melhor solução em Steel Frame e Drywall.
                </motion.p>

                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="contact-cta-button"
                >
                    Solicitar Orçamento Agora <ArrowRight size={20} />
                </motion.a>
            </div>
        </section>
    );
};

export default ContactCTA;
