import "../index.css";

function LeftPanel(props: any) {
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
