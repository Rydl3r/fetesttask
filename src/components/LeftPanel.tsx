import "../index.css";

function LeftPanel(props: { background: string }): JSX.Element {
  return (
    <div
      className="leftPanel"
      style={{
        background: `url(${props.background}) no-repeat`,
      }}
    ></div>
  );
}

export default LeftPanel;
