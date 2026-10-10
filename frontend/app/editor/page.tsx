export default function Home() {
  return (
<div className="flex flex-col min-h-screen">
    <header className="flex justify-between items-center border-b py-3 px-5">
        <a href="/" className="hover:text-gray-600 transition">Home</a>
        <nav className="flex gap-5">
          <a href="/editor" className="hover:text-gray-600 transition"> Start Editing</a>
          <a href="/motivation" className="hover:text-gray-600 transition">Motivation</a>
          <a href="/dev" className="hover:text-gray-600 transition">Dev</a>
      </nav>
      </header>
      <main className="main-page">
        <header>Edit Here</header>
        <section></section> 
      </main>
    </div>
  );
}