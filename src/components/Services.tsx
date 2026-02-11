import { motion } from 'framer-motion';
import { Home, Building2, Hammer, Grid, Layers, Factory, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Grid size={40} />,
        title: "Estrutura Steel Frame",
        description: "O que há de mais moderno em engenharia construtiva sustentável.",
    },
    {
        icon: <Home size={40} />,
        title: "Projetos Residenciais",
        description: "Casas de alto padrão com design moderno e execução ágil.",
    },
    {
        icon: <Building2 size={40} />,
        title: "Construções Comerciais",
        description: "Soluções rápidas e modulares para o seu negócio não parar.",
    },
    {
        icon: <Hammer size={40} />,
        title: "Reformas e Ampliações",
        description: "Amplie seu espaço com limpeza e eficiência tecnológica.",
    },
    {
        icon: <Layers size={40} />,
        title: "Drywall Interno",
        description: "Acabamentos internos perfeitos com isolamento termoacústico.",
    },
    {
        icon: <Factory size={40} />,
        title: "Obra Industrial",
        description: "Engenharia de Padrão Internacional em grandes vãos.",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
};

const Services = () => {
    return (
        <section className="highlight-section section" id="services">
            <div className="container">
                <div className="title-wrapper">
                    <span className="section-subtitle">Especialidades</span>
                    <h2 className="section-title">Nossos Serviços</h2>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <a href="#" className="service-link">
                                Saiba mais <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
