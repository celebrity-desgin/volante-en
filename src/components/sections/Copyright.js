import { useEffect, useState } from 'react';

const Copyright = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* PC用とモバイル用ボタン */}
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible',
          padding: '30px 0',
          backgroundColor: 'rgba(0, 0, 0, 1)',
        }}
      >
        {!isMobile ? (
          <img
            src="/assets/images/description.png"
            alt="Buy Button for PC"
            style={{
              cursor: 'pointer',
              width: 'auto',
              maxWidth: '800px',
              height: 'auto',
              display: 'block',
              margin: '20px',
              zIndex: 10,
            }}
            onClick={() => {
              window.location.href =
                'https://drive.google.com/file/d/1tw_6Exq1H7QAejy1olXp8EdGVausKCv-/view?usp=sharing';
            }}
          />
        ) : (
          <img
            src="/assets/images/description350.png"
            alt="Buy Button for Mobile"
            style={{
              cursor: 'pointer',
              width: 'auto',
              maxWidth: '350px',
              height: 'auto',
              display: 'block',
              margin: '20px',
              zIndex: 10,
            }}
            onClick={() => {
              window.location.href =
                'https://drive.google.com/file/d/1tw_6Exq1H7QAejy1olXp8EdGVausKCv-/view?usp=sharing';
            }}
          />
        )}
        {!isMobile ? (
          <img
            src="/assets/images/trustwallet.png"
            alt="Buy Button for PC"
            style={{
              cursor: 'pointer',
              width: 'auto',
              maxWidth: '800px',
              height: 'auto',
              display: 'block',
              margin: '20px',
              zIndex: 10,
            }}
            onClick={() => {
              window.location.href =
                'https://drive.google.com/file/d/1ZPZF27Oa6xEYyCDaHt2YxR9SdsZPBafk/view?usp=sharing';
            }}
          />
        ) : (
          <img
            src="/assets/images/trustwallet350.png"
            alt="Buy Button for Mobile"
            style={{
              cursor: 'pointer',
              width: 'auto',
              maxWidth: '350px',
              height: 'auto',
              display: 'block',
              margin: '20px',
              zIndex: 10,
            }}
            onClick={() => {
              window.location.href =
                'https://drive.google.com/file/d/1ZPZF27Oa6xEYyCDaHt2YxR9SdsZPBafk/view?usp=sharing';
            }}
          />
        )}
        {!isMobile ? (
          <img
            src="/assets/images/btse.png"
            alt="Buy Button for PC"
            style={{
              cursor: 'pointer',
              width: 'auto',
              maxWidth: '800px',
              height: 'auto',
              display: 'block',
              margin: '20px',
              zIndex: 10,
            }}
            onClick={() => {
              window.location.href = 'https://www.btse.com/en';
            }}
          />
        ) : (
          <img
            src="/assets/images/btse350.png"
            alt="Buy Button for Mobile"
            style={{
              cursor: 'pointer',
              width: 'auto',
              maxWidth: '350px',
              height: 'auto',
              display: 'block',
              margin: '20px',
              zIndex: 10,
            }}
            onClick={() => {
              window.location.href = 'https://www.btse.com/en';
            }}
          />
        )}
      </div>

      {/* Copyright Section */}
      <section
        id="Copyright"
        className="copyright"
        style={{
          textAlign: 'center',
          padding: '20px 0',
          backgroundColor: '#000',
          color: '#fff',
        }}
      >
        <div>
          <span>© {new Date().getFullYear()} Volante Labs ltd.</span>
          <span>
            {' '}
            <a target="_blank" href="https://www.volantechain.com/terms">
              Terms of Use
            </a>
          </span>
          <span>
            {' '}
            <a target="_blank" href="https://www.volantechain.com/privacy">
              Privacy and Policy
            </a>
          </span>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '10px 0 0',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <li>
              <a href="https://x.com/volantechain">
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/volantechain_jp">
                <i class="fab fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/volantechaincom/">
                <i className="fab fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Copyright;
