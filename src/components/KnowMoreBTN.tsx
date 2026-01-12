import { useNavigate } from "@tanstack/react-router";

type route ={
    route?:string
}
const KnowMoreBTN = ({ route }:route) => {
    const navigate = useNavigate();
    return (
        <button
            className="
                cursor-pointer
                relative text-sm font-light text-white px-2 py-2 bg-primary
                overflow-hidden
                after:content-[''] after:absolute after:left-1/2 after:bottom-0
                after:h-1 after:w-0 after:bg-yellow-400
                after:transition-all after:duration-300
                hover:after:left-0 hover:after:w-full
            "
            onClick={() => navigate({ to: route })}
        >
            Know More
        </button>
    );
};

export default KnowMoreBTN;
