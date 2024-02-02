import React from "react";

type ButtonBlueProps = {
    onClick: () => void;
    type?: "primary" | "secondary";
    text: string;
};

const ButtonBlue = ({ onClick, text, type = "primary" }: ButtonBlueProps) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg py-3 px-5 ${type === "primary" ? "bg-port-blue text-white" : "bg-white text-port-blue border border-port-blue"}`}
        >
            {text}
        </button>
    );
};

export default ButtonBlue;
