import "../index.css";

function RightPanel(props: { background: string }): JSX.Element {
  return (
    <div
      className="rightPanel"
      style={{
        background: `url(${props.background}) no-repeat`,
      }}
    ></div>
  );
}

export default RightPanel;
