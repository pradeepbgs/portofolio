export default function Footer() {
  return (
    <footer
      className="flex justify-center items-center h-16 mt-8"
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
    >
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: "rgba(255, 255, 255, 0.18)" }}
      >
        pradeep · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
