export function TodoInput(props) {
    const { handleAddTodo, inputValue,setInputValue} = props
    
    return (
        <div className="input-container">
            <input type="text" id="input-text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="Add Task" />
            
            <button onClick={() => {
                if (!inputValue) {return} //Guard clause
                handleAddTodo(inputValue) 
                setInputValue("")
                }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}