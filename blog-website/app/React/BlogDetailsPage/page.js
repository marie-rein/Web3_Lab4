"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/router";

import HeaderReact from "./HeaderReact";
import FooterReact from "./FooterReact";
import BlogDetails from "./BlogDetails";

const Page = () => {
    const router = useRouter();
    const { id } = router.query; 
  
    return (
      <>
        <HeaderReact />
        <BlogDetails idPublication={id} />
        <FooterReact />
      </>
    );
  };
  
  export default Page;


