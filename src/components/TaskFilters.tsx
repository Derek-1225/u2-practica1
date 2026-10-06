const filters = [
  { id: "all", label: "Todas" },
  { id: "pending", label: "Pendientes" },
  { id: "done", label: "Completadas" },
] as const

type FilterId = typeof filters[number]["id"]

export function TaskFilters({
  filter,
  setFilter,
}: {
  filter: FilterId
  setFilter: React.Dispatch<React.SetStateAction<FilterId>>
}) {
  return (
    <div className="filters" role="group" aria-label="Filtrar tareas">
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          className={filter === f.id ? "filter is-active" : "filter"}
          onClick={() => setFilter(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
