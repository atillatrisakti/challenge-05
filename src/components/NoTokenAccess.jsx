import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../redux/actions/authAction";

function NoTokenAccess({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe(navigate, "/", null));
  }, [navigate, dispatch]);

  return children;
}

export default NoTokenAccess;
