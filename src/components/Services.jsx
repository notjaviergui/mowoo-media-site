export default function Services() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        <div className="p-6 bg-white shadow rounded">Social Media Strategy</div>
        <div className="p-6 bg-white shadow rounded">Content Creation</div>
        <div className="p-6 bg-white shadow rounded">Video Production</div>
        <div className="p-6 bg-white shadow rounded">Ad Campaigns</div>
      </div>
    </section>
  );
}