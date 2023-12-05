function Comment_Show({ responseCommentsFromBackEnd, post }) {
  const DateFormat = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };

  return (
    <>
      <div className="container mx-auto mt-8 mb-16 p-3 rounded shadow">
        {responseCommentsFromBackEnd && <h3 className="response text-orange-500 text-xl font-bold container mx-auto ">{responseCommentsFromBackEnd}</h3>}
        <div className="  gap-4  ">
          <h2 className="text-orange-500  text-xl border-orange-500 border-b-8">{post.length > 0 ? "Previous Comments" : "No Comments yet. Add One?"}</h2>
          {post.length > 0 &&
            post.map((post) => (
              <div key={post._id} className="bg-white p-4 rounded shadow">
                <p className="mt-2   ">{post.text}</p>
                <p className="text-left text-sm italic">
                  By: {post.visitor.firstName} {post.visitor.lastName} , On: {post.timestamp ? new Date(post.timestamp).toLocaleString("en-US", DateFormat) : "N/A"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Comment_Show;
