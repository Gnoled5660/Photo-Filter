export default function Home() {
  return (
    <div className="flex">
      <nav>
        <a href="">Home</a>
      </nav>
      <main className="flex">
        <section>
          <h1>Title</h1>
          <p> Description</p>
          <a href="/editor">Edit now!</a>
        </section>

        <section>
          Beispiele
        </section>
      </main>

      <footer>     
        <p>All rights reseverd ig</p>
      </footer>
    </div>
  );
}