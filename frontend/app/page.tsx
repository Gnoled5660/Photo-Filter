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
      <main className="flex-1 flex flex-col items-center bg-dots text-center">
        <section>
          <h1 className="items-center text-cente font-story font-semibold text-8xl">Photo Editor</h1>
          <p className="font-story text-xl"> Here you can edit your photos and add vintage looks!</p>
          <a href="/editor" className="inline-flex px-8 py-3 rounded-full transition active:scale-95 cursor-pointer bg-gray-950 hover:bg-gray-800 text-amber-50 font-bold">Edit now!</a>
        </section>

        <section>Examples
        </section>
      </main>

      <footer className="mt-auto flex flex-col justify-between px-5">
        <p>All rights reseverd ig</p>
        <p></p>
      </footer>
    </div>
  );
}