import { salimovSlider } from '@/src/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Partner</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/ms.png"
                alt="client"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src="assets/logos/yf.png"
                alt="client"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/NB.png"
                alt="client"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src="assets/logos/PB.png"
                alt="client"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <img
                src="assets/logos/g.png"
                alt="client"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
            <div>
              <img
                src="assets/logos/z.png"
                alt="client"
                style={{ width: '150px', height: 'auto' }}
              />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
