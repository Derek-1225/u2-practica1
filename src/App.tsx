import { useState } from "react"
import { useStudyPlan } from "./hooks/useStudyPlan"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import { TaskFilters } from "./components/TaskFilters"
import { TaskSummary } from "./components/TaskSummary"

export function App() {
  const { studyPlans, handleStatusTodo, handleDeleteTodo } = useStudyPlan()
  const [filter, setFilter] = useState<"all" | "pending" | "done">("all")

  // Filtrado dinámico según el estado
  const filteredPlans = studyPlans.filter(item => {
    if (filter === "pending") return !item.done
    if (filter === "done") return item.done
    return true
  })

  // Resumen dinámico
  const total = studyPlans.length
  const doneCount = studyPlans.filter(t => t.done).length
  const pendingCount = total - doneCount

  return (
    <main className="app">
      <h1>PRÁCTICA · REACT - Plan de estudio</h1>
      <section className="layout">
        
        <TaskForm />

        <section className="board">
          
          <TaskSummary total={total} pending={pendingCount} done={doneCount} />

          
          <TaskFilters filter={filter} setFilter={setFilter} />

          
          <TaskList
            studyPlans={filteredPlans}
            handleStatusTodo={handleStatusTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        </section>
      </section>
    </main>
  )
}
