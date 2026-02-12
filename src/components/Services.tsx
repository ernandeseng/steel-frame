import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Hammer, ArrowRight, X } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Home size={32} />,
        title: "Projetos Residenciais",
        description: "Casas de alto padrão com design moderno e execução ágil.",
        detailedDescription: "Projetamos e construímos residências personalizadas com foco em conforto, estética e funcionalidade. Utilizamos o sistema Steel Frame para garantir uma obra rápida, limpa e com isolamento térmico e acústico superior. Transforme seu sonho em realidade com nossa equipe especializada.",
        whatsappMessage: "Olá, gostaria de saber mais sobre Projetos Residenciais.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: <Building2 size={32} />,
        title: "Construções Comerciais",
        description: "Soluções rápidas e modulares para o seu negócio não parar.",
        detailedDescription: "Entendemos que tempo é dinheiro. Nossas soluções comerciais são focadas na agilidade de entrega sem abrir mão da qualidade. Ambientes versáteis, duráveis e prontos para receber o seu negócio em tempo recorde. Ideal para lojas, escritórios e galpões.",
        whatsappMessage: "Olá, gostaria de saber mais sobre Construções Comerciais.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        icon: <Hammer size={32} />,
        title: "Reformas e Ampliações",
        description: "Amplie seu espaço com limpeza e eficiência tecnológica.",
        detailedDescription: "Precisa de mais espaço ou quer renovar seu ambiente? Realizamos reformas e ampliações com o mínimo de transtorno. A tecnologia Steel Frame permite intervenções rápidas, leves e com entulho reduzido. Modernize seu imóvel com praticidade.",
        whatsappMessage: "Olá, gostaria de saber mais sobre Reformas e Ampliações.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
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

const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: { duration: 0.2 }
    }
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const Services = () => {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    const handleOpenModal = (service: typeof services[0]) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    const whatsappNumber = "5547992375726";

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
                            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
                        >
                            <div className="card-image-wrapper">
                                <img src={service.image} alt={service.title} />
                                <div className="card-icon-badge">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <button
                                    onClick={() => handleOpenModal(service)}
                                    className="service-link"
                                >
                                    Saiba mais <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <div className="modal-root">
                        <motion.div
                            className="modal-overlay"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={handleCloseModal}
                        />
                        <div className="modal-container-wrapper">
                            <motion.div
                                className="service-modal"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <button className="modal-close-btn" onClick={handleCloseModal}>
                                    <X size={20} />
                                </button>

                                <div className="modal-image-header">
                                    <img src={selectedService.image} alt={selectedService.title} />
                                    <div className="modal-image-overlay"></div>
                                    <h3 className="modal-title-overlay">{selectedService.title}</h3>
                                </div>

                                <div className="modal-body-content">
                                    <div className="modal-icon-inline">
                                        {selectedService.icon}
                                    </div>
                                    <p className="modal-description">{selectedService.detailedDescription}</p>

                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(selectedService.whatsappMessage)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-cta-btn"
                                    >
                                        Falar com Especialista <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
