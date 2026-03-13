export default function Background() {
  return (
    <>
      <div className="fixed inset-0 z-0 grid-bg pointer-events-none" />
      <div className="fixed inset-0 z-0 noise opacity-[0.018] pointer-events-none" />
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div style={{
          position:'absolute', width:900, height:900, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(37,170,37,0.065), transparent 65%)',
          filter:'blur(110px)', top:'-25%', left:'-18%',
          animation:'floatBlob 24s ease-in-out infinite alternate',
        }}/>
        <div style={{
          position:'absolute', width:650, height:650, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(19,107,19,0.055), transparent 65%)',
          filter:'blur(100px)', top:'40%', right:'-14%',
          animation:'floatBlob 30s ease-in-out infinite alternate-reverse',
        }}/>
      </div>
    </>
  )
}