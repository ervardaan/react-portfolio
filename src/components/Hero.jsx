import vardaankapoor from '../assets/about/vardaankapoor.jpg'

export default function Hero() {
  return (
    <header className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-black">
        <img src={vardaankapoor} alt="Vardaan Kapoor" className="mx-auto mb-4 rounded-full" style={{ width: 150, height: 150 }} />
        <p className="text-lg md:text-xl mb-6">I build simple, useful web things with React.</p>
        <a href="#projects" className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white">See my work</a>
      </div>
    </header>
  )
}
