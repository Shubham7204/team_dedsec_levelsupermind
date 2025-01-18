import BlogGenerator from "@/components/BlogGenerator"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Generator and Translator</h1>
      <BlogGenerator />
    </div>
  )
}