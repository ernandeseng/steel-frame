import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: "Residência Contemporânea",
        category: "Residencial",
        image: "https://i.ibb.co/QvVtYkZK/Whats-App-Image-2026-02-11-at-10-55-23.jpg",
        size: "large"
    },
    {
        id: 2,
        title: "Estrutura Metálica Industrial",
        category: "Comercial",
        image: "https://i.ibb.co/fzkr9FDf/Whats-App-Image-2026-02-11-at-10-55-21.jpg",
        size: "medium"
    },
    {
        id: 3,
        title: "Ampliação Residencial",
        category: "Reformas",
        image: "https://i.ibb.co/tP1Pfr8C/Whats-App-Image-2026-02-11-at-10-55-19.jpg",
        size: "medium"
    },
    {
        id: 4,
        title: "Escritório Moderno",
        category: "Comercial",
        image: "https://i.ibb.co/W4n56K1r/Whats-App-Image-2026-02-11-at-10-55-47.jpg",
        size: "large"
    },
    {
        id: 5,
        title: "Casa de Campo",
        category: "Residencial",
        image: "https://i.ibb.co/rRJ87g4g/Whats-App-Image-2026-02-11-at-10-55-45.jpg",
        size: "medium"
    },
    {
        id: 6,
        title: "Reforma de Interiores",
        category: "Reformas",
        image: "https://i.ibb.co/q3VGZ34g/Whats-App-Image-2026-02-11-at-10-55-43.jpg",
        size: "large"
    },
    {
        id: 7,
        title: "Projeto Comercial",
        category: "Comercial",
        image: "https://i.ibb.co/TxWx04Hm/Whats-App-Image-2026-02-11-at-10-55-40.jpg",
        size: "medium"
    },
    {
        id: 8,
        title: "Estrutura em Steel Frame",
        category: "Residencial",
        image: "https://i.ibb.co/04CxSdC/Whats-App-Image-2026-02-11-at-10-55-37.jpg",
        size: "medium"
    },
    {
        id: 9,
        title: "Fachada Moderna",
        category: "Reformas",
        image: "https://i.ibb.co/CpsCJQ7N/Whats-App-Image-2026-02-11-at-10-55-35.jpg",
        size: "large"
    },
    {
        id: 10,
        title: "Obra Corporativa",
        category: "Comercial",
        image: "https://i.ibb.co/Psg0cjDj/Whats-App-Image-2026-02-11-at-10-55-32.jpg",
        size: "medium"
    },
    {
        id: 11,
        title: "Detalhes de Acabamento",
        category: "Residencial",
        image: "https://i.ibb.co/W4tVD0M2/Whats-App-Image-2026-02-11-at-10-55-29.jpg",
        size: "large"
    },
    {
        id: 12,
        title: "Construção Steel Frame",
        category: "Comercial",
        image: "https://i.ibb.co/RpQRgXjd/Whats-App-Image-2026-02-11-at-10-55-27.jpg",
        size: "medium"
    },
    {
        id: 13,
        title: "Obra em Andamento",
        category: "Reformas",
        image: "https://i.ibb.co/nvF530t/Whats-App-Image-2026-02-11-at-10-55-25.jpg",
        size: "medium"
    }
];

const categories = ["Todos", "Residencial", "Comercial", "Reformas"];

const Portfolio = () => {
    const [filter, setFilter] = useState("Todos");

    const filteredProjects = filter === "Todos"
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section className="portfolio-section section" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <span className="section-subtitle">Nosso Legado</span>
                    <h2 className="section-title">Portfólio de Obras</h2>

                    <div className="filter-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="portfolio-grid"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                key={project.id}
                                className={`portfolio-item ${project.size}`}
                            >
                                <div className="portfolio-image-wrapper">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span className="project-category">{project.category}</span>
                                            <h3 className="project-title">{project.title}</h3>
                                            <button className="view-project-btn">
                                                <Plus size={24} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="portfolio-footer">
                    <a href="#" className="btn-outline dark-btn">Ver Todos os Projetos</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
