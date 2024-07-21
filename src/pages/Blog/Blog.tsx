import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";



const Blog = () => {
    return(
        <>
            <BreadCrumbs linksArray={[{ link:'/blog', text: 'Blog' }]} />

        </>
    )
};

export default Blog;
