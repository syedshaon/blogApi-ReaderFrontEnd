import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// const postsData = [
//   {
//     _id: 1,
//     title: "Sample Post",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. ...",
//   },
//   // Add more posts as needed
// ];

function Home() {
  const authState = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const [msg, setMsg] = useState("");
  const [responseFromBackEnd, setResponseFromBackEnd] = useState(null);
  const navigateTo = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(authState.backendURL + "blogsAPI/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      // console.log(responseData);
      if (!response.ok) {
        console.log(responseData.message);
        // Handle error if needed
        return;
      }
      if (responseData.message) {
        // console.log(responseData.message);
        // Handle error if needed
        setMsg(responseData.message);
        return;
      }

      setPosts(responseData.posts);
    } catch (error) {
      console.log(error);
      // Handle error if needed
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DateFormat = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-8 mb-16 min-h-[800px]">
        <h1 className="text-3xl font-bold mb-4">{posts.length ? "" : "Posts Loading Soon."}</h1>
        {responseFromBackEnd && <h3 className="response text-orange-500 text-xl font-bold container mx-auto text-center">{responseFromBackEnd}</h3>}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <NavLink to={`/posts/${post._id}`} key={post._id}>
                <div className="bg-white p-4 rounded shadow">
                  <img className="mx-auto" src={authState.backendURL + post.thumbnail} alt="post thumbnail"></img>
                  <h2 className="text-xl text-center font-bold mb-2">{post.title}</h2>
                  <p className="text-center text-sm">
                    Posted By: {post.author.firstName} {post.author.lastName} , On: {post.timestamp ? new Date(post.timestamp).toISOString().split("T")[0] : "N/A"}
                  </p>

                  <div className="mt-2   ">
                    {/* <div className="text    " dangerouslySetInnerHTML={{ __html: post.text }}></div> */}
                    <p className="text-sm">{post.excerpt}</p>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <h1 className="text-3xl text-center font-bold mb-4">No News Published Yet!</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
