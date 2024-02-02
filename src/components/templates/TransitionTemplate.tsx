type TransitionTypes = {
    show: boolean;
    children: React.ReactNode;
}

const TransitionTemplate = ({ show, children }: TransitionTypes) => {
    return (
        <div className={`${show ? `translate-x-2/3 transition duration-300 ease-out` : " translate-x-0 transition duration-300 ease-out"}`}>
            {children}
        </div>
    )
}

export default TransitionTemplate