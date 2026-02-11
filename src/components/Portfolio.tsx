import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: "Residência Alpha",
        category: "Residencial",
        image: "https://images.unsplash.com/photo-1600596542815-e32c630bd138?q=80&w=1964&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 2,
        title: "Shopping Premium",
        category: "Comercial",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 3,
        title: "Ampliação Loft",
        category: "Reformas",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 4,
        title: "Sede Corporativa",
        category: "Comercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        size: "large"
    },
    {
        id: 5,
        title: "Casa do Bosque",
        category: "Residencial",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        size: "medium"
    },
    {
        id: 6,
        title: "Reforma Industrial",
        category: "Reformas",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        size: "large"
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
