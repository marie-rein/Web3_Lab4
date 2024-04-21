
import HeaderReact from "../../Blogpage/HeaderReact";
import FooterReact from "../../Blogpage/FooterReact";
import BlogDetails from "./BlogDetails";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default async function page({ params }) {
    return (
        <>
            <HeaderReact /> 
            <BlogDetails idPublication={params.id}/> 
            <AddComment idPublication={params.id}/>
            <CommentList idPublication={params.id}/>
            <FooterReact />
        </>
    )
}