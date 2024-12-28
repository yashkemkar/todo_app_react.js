export function TodoInput(props) {
    const { handleAddTodo, inputValue,setInputValue} = props
    
    return (
        <div className="input-container">
            <input type="text" id="input-text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} placeholder="Add Task" onKeyDown={(e) => {
                if(e.key==="Enter") { //submit via enter key
                    if (!inputValue) {return} //guard clause
                    handleAddTodo(inputValue) 
                    setInputValue("") 
                }
            }}/>          
            <button onClick={() => { // submit via button
                if (!inputValue) {return} //guard clause
                handleAddTodo(inputValue) 
                setInputValue("")
                }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}