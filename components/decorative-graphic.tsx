export default function DecorativeGraphic() {
  return (
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-in zoom-in duration-1000"
    >
      {/* Organic, flowing shape inspired by the reference */}
      <path
        d="M120 20C140 20 155 35 155 55C155 70 145 82 145 95C145 108 155 115 165 125C175 135 185 145 185 165C185 185 170 200 150 200C130 200 115 185 105 175C95 165 80 160 70 155C60 150 50 140 45 125C40 110 40 95 50 80C60 65 75 55 90 50C105 45 115 35 115 20"
        fill="oklch(0.65 0.18 35)"
        stroke="oklch(0.55 0.16 35)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85 70C95 60 105 55 120 55C135 55 145 65 150 75"
        stroke="oklch(0.55 0.16 35)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="130" cy="95" r="18" fill="oklch(0.65 0.18 35)" stroke="oklch(0.55 0.16 35)" strokeWidth="6" />
      <circle cx="100" cy="120" r="15" fill="oklch(0.65 0.18 35)" stroke="oklch(0.55 0.16 35)" strokeWidth="6" />
      <path
        d="M75 100C80 90 90 85 100 90C110 95 115 105 115 115"
        stroke="oklch(0.55 0.16 35)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
