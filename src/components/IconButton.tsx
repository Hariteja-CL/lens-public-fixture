export function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="icon-btn btn btn-ghost" onClick={onClick}>
      <svg width="16" height="16" aria-hidden="true"><path d="M2 2h12v12H2z" /></svg>
    </button>
  );
}
