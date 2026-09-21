export default function Arrow({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 9h15M10 3l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}
