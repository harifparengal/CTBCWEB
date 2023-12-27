import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../../Modal";
import Blog from "./Blog";
import AddBlog from "./AddBlog";



const BlogsManager = () => {
    const [showModal, setShowModal] = useState(false);

    const { isLoading, error, data, refetch,isFetching } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('jwtToken'),
                    'Accept': 'application/json',
                },
            });
            return await res.json();
        }
    }
    );

    const blogs = (Array.isArray(data) && data) || [];

    if (isLoading)
        return 'loading blogs...'
    if (error)
        return error.message;

    return (
        <div className="mt-100" style={isFetching ? { backgroundColor: "rgba(0, 0, 0, 0.15)" } : {}}>
            <h2>Blogs</h2>
            <span>{isFetching ? 'Retrieving data please wait' : ''}</span>
            <div className="a-events-container mt-20">
                {blogs?.map(data => <Blog key={data?._id} data={data} refetch={refetch} />)}

                <div className="a-add-event">
                    <button type="button" onClick={() => setShowModal(true)} aria-label="Add new blog" title="Add new blog">+</button>
                </div>

                <Modal showModal={showModal} setShowModal={setShowModal}><AddBlog setShowModal={setShowModal} refetch={refetch}></AddBlog></Modal>
            </div>


        </div>
    );
};

export default BlogsManager;