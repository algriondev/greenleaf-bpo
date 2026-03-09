export default function Background() {
  return (
    <>
      {/* Grid */}
      <div className="fixed inset-0 z-0 grid-bg pointer-events-none" />

      {/* Noise */}
      <div className="fixed inset-0 z-[1] noise-overlay opacity-[0.025] pointer-events-none" />

      {/* Aurora blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full animate-float"
          style={{
            width: 700, height: 700,
            background: 'radial-gradient(circle, #2eb82e, transparent)',
            filter: 'blur(120px)', opacity: 0.12,
            top: '-20%', left: '-10%',
            animationDuration: '20s',
          }}
        />
        <div
          className="absolute rounded-full animate-float"
          style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, #1a5c1a, transparent)',
            filter: 'blur(120px)', opacity: 0.12,
            top: '40%', right: '-15%',
            animationDuration: '25s',
            animationDelay: '-5s',
          }}
        />
        <div
          className="absolute rounded-full animate-float"
          style={{
            width: 400, height: 400,
            background: 'radial-gradient(circle, #e63b2e, transparent)',
            filter: 'blur(120px)', opacity: 0.06,
            bottom: '-10%', left: '30%',
            animationDuration: '22s',
            animationDelay: '-10s',
          }}
        />
      </div>
    </>
  )
}
