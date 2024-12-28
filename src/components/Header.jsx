export function Header(props) {
    const { todos } = props
    const openTodosLength = todos.filter(val=>!val.complete).length
    const isTasksPlural = openTodosLength === 1 ? 'task' : 'tasks'
    console.log(isTasksPlural)
    return (
        <header>
            <h1 className="text-gradient"> You have {openTodosLength} open {isTasksPlural}.</h1>
        </header>
    )
}