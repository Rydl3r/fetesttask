import "../index.css";

function Footer(props: { background: string }): JSX.Element {
  return (
    <div
      className="footer"
      style={{
        background: `url(${props.background}) no-repeat`,
      }}
    ></div>
  );
}

export default Footer;
