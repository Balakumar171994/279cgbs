import { useId } from 'react'

// Simplified round country flags (emoji flags don't render on Windows)
const flags = {
  in: (
    <>
      <rect width="24" height="8" fill="#FF9933" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect y="16" width="24" height="8" fill="#138808" />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="#000080" strokeWidth="0.9" />
    </>
  ),
  us: (
    <>
      <rect width="24" height="24" fill="#FFFFFF" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 3.69} width="24" height="1.85" fill="#B22234" />
      ))}
      <rect width="11" height="12.9" fill="#3C3B6E" />
    </>
  ),
  ae: (
    <>
      <rect width="24" height="8" fill="#00732F" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
      <rect y="16" width="24" height="8" fill="#000000" />
      <rect width="7" height="24" fill="#FF0000" />
    </>
  ),
  sg: (
    <>
      <rect width="24" height="12" fill="#EF3340" />
      <rect y="12" width="24" height="12" fill="#FFFFFF" />
      <circle cx="7" cy="6.2" r="3.6" fill="#FFFFFF" />
      <circle cx="8.5" cy="6.2" r="3.3" fill="#EF3340" />
      {[
        [12.4, 3.6],
        [14.4, 5.1],
        [13.6, 7.5],
        [11.2, 7.5],
        [10.4, 5.1],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.7" fill="#FFFFFF" />
      ))}
    </>
  ),
  my: (
    <>
      <rect width="24" height="24" fill="#FFFFFF" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 3.43} width="24" height="1.71" fill="#CC0001" />
      ))}
      <rect width="12" height="13.7" fill="#010066" />
      <circle cx="5.2" cy="6.9" r="3.6" fill="#FFCC00" />
      <circle cx="6.3" cy="6.9" r="3.1" fill="#010066" />
      <circle cx="9.3" cy="6.9" r="1.4" fill="#FFCC00" />
    </>
  ),
}

export default function Flag({ code, className = '' }) {
  // useId gives ":r0:"-style ids; colons can break url(#...) references
  const clipId = `flag${useId().replace(/:/g, '')}`
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <clipPath id={clipId}>
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>{flags[code]}</g>
    </svg>
  )
}
