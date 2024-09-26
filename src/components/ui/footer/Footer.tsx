import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/" className="antialiased font-bold">
        <span>Vogue Vault </span>
        <span>| shop </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacy & Legal
      </Link>

      <Link href="/" className="mx-3">
        Locations
      </Link>
    </div>
  );
};
