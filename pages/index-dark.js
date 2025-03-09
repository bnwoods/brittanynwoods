import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import ExpertAreas from "../src/components/ExpertAreas";
import Home from "../src/components/Home";
import CopyRight from "../src/layouts/CopyRight";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Mouse from "../src/layouts/Mouse";
import ProgressBar from "../src/layouts/ProgressBar";
const Projects = dynamic(() => import("../src/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("../src/components/Partners"), {
  ssr: false,
});

const IndexDark = () => {
  useEffect(() => {
    return () => {
      document.querySelector("body").classList.add("dark");
    };
  }, []);

  return (
    <Layout>
      <MobileMenu />
      <Header dark />
      <Home dark />
      <About />
      <ExpertAreas />
      <Projects />
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </Layout>
  );
};
export default IndexDark;
