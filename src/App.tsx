import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContentComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="content-container-div">
      <img src="/assets/circle.png" alt="circle image" />
      <img src="/assets/main.png" alt="main image" />
      <span>{title}</span>
    </div>
  );
};

const SkeletonContentComponent: React.FC = () => {
  return (
    <div className="skeleton-container-div">
      <Skeleton circle={true} height={200} width={200} />
      <Skeleton height={400} width={800} />
      <Skeleton width={800} height={60} />
    </div>
  );
};

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTitle("Welcome to Shinobi Developer Group");
    }, 2000);
  }, []);

  return (
    <div className="App">
      {title === "" ? (
        <SkeletonContentComponent />
      ) : (
        <ContentComponent title={title} />
      )}
    </div>
  );
}

export default App;
