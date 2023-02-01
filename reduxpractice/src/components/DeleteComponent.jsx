import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll, select } from "../actions/index";
const Delete = () => {
  const despatch = useDispatch();
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.showReducer.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    let found = false;
    users.forEach((user, index) => {
      if (user.email == email) {
        users.splice(index, 1);
        found = true;
        despatch(addAll(users));
        despatch(select(0));
      }
    });

    if (!found) alert("Email not exist");
  };

  return (
    <form className="form">
      <input
        type="text"
        name="id"
        placeholder="Enter your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="button"
        style={{ margin: "5% 30%" }}
        onClick={handleSubmit}
      >
        Delete
      </button>
    </form>
  );
};

export default Delete;
