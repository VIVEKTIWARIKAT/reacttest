import "./Head.css";
function Heading(props) {
  return (
    <>
      <div className="head_style">
        {props.head} {props.detail}
      </div>
    </>
  );
}

export default Heading;
