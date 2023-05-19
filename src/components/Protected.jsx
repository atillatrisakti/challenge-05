import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/actions/authAction";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }

    dispatch(getMe(navigate, null, "/"));
  }, [navigate, dispatch, token]);

  return children;
}

export default Protected;
