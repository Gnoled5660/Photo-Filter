export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex justify-between items-center border-b py-3 px-5">
        <a href="/" className="hover:text-gray-600 transition">Home</a>
        <nav className="flex gap-5">
          <a href="/editor" className="hover:text-gray-600 transition"> Start Editing</a>
          <a href="/motivation" className="hover:text-gray-600 transition">Motivation</a>
          <a href="/dev" className="hover:text-gray-600 transition">Dev</a>
      </nav>
      </header>
      <main className="flex flex-col items-center">
        <section>
          <h1>Title</h1>
          <p> Description</p>
          <a href="/editor" className="inline-flex px-8 py-3 rounded-full transition active:scale-95 cursor-pointer bg-gray-950 hover:bg-gray-800 text-amber-50 font-bold">Edit now!</a>
        </section>

        <section>Examples
        </section>
      </main>

      <footer className="mt-auto">
        <p>All rights reseverd ig</p>
      </footer>
    </div>
  );
}