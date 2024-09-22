import { Link, useSearchParams } from "react-router-dom";

const User = () => {
    const [query] = useSearchParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center py-5">
                    {query.get('name') ? (
                        <h1 className="text-capitalize">{query.get('name')}</h1>
                    ) : (
                        <h1>User Page</h1>
                    )}
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <Link to="/user?name=sadat" className="btn btn-danger me-2">Sadat</Link>
                    <Link to="/user?name=rifat" className="btn btn-warning me-2">Rifat</Link>
                    <Link to="/user?name=nasif" className="btn btn-primary me-2">Nasif</Link>
                </div>
            </div>
        </div>
    );
};

export default User;