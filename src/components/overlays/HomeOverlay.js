import React from 'react';

const HomeOverlay = () => {
  // 🛠️ ボタンのクリック処理（#Copyright へのスムーズスクロール）
  const handleButtonClick = () => {
    const copyrightSection = document.getElementById('Copyright');
    if (copyrightSection) {
      copyrightSection.scrollIntoView({ behavior: 'smooth' }); // ✅ スムーズスクロール
    } else {
      console.warn('❌ #Copyright セクションが見つかりませんでした！');
    }
  };

  return (
    <div className="home-overlay">
      <div className="position-relative">
        <h1>
          {/* 🌌 タイトル */}
          <span>
            <span className="animated-layer">
              Volante<span>.</span>
            </span>
          </span>

          <span className="position-relative">
            <span className="animated-layer">Token</span>
            <span className="intro animated-layer">
              <img src="/assets/images/logo.png" alt="Title Image" />
            </span>
          </span>

          <span>
            <span className="animated-layer">Sale!</span>
          </span>

          {/* 🟢 ボタン */}
          <span>
            <span className="animated-layer">
              <div className="cta">
                <img
                  src="/assets/images/telegram.png"
                  alt="Buy Button for PC"
                  style={{
                    cursor: 'pointer',
                    width: '100%',
                    maxWidth: '500px',
                    margin: '0 auto',
                    display: 'block',
                  }}
                  onClick={() => {
                    window.location.href = 'https://t.me/volantechaincom';
                  }}
                />
              </div>
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomeOverlay;
