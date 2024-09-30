import { Link, useNavigate } from "react-router-dom";
import useHelmet from "../../hooks/useHelmet";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    const HelmetComponent = useHelmet("About Us");
    return (
        <div>
            <HelmetComponent />
            <h2>About Us</h2>
            <Link to="/" className="block">Home</Link>
            <button className="border p-3 m-2 rounded" onClick={handleClick}>Read more</button>
        </div>
    );
};

export default About;