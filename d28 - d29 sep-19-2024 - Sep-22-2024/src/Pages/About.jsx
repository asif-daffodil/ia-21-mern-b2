import { Link, useNavigate, useParams } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const handleReadMore = () => {
        navigate('/');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center py-5">
                    {name ? (
                        <h1 className="text-capitalize">{name}</h1>
                    ) : (
                        <h1>About Page</h1>
                    )}
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="btn btn-dark" onClick={handleReadMore}>Read more</button>
                </div>
                <div className="col-md-12 text-center py-5">
                    <Link to="/about/sadat" className="btn btn-danger me-2">Sadat</Link>
                    <Link to="/about/rifat" className="btn btn-warning me-2">Rifat</Link>
                    <Link to="/about/Nasif" className="btn btn-primary me-2">Nasif</Link>
                </div>
            </div>
        </div>
    );
};

export default About;