import React, { useState, useTransition } from "react";
import Home from "./Home";
import Post from "./Post";
import Contact from "./Contact";

const One = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isPending, startTransition] = useTransition();
  const handleChange = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "posts":
        return <Post />;
      case "contact":
        return <Contact />;
      default:
        <Home />;
    }
  };
  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleChange("home")}>Home</button>
        <button onClick={() => handleChange("posts")}>Posts</button>
        <button onClick={() => handleChange("contact")}>Contact</button>
      </div>
      {isPending && <p>Loading....</p>}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default One;
