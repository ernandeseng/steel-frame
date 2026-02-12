import { useState } from 'react';
import { Clock, ShieldCheck, HardHat, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Benefits.css';

const Benefits = () => {
    const [mobileIndex, setMobileIndex] = useState(0);

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

    const nextSlide = () => {
        setMobileIndex((prev) => (prev + 1) % benefits.length);
    };

    const prevSlide = () => {
        setMobileIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    };

    return (
        <section className="benefits-section section" id="benefits">
            <div className="container">
                <div className="text-center mb-6 md:mb-12">
                    <span className="section-subtitle">Por que nós?</span>
                    <h2 className="section-title">Construindo com Excelência</h2>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 pb-2">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-item opacity-100"
                        >
                            <div className="icon-wrapper">
                                {benefit.icon}
                            </div>
                            <div className="benefit-content">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel View */}
                <div className="md:hidden relative h-[320px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mobileIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="benefit-item absolute w-full max-w-[300px]"
                        >
                            <div className="icon-wrapper">
                                {benefits[mobileIndex].icon}
                            </div>
                            <div className="benefit-content">
                                <h3>{benefits[mobileIndex].title}</h3>
                                <p>{benefits[mobileIndex].description}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md z-10 text-[var(--accent-main)] hover:bg-[var(--accent-main)] hover:text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md z-10 text-[var(--accent-main)] hover:bg-[var(--accent-main)] hover:text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                        {benefits.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-2 w-2 rounded-full transition-all ${idx === mobileIndex ? 'bg-[var(--accent-main)] w-6' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Benefits;
