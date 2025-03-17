import { salimovSlider } from '@/src/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Media
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>日本経済新聞社 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>日本経済新聞社日経ｷｬﾝﾊﾞｽ</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月29日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.nikkei.com/compass/content/ATPKDB424514/article"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/ZrWrI94IutM?si=CUUBoc-7q2prJxaZ"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>EWAについて</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>Youtube</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2024年8月31日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>Earned Wage Access</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.youtube.com/watch?v=ZrWrI94IutM&ab_channel=Volante"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-0.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-1.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-2.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-3.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-4.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-5.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-6.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-7.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-8.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-9.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-10.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-11.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-12.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-13.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-14.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-15.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-16.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-17.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-18.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-19.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-20.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-21.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-22.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-23.png" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/slide-24.png" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Volante Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Mobile App</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>Slide</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2024年</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>Blockchain and AI</span>
                </li>
              </ul>
            </div>
            <a href="#" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-2.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>NEC BIGLOBE 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>NEC BIGLOBEニュース</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月29日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://news.biglobe.ne.jp/economy/0129/atp_250129_9953281723.html"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-8.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>デイリーニュース 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>The Daily News</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月31日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.galvnews.com/new-research-by-volante-labs-exposes-predatory-lending-crisis-and-solution/article_1c9b4fd7-a361-5c3a-9982-365efd39aa4e.html"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-7.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>モーニングスター 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>Morningstar</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月25日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.morningstar.com/news/business-wire/20250124851431/new-research-by-volante-labs-exposes-predatory-lending-crisis-and-solution"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-6.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>AP通信 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>AP news</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月25日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://apnews.com/press-release/business-wire/joey-bertschler-road-town-a1372618f96b4a339d1f8805940c5151"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-5.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Yahoo!finance 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>Yahoo!finance</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月25日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://nz.finance.yahoo.com/news/research-volante-labs-exposes-predatory-204400470.html?guccounter=1"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-3.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>NES PICKS 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>@Press</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月29日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://nordot.app/1257214479907995772?c=113147194022725109"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/news-4.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>サンケイスポーツ 掲載</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Volante Labs Limited</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Media :
                  </span>
                  <span>サンケイスポーツ</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Publication date :
                  </span>
                  <span>2025年1月29日</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Content :
                  </span>
                  <span>給与即時アクセスについての論文を発表</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.sanspo.com/pressrelease/atpress/YT4AWCI6KBLF3I4PLMDAEFCTN4/"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
    </section>
  );
};
export default Portfolio;
