import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // load the authenticated user
  const { isLoading, isAuthed } = useUser();

  //if no auth user redirect to the login page
  useEffect(
    function () {
      if (!isAuthed && !isLoading) navigate("/login");
    },
    [isAuthed, isLoading, navigate]
  );
  // show a spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  //if there is user render the app
  if (isAuthed) return children;
}

export default ProtectedRoute;
