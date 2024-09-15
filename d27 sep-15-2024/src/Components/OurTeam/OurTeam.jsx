import TeamMemeber from "./TeamMemeber";
import tufanFirstImg from "../../assets/images/developer2.jpg"
import tufanImg from "../../assets/images/developer3.jpg"
import tufanLastImg from "../../assets/images/developer4.jpg"

const OurTeam = () => {
    return (
        <div className="my-20 container mx-auto">
            <h2 className="text-center text-5xl font-light mb-10">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <TeamMemeber img={tufanFirstImg} userName="Suzuka" />
                <TeamMemeber img={tufanImg} userName="Tufan" />
                <TeamMemeber img={tufanLastImg} userName="Sakhina" />
            </div>
        </div>
    );
};

export default OurTeam;