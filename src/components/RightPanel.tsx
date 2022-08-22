import "../index.css";

function RightPanel(props: any) {
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
