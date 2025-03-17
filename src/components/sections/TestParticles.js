import React from 'react';
import Particles from '@tsparticles/react'; // tsParticles の React コンポーネント
import { loadFull } from '@tsparticles/engine'; // 完全版のエンジンをロード

const TestParticles = () => {
  // tsParticles の初期化
  const particlesInit = async (engine) => {
    console.log('Particles Engine:', engine); // デバッグ用
    await loadFull(engine); // 完全版のエンジンをロード
  };

  // tsParticles のオプション設定
  const particlesOptions = {
    background: {
      color: {
        value: '#000000', // 背景色を黒に設定
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff', // パーティクルの色を白に設定
      },
      links: {
        color: '#ffffff', // リンクの色を白に設定
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        outModes: {
          default: 'bounce',
        },
        random: false,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // パーティクルの数
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* パーティクル背景 */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
      {/* テスト用のテキスト */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          color: '#ffffff',
          textAlign: 'center',
          marginTop: '40vh',
        }}
      >
        <h1>Test Particles Background</h1>
        <p>パーティクルが正しく表示されているか確認してください。</p>
      </div>
    </div>
  );
};

export default TestParticles;
