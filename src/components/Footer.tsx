import "../index.css";

function Header(props: any) {
  return (
    <div
      className="footer"
      style={{
        background: `url(${props.background}) no-repeat`,
      }}
    ></div>
  );
}

export default Header;
