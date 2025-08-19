export function Logo() {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <img
          src="/assets/logo.svg"
          alt="Fragrance Logo"
          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
        />
      <div>
        <h1 className="text-lg sm:text-2xl font-bold text-[#A992BB]">
          Fragrance
        </h1>
        <p className="text-xs text-gray-500 font-medium hidden sm:block">
          Encontre sua fragrância perfeita
        </p>
      </div>
    </div>
  )
}
