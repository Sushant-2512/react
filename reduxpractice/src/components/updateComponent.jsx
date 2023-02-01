import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAll, select } from "../actions";
const Update = () => {
  const dispatch = useDispatch();
  const [showUser, setShowUser] = useState(false);
  const users = useSelector((state) => state.showReducer.users);
  const [update, setUpdate] = useState({});
  var reqIndex;

  const handleSubmit1 = (e) => {
    e.preventDefault();
    let found = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == update.email) {
        setUpdate(users[i]);
        reqIndex = i;
        found = true;
        break;
      }
    }

    if (found) setShowUser(true);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    let newUsers = users.map((user) => {
      if (user.id == update.id) return update;

      return user;
    });

    dispatch(addAll(newUsers));
    dispatch(select(0));
  };

  const req1 = { ...update };
  return (
    <>
      {!showUser && (
        <form className="form">
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            onChange={(e) => setUpdate({ email: e.target.value })}
          />
          <button
            type="submit"
            className="button"
            style={{ margin: "5% 30%" }}
            onClick={handleSubmit1}
          >
            Search
          </button>
        </form>
      )}

      {showUser && (
        <form className="form">
          <input type="text" name="email" placeholder={req1.email} disabled />
          <input
            type="text"
            name="first_name"
            placeholder={req1.first_name}
            onChange={(e) =>
              setUpdate({ ...update, first_name: e.target.value })
            }
          />
          <input
            type="text"
            name="last_name"
            placeholder={req1.last_name}
            onChange={(e) =>
              setUpdate({ ...update, last_name: e.target.value })
            }
          />
          <input
            type="text"
            name="url"
            placeholder={req1.avatar}
            onChange={(e) => setUpdate({ ...update, url: e.target.value })}
          />
          <button
            type="submit"
            className="button"
            style={{ margin: "5% 30%" }}
            onClick={handleSubmit2}
          >
            Update
          </button>
        </form>
      )}
    </>
  );
};

export default Update;
