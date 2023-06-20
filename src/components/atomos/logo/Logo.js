import './Logo.css';

function Logo({ height, width }) {
  return (
      <img
        className="fondo"
        height={height}
        width={width}
        src="/assets/logo/logo.png"
      />
  );

}

export default Logo;
