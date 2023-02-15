import { useState, useEffect } from "react";
import React from "react";

const Input = (props) => {
  const [text, setText] = useState("");

  const submit = (env) => {
    env.preventDefault();
    if (text !== "") {
      props.submit(text);
      setText("");
    }
  };

  return (
    <form className="input_div" onSubmit={submit}>
      <input
        id="search"
        placeholder="Enter needed city"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button id="search_button" type="submit">
        &#128269;
      </button>
    </form>
  );
};

export default Input;