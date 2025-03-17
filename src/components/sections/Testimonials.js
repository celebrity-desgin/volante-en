const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "We are pioneers in AI and provide a multi-signature enterprise
                blockchain solution for global EWA payroll."
              </span>
              <span className="person">Joey Bertschler</span>
              <span className="job">Chief Executive Officer</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                "I'm excited to begin my new role as Brand Manager for
                VolanteChain."
              </span>
              <span className="person">Sofiya Safronova</span>
              <span className="job">Brand Manager</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
    </section>
  );
};
export default Testimonials;
