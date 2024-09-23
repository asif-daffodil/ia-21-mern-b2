import { Helmet } from "react-helmet";


const useHelmet = (title) => {
    return () => (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default useHelmet;