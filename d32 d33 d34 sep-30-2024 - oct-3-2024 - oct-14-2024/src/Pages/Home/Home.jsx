import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user){
            navigate("/login");
        }
    }, [user, navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <h1 className="text-2xl text-center py-5">Welcome {user.email}</h1>
            {/* logout button */}
            <button
                onClick={async() => {
                    const so = await signOut();
                    if(so){
                        navigate("/login");
                    }
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block mx-auto"
            >
                Logout
            </button>
        </div>
    );
};

export default Home;