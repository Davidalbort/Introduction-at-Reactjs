import './TodoList.css'

function TodoList (props) {
    return(
        <setion>
            {props.children}
        </setion>
    );
}

export {TodoList};