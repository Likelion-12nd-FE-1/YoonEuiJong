import { useState } from "react";

const Sample = () => {
  const [names, setNames] = useState([]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(1);

  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <ul>{nameList}</ul>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick} onKeyPress={onKeyPress}>
        추가
      </button>
    </div>
  );
};

export default Sample;
