import './Logo.css';

function Logo({ height, width, customClass }) {
  return (
      <img
        className={"fondo " + customClass }
        height={height}
        width={width}
        src="/assets/logo/logo.png"
      />
  );

}

export default Logo;
