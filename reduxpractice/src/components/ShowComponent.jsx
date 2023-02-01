import { useDispatch, useSelector } from "react-redux";
import "../CSS/Show.css";

const Show = () => {
  const data = useSelector((state) => state.showReducer.users);

  return (
    <div className="card-container">
      {data.map((member) => {
        return (
          <div class="card">
            <img src={member.avatar} alt="Avatar" style={{ width: "100%" }} />
            <div class="container">
              <h4>
                <b>
                  {member.first_name} {member.last_name}
                </b>
              </h4>
              <p>{member.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Show;
