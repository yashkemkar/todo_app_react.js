import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props

    const filterTodosList =
    selectedTab === 'All' ? todos : //If 'All', present all todos or...
        selectedTab === 'Completed' ? todos.filter(val => val.complete) : //if 'complete', present completed todos
                todos.filter(val => !val.complete) //if not 'complete' present open tasks.
    return (
        <>
             {filterTodosList.map((todo, todoIndex) => {
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
                return (
                    <TodoCard
                        key={todoIndex}
                        {...props}
                        todoIndex={tempTodoIndex}
                        todo={todo} />
                )
            })}

        </>
    )
}