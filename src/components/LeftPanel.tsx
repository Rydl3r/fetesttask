import "../index.css";

function LeftPanel(props: { background: string }) {
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
