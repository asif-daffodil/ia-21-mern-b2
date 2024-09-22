import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handleReadMore = () => {
        navigate('/about');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center py-5">
                    <h1>Home Page</h1>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="btn btn-dark" onClick={handleReadMore}>Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Home;