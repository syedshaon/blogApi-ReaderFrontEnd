import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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

function Posts() {
  const authState = useSelector((state) => state.auth);
  const [post, setPosts] = useState([]);
  const [msg, setMsg] = useState("");
  const [responseFromBackEnd, setResponseFromBackEnd] = useState(null);
  const navigateTo = useNavigate();

  const { postId } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/blogsAPI/posts/" + postId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      // console.log(responseData.post);

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

      setPosts(responseData.post);
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

      <div className="container mx-auto mt-8 mb-16">
        {responseFromBackEnd && <h3 className="response text-orange-500 text-xl font-bold container mx-auto text-center">{responseFromBackEnd}</h3>}
        <div className="grid grid-cols-1  gap-4">
          {post && (
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              {post.author && (
                <p className="text-left text-sm">
                  Posted By: {post.author.firstName} {post.author.lastName} , On: {post.timestamp ? new Date(post.timestamp).toISOString().split("T")[0] : "N/A"}
                </p>
              )}
              <div className="mt-2 grid grid-cols-1 xl:grid-cols-4 gap-4  ">
                <div className="text col-span-3  " dangerouslySetInnerHTML={{ __html: post.text }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Posts;
