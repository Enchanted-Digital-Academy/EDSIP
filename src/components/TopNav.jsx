function TopNav() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h1 className="font-display text-brand-black text-lg font-semibold">Student Dashboard</h1>
      <div className="font-body flex items-center gap-3">
        <span className="text-brand-black">Hi, Student</span>
        <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold">
          S
        </div>
      </div>
    </header>
  )
}

export default TopNav