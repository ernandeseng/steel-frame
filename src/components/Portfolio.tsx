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

const Portfolio = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="portfolio-section section" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <span className="section-subtitle">Nosso Legado</span>
                    <h2 className="section-title">Portfólio de Obras</h2>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <motion.div
                            layoutId={`card-${project.id}`}
                            key={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className={`portfolio-item ${project.size}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="portfolio-image-wrapper">
                                <motion.img
                                    layoutId={`image-${project.id}`}
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                />
                                <div className="portfolio-overlay">
                                    <div className="overlay-content">
                                        <Plus size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedId(null)}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />
                            <div className="relative z-10 w-full max-w-4xl max-h-[90vh] flex items-center justify-center pointer-events-none">
                                {projects.map((item) => (
                                    item.id === selectedId && (
                                        <motion.div
                                            layoutId={`card-${item.id}`}
                                            key={item.id}
                                            className="relative overflow-hidden rounded-2xl bg-transparent pointer-events-auto shadow-2xl"
                                        >
                                            <motion.img
                                                layoutId={`image-${item.id}`}
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto max-h-[85vh] object-contain"
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white"
                                            >
                                                <span className="text-sm font-medium uppercase tracking-wider opacity-80">{item.category}</span>
                                                <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                                            </motion.div>
                                            <button
                                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-colors"
                                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            >
                                                <Plus className="rotate-45" size={24} />
                                            </button>
                                        </motion.div>
                                    )
                                ))}
                            </div>
                        </div>
                    )}
                </AnimatePresence>

                <div className="portfolio-footer">
                    <a href="#" className="btn-outline dark-btn">Ver Todos os Projetos</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
