import BlogGenerator from "@/components/BlogGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Blog Generator and Translator
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Create and translate blogs effortlessly.
          </p>
        </header>
        <section>
          <BlogGenerator />
        </section>
      </div>
    </main>
  );
}