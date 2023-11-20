import { useState } from "react";

function Question(props) {
  const [isOpen, setOpen] = useState(false);
  function toggle() {
    setOpen(!isOpen);
  }
  return (
    <section>
      <div className={isOpen ? "open" : "closed"}>
        <h4>{props.title}</h4>
        <button onClick={toggle}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{props.info}</p>}
    </section>
  );
}
export default Question;
