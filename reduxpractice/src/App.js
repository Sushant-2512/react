import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/MainComponent";
import Create from "./components/CreateComponent";
import Delete from "./components/DeleteComponent";
import Show from "./components/ShowComponent";
import { add, loading } from "./actions/index";
import Update from "./components/updateComponent";
import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loading(true));
    fetch("https://reqres.in/api/users?page=2", { method: "GET" }).then(
      (res) => {
        res.json().then((res) => {
          res.data.forEach((element) => {
            dispatch(add(element));
          });

          dispatch(loading(false));
        });
      }
    );
  }, []);

  const { isLoading: loading, showWhat } = useSelector(
    (state) => state.showReducer.loading
  );
  return (
    <div>
      <Main />
      {isLoading && (
        <p style={{ textAlign: "center", fontSize: "4rem" }}>Loading..</p>
      )}
      {showWhat == 3 && <Create />}
      {showWhat == 2 && <Delete />}
      {showWhat == 1 && <Update />}
      {showWhat == 0 && <Show />}
    </div>
  );
}

export default App;
