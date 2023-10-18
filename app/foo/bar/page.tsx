import Link from "next/link";

export default function FooBarPage() {
  return (
    <div>
      <Link href="/fizz">go to intercepted fizz</Link>
    </div>
  );
}
