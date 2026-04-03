export default function Background() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Base */}
      <div className="absolute inset-0" style={{ background: "#0a0a0a" }} />

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Green orb — top right */}
      <div
        className="absolute"
        style={{
          top: "-15%",
          right: "-12%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.03) 50%, transparent 70%)",
          animation: "float-orb 9s ease-in-out infinite",
        }}
      />

      {/* Purple orb — bottom left */}
      <div
        className="absolute"
        style={{
          bottom: "-20%",
          left: "-12%",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 70%)",
          animation: "float-orb-slow 13s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,222,128,0.04) 0%, transparent 100%)",
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
    </div>
  );
}
