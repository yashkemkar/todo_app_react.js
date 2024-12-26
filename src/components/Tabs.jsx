export function Tabs(props) {
    const{todos, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        /// mapping function to cycle through each of those values and create a new tab with one body of logic.
        <nav>
            {tabs.map((tab,tabIndex) => {
                //Below is some chained conditional logic to identify the number of tabs in each category and assign that value to numOfTasks.
                const numOfTasks = 
                    tab === 'All' ? todos.length : //If All tab, return the number of tasks (todos.length)
                    tab === 'Open' ? todos.filter(val=> !val.complete).length : //If Open tab, return the number of tasks with the status 'not completed'
                    todos.filter(val => val.complete).length //If Completed tab, return the number of tasks with the status 'completed'.
                return (
                    <button onClick = {()=>{
                        setSelectedTab(tab)
                    }}
                    key={tabIndex} className = {"tab-button " 
                    + (tab ===selectedTab ? ' tab-selected' : ' ') } >
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr/>
        </nav>
    )
}