
import { Link } from "react-router-dom";
import useHelmet from "../../hooks/useHelmet";
import useRifat from "../../hooks/useRifat";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
    const HelmetComponent = useHelmet("Home Page");
    const rifatMsg = useRifat();

    useEffect(() => {
        (async () => {
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
                console.log(res.data);
            }catch(error){
                throw new Error("Failed to fetch the data: " + error.message);
            }
        })();
    }, []);
    
    return (
        <div>
            <HelmetComponent />
            <h2>Home Page</h2>
            <h3>{rifatMsg}</h3>
            <Link to="/about">About Us</Link>
        </div>
    );
};

export default Home;