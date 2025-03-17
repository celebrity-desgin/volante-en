import { siX } from 'simple-icons'; // Xのアイコンをインポート

const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      aria-label="X Icon"
      style={{
        width: '48px', // サイズを調整
        height: '48px',
        fill: `#${siX.hex}`, // ブランドカラーを適用
      }}
    >
      <path d={siX.path} /> {/* SVGのパス情報を使用 */}
    </svg>
  );
};

export default XIcon;
