import "../index.css";

function Header(props: { background: string }) {
  return (
    <div
      className="header"
      style={{
        background: `url(${props.background}) no-repeat`,
      }}
    ></div>
  );
}

export default Header;
