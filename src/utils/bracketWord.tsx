
export default function BracketWord({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        relative inline-block cursor-pointer
        before:content-['['] before:absolute before:-left-5 before:opacity-0
        after:content-[']'] after:absolute after:-right-5 after:opacity-0
        hover:before:opacity-100 hover:after:opacity-100
        before:transition-opacity after:transition-opacity
      "
    >
      {children}
    </span>
  );
}
