import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './About.css';

const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (inView) {
            let start = from;
            const end = to;
            const range = end - start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration * 1000 / range));

            const timer = setInterval(() => {
                start += increment;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}</span>;
};

const About = () => {
    return (
        <section className="about-section section" id="about">
            <div className="container about-container">

                {/* Content Side */}
                <div className="about-content">
                    <motion.span
                        className="section-subtitle"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        A Excelência da ESFD
                    </motion.span>

                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Construindo o Futuro com <br />
                        <span className="text-accent">Inovação e Rigor</span>
                    </motion.h2>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>
                            A ESFD consolidou-se como autoridade máxima em sistemas construtivos de alta performance. Especialistas em Steel Frame e Drywall, entregamos obras que transcendem a engenharia convencional.
                        </p>
                        <p>
                            Utilizamos tecnologia de ponta para garantir rapidez absoluta sem abrir mão da sustentabilidade. Nosso processo industrializado elimina desperdícios e oferece um isolamento térmico e acústico sem precedentes no mercado brasileiro.
                        </p>
                    </motion.div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number"><Counter from={0} to={500} />+</span>
                            <span className="stat-label">Projetos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter from={0} to={15} />+</span>
                            <span className="stat-label">Anos Exp.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter from={0} to={98} />%</span>
                            <span className="stat-label">Satisfação</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number"><Counter from={0} to={50} />+</span>
                            <span className="stat-label">Time</span>
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div className="about-image">
                    <motion.div
                        className="image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="https://i.ibb.co/QvVtYkZK/Whats-App-Image-2026-02-11-at-10-55-23.jpg" alt="Equipe ESFD em obra" />
                        <div className="image-overlay"></div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
