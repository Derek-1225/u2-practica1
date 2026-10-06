import { useReducer } from "react"
import type { StudyPlan } from "../types/StudyPlanType"
import type { StudyPlanAction } from "../types/StudyPlanAction"

function reducerStudyPlan(state: StudyPlan[], action: StudyPlanAction) {
  switch (action.type) {
    case "ADD":
      return [...state, action.item]

    case "STATUS":
      return state.map(item =>
        item.id === action.id ? { ...item, done: !item.done } : item
      )

    case "DELETE":
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export const useStudyPlan = () => {
  const [studyPlans, dispatchStudyPlan] = useReducer(reducerStudyPlan, [])

  function handleAddStudyPlan(title: string, subject: string) {
    dispatchStudyPlan({
      type: "ADD",
      item: {
        id: crypto.randomUUID(),
        title,
        subject,
        done: false
      }
    })
  }

  function handleStatusTodo(id: string) {
    dispatchStudyPlan({
      type: "STATUS",
      id
    })
  }

  function handleDeleteTodo(id: string) {
    dispatchStudyPlan({
      type: "DELETE",
      id
    })
  }

  return {
    handleAddStudyPlan,
    handleDeleteTodo,
    handleStatusTodo,
    studyPlans
  }
}
