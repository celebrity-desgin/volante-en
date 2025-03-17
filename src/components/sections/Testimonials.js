const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " AI
                のパイオニアでありマルチイグジットの創設者であり、グローバル
                EWA給与計算用のエンタープライズ ブロックチェーン システムである
                VolanteChain を構築しています。"
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
                " VolanteChain
                のブランドマネージャーという新しいポジションで仕事を始めることを発表できることを嬉しく思います。
                "
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
