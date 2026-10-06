import { TaskItem, type SubjectId } from "./TaskItem"
import type { StudyPlan } from "../types/StudyPlanType"

export function TaskList({
  studyPlans,
  handleStatusTodo,
  handleDeleteTodo
}: {
  studyPlans: StudyPlan[]
  handleStatusTodo: (id: string) => void
  handleDeleteTodo: (id: string) => void
}) {
  return (
    <section className="task-panel" aria-label="Tareas">
      {studyPlans.length > 0 ? (
        <div className="grid">
          {studyPlans.map(item => (
            <TaskItem
              key={item.id}
              id={item.id}
              title={item.title}
              subject={item.subject as SubjectId}
              done={item.done}
              onToggle={handleStatusTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </div>
      ) : (
        <h1>No hay tareas</h1>
      )}
    </section>
  )
}
