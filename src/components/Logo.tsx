export function Logo() {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <img
          src="/assets/logo.svg"
          alt="Fragrance Logo"
          className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
        />
      <div>
        <h1 className="text-lg sm:text-3xl font-light text-foreground">
          Fragrance
        </h1>
      </div>
    </div>
  )
}
