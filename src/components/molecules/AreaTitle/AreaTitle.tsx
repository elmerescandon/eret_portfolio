import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

type AreaTitleProps = {
    title: string;
    setExtend: (extend: boolean) => void;
    extend: boolean;
};

const AreaTitle = ({ title, setExtend, extend }: AreaTitleProps) => {
    const toggleExtend = () => {
        setExtend(!extend);
    };

    return (
        <div className="pb-4 flex justify-between items-center">
            <p className="text-3xl tracking-tighter font-bold text-port-green">
                {title}
            </p>
            <button
                onClick={toggleExtend}
                className="text-xl font-bold text-port-green"
            >
                <PlusCircleIcon
                    className={`h-10 w-10 ${extend ? "transform rotate-45 transition-transform duration-300" : "transition-transform duration-300"}`}
                />

            </button>
        </div>
    );
};

export default AreaTitle;
