import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Comment_add({ fetchComments }) {
  const navigateTo = useNavigate();
  const authState = useSelector((state) => state.auth);
  const { postId } = useParams();

  //   const [selectedOption, setSelectedOption] = useState("draft");

  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value);
  //   };

  // State to store form data
  const [formText, setFormText] = useState("");

  const [responseFromBackEnd, setResponseFromBackEnd] = useState(null);
  // Handle form input changes
  const handleInputChange = (e) => {
    setFormText(e.target.value);
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    // Call a function to send data to the backend API
    sendDataToBackend({ text: formText, postId: postId });
  };

  // Function to send data to the backend API using fetch
  const sendDataToBackend = async (data) => {
    try {
      const response = await fetch("https://good-news-backend.onrender.com/blogsAPI/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: authState.token,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseData = await response.json();
        // console.log("Response from backend:", responseData.message);
        setResponseFromBackEnd(responseData.message);
        // console.error("Error sending data to backend:", response);
        // throw new Error("Network response was not ok");
        return;
      }

      // Handle the successful response (if needed)
      const responseData = await response.json();
      // console.log("Response from backend:", responseData.message);

      // Hide signup form
      setResponseFromBackEnd(responseData.message);

      // Redirect to "/login" after 1500 milliseconds (1.5 seconds)
      const timeoutId = setTimeout(() => {
        // navigateTo("/");
        // window.location.reload();
        fetchComments();
        setFormText("");
        setResponseFromBackEnd(null);
      }, 2500);

      // Cleanup the timeout on component unmount or if the redirect happens
      return () => clearTimeout(timeoutId);

      // Reset the form after successful submission
      setFormData({
        title: "",
        published: "draft",
      });
    } catch (err) {
      // console.log("Error sending data to backend:", err.message);
      setResponseFromBackEnd("Error sending data to backend: " + err.message);
    }
  };

  return authState.isLoggedIn ? (
    <>
      <div className="  relative lg:py-20">
        {responseFromBackEnd && <h3 className="response text-orange-500 text-xl font-bold container mx-auto text-center">{responseFromBackEnd}</h3>}
        <div
          className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center justify-center w-full   ">
            <div className="relative  mt-5 mr-0 mb-0 ml-0  z-10  lg:mt-0 container">
              <form onSubmit={handleNewPostSubmit} className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10   rounded-xl relative z-10">
                <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Add new Comment. </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div className="relative">
                    <textarea
                      value={formText}
                      onChange={handleInputChange}
                      required
                      name="formText"
                      placeholder="Write Your Comment Here."
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="relative">
                    <button
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h2 className="text-orange-500 p-5 pb-5 text-xl mb-40 border-orange-500 border-b-8"> Please Log In to Add Comments.</h2>
  );
}

export default Comment_add;
