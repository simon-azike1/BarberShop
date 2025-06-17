import React, { useState } from "react";
import './testimonials.css' 

const testimonialData = [
    {
        id: 1,
        name: 'Simon',
        role: 'Founder of Barber shop',
        content: 'Best barber shop in town! The team at Barber shop delivers exceptional service every time.',
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3Dg' // Replace with actual image path
    },
    {
        id: 2,
        name: 'John',
        role: 'Regular Customer',
        content: 'Amazing cuts and great atmosphere. Highly recommend this place!',
        image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D',
    },

    {
        id: 3,
        name: 'Mike Johnson',
        role: 'Business Owner',
        content: 'Professional service and skilled barbers. Always leave satisfied!',
        image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with actual image path
    }
];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Fixed: Correct logic for previous slide
    const handlePrevSlide = () => {
        setCurrentSlide(prev => 
            prev === 0 ? testimonialData.length - 1 : prev - 1
        );
    };

    const handleNextSlide = () => {
        setCurrentSlide(prev => 
            prev === testimonialData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="testimonials-section" aria-label="Customer Testimonials">
            <button className="btn-testimonials" aria-label="Testimonials section">
                Testimonials
            </button>
            
            <header className="heading-testimonials">
                <h2>What Our Clients Are Saying About Us</h2>
                <p style={{color:"black"}}>
                    Our expert barbers specialize in classic, modern, and custom cuts for all hair types and textures. 
                    Whether it's a timeless style or the latest trend, we ensure you leave looking your best.
                </p>
            </header>

            <div className="carousel-container">
                <div 
                    className="carousel-slider"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    aria-live="polite"
                >
                    {/* Fixed: Using correct variable name */}
                    {testimonialData.map((testimonial) => (
                        <article 
                            key={testimonial.id} 
                            className="carousel-content"
                            aria-label={`Testimonial from ${testimonial.name}`}
                        >
                            <div className="img-testimonial">
                                <img 
                                    src={testimonial.image} 
                                    alt={`${testimonial.name}, ${testimonial.role}`}
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="content-testimonial">
                                <blockquote>
                                    <p>{testimonial.content}</p>
                                </blockquote>
                                <cite>
                                    <strong>{testimonial.name}</strong>
                                    <span className="role">{testimonial.role}</span>
                                </cite>
                            </div>
                        </article>
                    ))}
                </div>
                
                <nav className="slide-controls" aria-label="Testimonial navigation">
                    <button 
                        type="button" 
                        className="btn-carousel prev-btn" 
                        onClick={handlePrevSlide}
                        aria-label="Previous testimonial"
                    >
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-carousel next-btn" 
                        onClick={handleNextSlide}
                        aria-label="Next testimonial"
                    >
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </nav>
                
                {/* Slide indicators */}
                <div className="slide-indicators" role="tablist" aria-label="Testimonial indicators">
                    {testimonialData.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            role="tab"
                            aria-selected={index === currentSlide}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;