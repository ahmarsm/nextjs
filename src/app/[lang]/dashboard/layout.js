export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside style={{ width: "200px", background: "#eee", padding: "20px" }}>
        <h3>Dashboard Menu</h3>
        <p>Dashboard</p>
        <p>Profile</p>
        <p>Settings</p>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}