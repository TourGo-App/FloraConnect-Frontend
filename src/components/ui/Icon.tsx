import type { ReactNode } from "react";

export type IconName =
  | "arrow"
  | "search"
  | "leaf"
  | "people"
  | "basket"
  | "building"
  | "calendar"
  | "close"
  | "menu"
  | "flower";
export default function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    leaf: (
      <>
        <path d="M12 22V10M12 17C3 17 3 9 3 9s9 0 9 8ZM12 13c0-8 8-9 8-9s2 9-8 9ZM12 10C6 5 12 2 12 2s5 4 0 8Z" />
      </>
    ),
    people: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-3a6 6 0 0 1 12 0v3M3 7a3 3 0 0 1 3 5M21 7a3 3 0 0 0-3 5M2 20v-3a4 4 0 0 1 3-4M22 20v-3a4 4 0 0 0-3-4" />
      </>
    ),
    basket: (
      <>
        <path d="M2 3h3l3 13h11l3-9H6M9 7l3-5 4 5" />
        <circle cx="9" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
      </>
    ),
    building: (
      <>
        <path d="m3 7 9-5 9 5H3ZM3 21h18M5 10v8M10 10v8M14 10v8M19 10v8" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="17" rx="2" />
        <path d="M7 2v6M17 2v6M3 11h18M7 15h3M14 15h3" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    flower: (
      <>
        <circle cx="12" cy="10" r="2" />
        <path d="M12 8C5 1 6 13 10 10c-7 5 6 8 4 2 7 3 5-9 0-4 2-8-8-6-2 0ZM12 14v8M12 20l6-4M12 22l-6-4" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
