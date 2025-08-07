export function Logo() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="relative p-2 sm:p-3 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300">
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <g transform="translate(12,12)">
            <circle
              cx="0"
              cy="0"
              r="1.2"
              fill="currentColor"
              fillOpacity="0.7"
            />

            <path
              d="M0,-4.5 C-0.8,-3.2 -0.8,-1.8 0,-1.5 C0.8,-1.8 0.8,-3.2 0,-4.5z"
              fill="currentColor"
              fillOpacity="0.5"
            />
            <path
              d="M0,-4.5 C-0.8,-3.2 -0.8,-1.8 0,-1.5 C0.8,-1.8 0.8,-3.2 0,-4.5z"
              fill="currentColor"
              fillOpacity="0.5"
              transform="rotate(72)"
            />
            <path
              d="M0,-4.5 C-0.8,-3.2 -0.8,-1.8 0,-1.5 C0.8,-1.8 0.8,-3.2 0,-4.5z"
              fill="currentColor"
              fillOpacity="0.5"
              transform="rotate(144)"
            />
            <path
              d="M0,-4.5 C-0.8,-3.2 -0.8,-1.8 0,-1.5 C0.8,-1.8 0.8,-3.2 0,-4.5z"
              fill="currentColor"
              fillOpacity="0.5"
              transform="rotate(216)"
            />
            <path
              d="M0,-4.5 C-0.8,-3.2 -0.8,-1.8 0,-1.5 C0.8,-1.8 0.8,-3.2 0,-4.5z"
              fill="currentColor"
              fillOpacity="0.5"
              transform="rotate(288)"
            />

            <circle
              cx="0"
              cy="0"
              r="0.6"
              fill="currentColor"
              fillOpacity="0.4"
            />
            <circle cx="0" cy="0" r="0.3" fill="currentColor" />
          </g>

          <g transform="translate(6,6)">
            <circle
              cx="0"
              cy="0"
              r="0.8"
              fill="currentColor"
              fillOpacity="0.4"
            />
            <path
              d="M0,-2 C-0.4,-1.2 -0.4,-0.8 0,-0.5 C0.4,-0.8 0.4,-1.2 0,-2z"
              fill="currentColor"
              fillOpacity="0.6"
            />
            <path
              d="M0,-2 C-0.4,-1.2 -0.4,-0.8 0,-0.5 C0.4,-0.8 0.4,-1.2 0,-2z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(72)"
            />
            <path
              d="M0,-2 C-0.4,-1.2 -0.4,-0.8 0,-0.5 C0.4,-0.8 0.4,-1.2 0,-2z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(144)"
            />
            <path
              d="M0,-2 C-0.4,-1.2 -0.4,-0.8 0,-0.5 C0.4,-0.8 0.4,-1.2 0,-2z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(216)"
            />
            <path
              d="M0,-2 C-0.4,-1.2 -0.4,-0.8 0,-0.5 C0.4,-0.8 0.4,-1.2 0,-2z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(288)"
            />
          </g>

          <g transform="translate(18,8)">
            <circle
              cx="0"
              cy="0"
              r="0.6"
              fill="currentColor"
              fillOpacity="0.4"
            />
            <path
              d="M0,-1.5 C-0.3,-1 -0.3,-0.6 0,-0.3 C0.3,-0.6 0.3,-1 0,-1.5z"
              fill="currentColor"
              fillOpacity="0.6"
            />
            <path
              d="M0,-1.5 C-0.3,-1 -0.3,-0.6 0,-0.3 C0.3,-0.6 0.3,-1 0,-1.5z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(72)"
            />
            <path
              d="M0,-1.5 C-0.3,-1 -0.3,-0.6 0,-0.3 C0.3,-0.6 0.3,-1 0,-1.5z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(144)"
            />
            <path
              d="M0,-1.5 C-0.3,-1 -0.3,-0.6 0,-0.3 C0.3,-0.6 0.3,-1 0,-1.5z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(216)"
            />
            <path
              d="M0,-1.5 C-0.3,-1 -0.3,-0.6 0,-0.3 C0.3,-0.6 0.3,-1 0,-1.5z"
              fill="currentColor"
              fillOpacity="0.6"
              transform="rotate(288)"
            />
          </g>

          <path
            d="M12 16.5 Q10 18 8 20"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />

          <path
            d="M10 17 C9 17.5 9 18.5 10 19 C10.5 18.5 10.5 17.5 10 17z"
            fill="currentColor"
            fillOpacity="0.4"
          />
          <path
            d="M9 19 C8.5 19.5 8.5 20.5 9 21 C9.5 20.5 9.5 19.5 9 19z"
            fill="currentColor"
            fillOpacity="0.3"
          />

          <g opacity="0.7">
            <circle cx="19" cy="5" r="0.4" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="20.5" cy="6.5" r="0.3" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.8;0.3;0.8"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="18.5" cy="7" r="0.35" fill="currentColor">
              <animate
                attributeName="opacity"
                values="0.5;0.9;0.5"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>

        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white/50 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-full bg-white/30 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1 left-1 w-1 h-1 bg-white/70 rounded-full"></div>
        <div className="absolute bottom-1 right-2 w-0.5 h-0.5 bg-white/60 rounded-full group-hover:animate-pulse"></div>
      </div>
      <div>
        <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
          FragranceMatch
        </h1>
        <p className="text-xs text-gray-500 font-medium hidden sm:block">
          Encontre sua fragrância perfeita
        </p>
      </div>
    </div>
  )
}
