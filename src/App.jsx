import router from "./Router";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
// import validateLoginStatus from "./store/validateLoginStatus";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/authReducer";

function App() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const validateLoginStatus = async () => {
    // console.log("validation ran");
    if (authState.token) {
      try {
        const response = await fetch("http://localhost:3000/authorAPI/validateLoginStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: authState.token,
          },
        });

        const responseData = await response.json();
        // console.log(responseData);
        if (responseData.firstName) {
          dispatch(authActions.login({ firstName: responseData.firstName, token: authState.token }));
        }
      } catch (error) {
        // console.error("Error in validateLoginStatus:", error);
      }
    }
  };

  useEffect(() => {
    validateLoginStatus();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
