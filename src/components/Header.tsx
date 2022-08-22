import "../index.css";

function Header(props: any) {
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
