import { Clock, ShieldCheck, HardHat, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import './Benefits.css';

const Benefits = () => {
    const benefits = [
        {
            icon: <Clock className="benefit-icon" />,
            title: "Entrega Rápida",
            description: "Cronogramas rigorosos e precisos."
        },
        {
            icon: <Leaf className="benefit-icon" />,
            title: "Sustentável",
            description: "Construção seca e ecológica."
        },
        {
            icon: <HardHat className="benefit-icon" />,
            title: "Especialistas",
            description: "Engenheiros e certificados."
        },
        {
            icon: <ShieldCheck className="benefit-icon" />,
            title: "Garantia",
            description: "Segurança em cada detalhe."
        }
    ];

    return (
        <section className="benefits-section section" id="benefits">
            <div className="container">
                <motion.div
                    className="text-center mb-6 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Por que nós?</span>
                    <h2 className="section-title">Construindo com Excelência</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="benefit-item"
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5 }
                                }
                            }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="icon-wrapper">
                                {benefit.icon}
                            </div>
                            <div className="benefit-content">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Benefits;
