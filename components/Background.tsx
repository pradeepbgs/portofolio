function rngFactory(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 4294967296;
  };
}

function generateStars(count: number) {
  const rng = rngFactory(42);
  return Array.from({ length: count }, () => ({
    x: rng() * 100,
    y: rng() * 60,
    r: rng() * 1.4 + 0.3,
    op: rng() * 0.55 + 0.15,
    dur: rng() * 3 + 2,
    delay: rng() * 7,
  }));
}

function generateFireflies(count: number) {
  const rng = rngFactory(99);
  return Array.from({ length: count }, () => ({
    x: rng() * 98 + 1,
    y: 62 + rng() * 10, // near treeline, as % of viewport
    dur: rng() * 4 + 3,
    delay: rng() * 8,
  }));
}

export default function Background() {
  const stars = generateStars(120);
  const fireflies = generateFireflies(22);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* ── Sky gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #010810 0%, #03111e 25%, #061a2e 55%, #0a2238 78%, #0e2b44 100%)",
        }}
      />

      {/* ── Aurora — green band ── */}
      <div
        className="absolute"
        style={{
          top: "4%",
          left: "-20%",
          width: "140%",
          height: "32%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,210,90,0.06) 30%, rgba(0,255,110,0.13) 55%, rgba(0,200,80,0.05) 80%, transparent 100%)",
          borderRadius: "0 0 60% 60% / 0 0 100% 100%",
          filter: "blur(18px)",
          animation: "aurora1 9s ease-in-out infinite",
        }}
      />

      {/* ── Aurora — teal band ── */}
      <div
        className="absolute"
        style={{
          top: "10%",
          left: "-8%",
          width: "120%",
          height: "24%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,180,210,0.05) 30%, rgba(0,230,200,0.1) 55%, rgba(0,170,190,0.04) 80%, transparent 100%)",
          borderRadius: "0 0 60% 60% / 0 0 100% 100%",
          filter: "blur(24px)",
          animation: "aurora2 13s ease-in-out infinite",
          animationDelay: "1.5s",
        }}
      />

      {/* ── Aurora — violet band ── */}
      <div
        className="absolute"
        style={{
          top: "7%",
          left: "8%",
          width: "125%",
          height: "20%",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(110,55,230,0.04) 30%, rgba(130,65,250,0.08) 55%, rgba(105,50,210,0.03) 80%, transparent 100%)",
          borderRadius: "0 0 60% 60% / 0 0 100% 100%",
          filter: "blur(28px)",
          animation: "aurora3 16s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />

      {/* ── Moon ── */}
      <div
        className="absolute"
        style={{
          top: "7%",
          right: "14%",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 38% 38%, #fffef5 0%, #f5e8b8 55%, #d4c478 100%)",
          animation: "moon-glow 5s ease-in-out infinite",
        }}
      />

      {/* ── Stars + Fireflies SVG ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stars */}
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill="white"
            opacity={s.op}
            style={{
              animation: `twinkle ${s.dur}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        {/* Fireflies */}
        {fireflies.map((f, i) => (
          <circle
            key={`ff-${i}`}
            cx={`${f.x}%`}
            cy={`${f.y}%`}
            r="1.4"
            fill="#7effa0"
            style={{
              filter: "drop-shadow(0 0 3px rgba(100, 255, 150, 0.9))",
              animation: `firefly ${f.dur}s ease-in-out infinite`,
              animationDelay: `${f.delay}s`,
            }}
          />
        ))}
      </svg>

      {/* ── Horizon/treeline glow ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "55%",
          background:
            "linear-gradient(to top, rgba(4, 40, 18, 0.28) 0%, rgba(4, 40, 18, 0.1) 40%, transparent 100%)",
        }}
      />

      {/* ── Mist at tree line ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "180px",
          background:
            "linear-gradient(to top, rgba(2, 12, 24, 0.65) 0%, rgba(2, 12, 24, 0.2) 50%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* ── Forest layer 1 — far/misty ── */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "280px" }}
      >
        <path
          d="M0,280 L0,218 L22,180 L44,218 L66,162 L88,218 L110,182 L132,218
             L154,155 L176,218 L198,174 L220,218 L242,160 L264,218 L286,178
             L308,218 L330,152 L352,218 L374,170 L396,218 L418,164 L440,218
             L462,176 L484,218 L506,155 L528,218 L550,172 L572,218 L594,160
             L616,218 L638,178 L660,218 L682,152 L704,218 L726,168 L748,218
             L770,158 L792,218 L814,175 L836,218 L858,155 L880,218 L902,170
             L924,218 L946,162 L968,218 L990,178 L1012,218 L1034,152 L1056,218
             L1078,168 L1100,218 L1122,158 L1144,218 L1166,174 L1188,218
             L1210,155 L1232,218 L1254,170 L1276,218 L1298,162 L1320,218
             L1342,178 L1364,218 L1386,155 L1408,218 L1430,168 L1440,218
             L1440,280 Z"
          fill="rgba(6, 18, 38, 0.72)"
        />
      </svg>

      {/* ── Forest layer 2 — mid distance ── */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "280px" }}
      >
        <path
          d="M0,280 L0,238 L20,160 L41,238 L61,135 L82,238 L102,168 L123,238
             L143,118 L164,238 L184,152 L205,238 L225,142 L246,238 L266,170
             L287,238 L307,115 L328,238 L348,148 L369,238 L389,138 L410,238
             L430,165 L451,238 L471,122 L492,238 L512,145 L533,238 L553,135
             L574,238 L594,160 L615,238 L635,118 L656,238 L676,150 L697,238
             L717,140 L738,238 L758,168 L779,238 L799,112 L820,238 L840,142
             L861,238 L881,130 L902,238 L922,158 L943,238 L963,120 L984,238
             L1004,148 L1025,238 L1045,135 L1066,238 L1086,162 L1107,238
             L1127,118 L1148,238 L1168,145 L1189,238 L1209,138 L1230,238
             L1250,158 L1271,238 L1291,115 L1312,238 L1332,148 L1353,238
             L1373,132 L1394,238 L1414,165 L1440,238 L1440,280 Z"
          fill="rgba(3, 12, 26, 0.88)"
        />
      </svg>

      {/* ── Forest layer 3 — close/sharp silhouette ── */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "280px" }}
      >
        <path
          d="M0,280 L0,232 L14,168 L28,232 L44,128 L60,232 L75,158 L90,232
             L108,102 L126,232 L142,148 L158,232 L175,122 L192,232 L210,155
             L228,232 L246,96 L264,232 L280,142 L298,232 L316,128 L334,232
             L352,162 L370,232 L388,108 L406,232 L424,145 L442,232 L460,125
             L478,232 L496,155 L514,232 L532,98 L550,232 L568,142 L586,232
             L604,128 L622,232 L640,160 L658,232 L676,105 L694,232 L712,138
             L730,232 L748,122 L766,232 L784,152 L802,232 L820,99 L838,232
             L856,145 L874,232 L892,125 L910,232 L928,158 L946,232 L964,105
             L982,232 L1000,142 L1018,232 L1036,128 L1054,232 L1072,158
             L1090,232 L1108,102 L1126,232 L1144,145 L1162,232 L1180,122
             L1198,232 L1216,160 L1234,232 L1252,98 L1270,232 L1288,142
             L1306,232 L1324,125 L1342,232 L1360,155 L1378,232 L1396,105
             L1414,232 L1432,148 L1440,232 L1440,280 Z"
          fill="#020c18"
        />
      </svg>
    </div>
  );
}
