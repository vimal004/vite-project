const Button = (props) => {
    return (
        <div onClick={ props.action } className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            <button>{ props.name }</button>
        </div>
    );
}

export default Button;