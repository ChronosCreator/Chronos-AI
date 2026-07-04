import UserMenu from "./UserMenu";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-white/5 backdrop-blur-xl border-b border-white/10">

      <h1 className="text-2xl font-bold">
        Chronos AI
      </h1>

      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>

      <UserMenu />

    </nav>
  );
}