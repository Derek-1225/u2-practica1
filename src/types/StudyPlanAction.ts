import { type StudyPlan } from "./StudyPlanType";
export type StudyPlanAction =
| {type: "ADD";item:StudyPlan}
| {type: "STATUS";id:string}
| {type: "DELETE";id:string}