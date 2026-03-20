export default function Footer() {
  return (
    <footer
      className="flex justify-center items-center h-16 mt-8"
      style={{ borderTop: "1px solid rgba(74, 222, 128, 0.07)" }}
    >
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: "rgba(148, 163, 184, 0.35)" }}
      >
        pradeep · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
