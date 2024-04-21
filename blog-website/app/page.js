import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

import HeaderReact from "./Blogpage/HeaderReact";
import FooterReact from "./Blogpage/FooterReact";
import BlogList from "./Blogpage/BlogList";

export default function Home() {
  return (
    <main>
        <HeaderReact />
        <BlogList />
        <FooterReact />
    </main>
  );
}
