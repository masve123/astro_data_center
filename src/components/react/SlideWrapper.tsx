import clsx from "clsx";

export function SlideWrapper(props: {
  index: number;
  hovering: number | null;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "absolute w-full transition-all duration-300",
        props.hovering === props.index ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {props.children}
    </div>
  );
}

export default SlideWrapper;