export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form
        action="https://formsubmit.co/YOUR_EMAIL_HERE"
        method="POST"
        className="max-w-xl mx-auto space-y-4"
      >
        <input type="text" name="name" placeholder="Name" required className="w-full p-3 border border-gray-300 rounded"/>
        <input type="email" name="email" placeholder="Email" required className="w-full p-3 border border-gray-300 rounded"/>
        <textarea name="message" rows="5" placeholder="Message" required className="w-full p-3 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">Send</button>
      </form>
    </section>
  );
}