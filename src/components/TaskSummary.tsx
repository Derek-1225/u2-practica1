export function TaskSummary({ total, pending, done }: { total: number, pending: number, done: number }) {
  return (
    <dl className="summary">
      <div>
        <dt>Total</dt>
        <dd>{total}</dd>
      </div>
      <div>
        <dt>Pendientes</dt>
        <dd>{pending}</dd>
      </div>
      <div>
        <dt>Completadas</dt>
        <dd>{done}</dd>
      </div>
    </dl>
  )
}
