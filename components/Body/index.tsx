import React from "react";
import { Router } from "next/dist/client/router";
import { useEffect, useRef } from "react";

interface Props {}

const Index: React.FC<Props> = ({ children }) => {
  const contentDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      if (!contentDiv.current) return;
      contentDiv.current.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <div ref={contentDiv} className="w-full h-screen overflow-x-scroll">
      {children}
    </div>
  );
};

export default Index;
