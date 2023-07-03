import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = () => {
  const [headerHeight, setHeaderHeight] = useState(60);
  const location = useLocation();
  const handleHeaderHeight = (height) => {
    setHeaderHeight(height);
  };

  useEffect(() => {
    setHeaderHeight(0);
  }, [location]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <Header
        onHeaderHeight={handleHeaderHeight}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      />
      <main
        className="container"
        style={{
          marginTop: `120px`
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
    </>
  );
};

export { Layout };
