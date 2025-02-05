import Link from "next/link";

export function Logo() {
  return (
    <Link
      href={"/"}
      className="font-extrabold text-xl border-2 border-black/50 w-40 px-2 py-2"
    >
      ECOM-BASE
    </ Link>
  );
}