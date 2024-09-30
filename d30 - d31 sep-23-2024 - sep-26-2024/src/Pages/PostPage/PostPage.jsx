import { useQuery } from "@tanstack/react-query";
import PostCompo from "../../Components/PostCompo/PostCompo";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";

const PostPage = () => {
    const { data, isLoading, isFetched } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await axios("https://jsonplaceholder.typicode.com/posts");
            return response.data;
        },
    });

    if (isLoading) {
        return (
            <>
                <Loading />;
            </>
        )
    }

    if (isFetched) {
        return (
            <div className="container mx-auto grid md:grid-cols-3 gap-4">
                {data.map(post => (
                    <>
                        <PostCompo key={post.id} post={post} />
                    </>
                )
                )}
            </div>
        );
    }
};

export default PostPage;