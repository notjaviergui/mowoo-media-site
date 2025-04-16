export default function Contact() {
  return (
    <section className="bg-white text-center py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Build with the <span className="text-indigo-600 font-bold">Mowoo Media</span> team
      </h2>
      <div className="flex justify-center">
        <a
          href="/WorkUs"
          className="flex items-center gap-4 bg-indigo-600 text-white text-3xl font-bold px-14 py-7 rounded-full transition-transform duration-200 hover:scale-105 tracking-wide shadow-lg"
        >
          <span className="text-white text-3xl font-bold">💼</span>
          Work with us
        </a>
      </div>
    </section>
  );
}