
const Background = () => {
  return (
    <div className="z-0 absolute w-full h-full overflow-hidden min-h-screen pointer-events-none">
    <div className="absolute top-0 -left-44 w-[500px] h-[500px] bg-red-700 opacity-15 rounded-full blur-3xl"></div>
    <div className="absolute -top-44 left-64 w-[500px] h-[500px] bg-green-700 opacity-5 rounded-full blur-3xl"></div>
    <div className="absolute top-16 -right-44 w-[500px] h-[500px] bg-blue-700 opacity-10 rounded-full blur-3xl"></div>
  </div>
  )
}

export default Background
