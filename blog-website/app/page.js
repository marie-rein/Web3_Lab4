import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

import HeaderReact from "./React/HeaderReact";
import FooterReact from "./React/FooterReact";
import BlogList from "./React/BlogList";

export default function Home() {
  return (
    <main>
        <HeaderReact />
        <BlogList />
        <FooterReact />
    </main>
  );
}
