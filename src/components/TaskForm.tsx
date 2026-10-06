import { useReducer, useState } from "react"
import type { StudyPlanState } from "../types/StudyPlanState"
import type { SubjectId } from "./TaskItem"

function eventInputReducer(prev: StudyPlanState, next: object) {
  return { ...prev, ...next }
}

export function TaskForm({ onAdd }: { onAdd: (title: string, subject: SubjectId) => void }  ) {

  const [formValues] = useState({ title: "", subject: "programacion" as SubjectId })
  const [inputValue, dispatchInputValue] = useReducer(eventInputReducer, formValues)

  const handleAddStudy = () => {
    if (inputValue.title.trim().length >= 3 && inputValue.subject) {
      onAdd(inputValue.title, inputValue.subject as SubjectId)
      dispatchInputValue({ title: "", subject: "programacion" as SubjectId })
    }
  }

  return (
    <form className="task-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Nueva tarea</h2>
      <p className="form-help">
        El título es obligatorio y debe tener al menos 3 caracteres.
      </p>

      <label htmlFor="title">Título</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Ej. Repasar los hooks"
        minLength={3}
        autoComplete="off"
        value={inputValue.title}
        onChange={(e) => dispatchInputValue({ title: e.target.value })}
      />

      <label htmlFor="subject">Materia</label>
      <select
        id="subject"
        name="subject"
        value={inputValue.subject}
        onChange={(e) => dispatchInputValue({ subject: e.target.value as SubjectId })}
      >
        <option value="programacion">Programación</option>
        <option value="matematicas">Matemáticas</option>
        <option value="historia">Historia</option>
      </select>

      <p className="form-error" role="alert"></p>

      <button type="submit" className="submit-button" onClick={handleAddStudy}>
        Agregar tarea
      </button>
    </form>
  )
}
