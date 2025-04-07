import flowerIcon from '../assets/flower.svg';

const stats = [
  {
    value: "$900M",
    description: "in revenue\ngenerated last year",
  },
  {
    value: "$10M",
    description: "of monthly ad\nspend managed",
  },
  {
    value: "6.7%",
    description: "average CVR on\nour websites",
  },
  {
    value: "-21%",
    description: "average\nCAC reduction",
  },
];

export default function Stats() {
  return (
    <section className="bg-black py-20 text-white border-y border-dotted border-gray-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <img src={flowerIcon} alt="Icon" className="w-6 h-6" />
            <h3 className="text-4xl font-semibold">{stat.value}</h3>
            <hr className="border-dotted border-t border-gray-600 w-full max-w-[140px]" />
            <p className="text-sm whitespace-pre-line text-gray-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}