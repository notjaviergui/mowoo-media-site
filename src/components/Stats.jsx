import flowerIcon from '../assets/flower.svg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';

const stats = [
  {
    value: 500000,
    suffix: "",
    prefix: "$",
    description: "in revenue\ngenerated last year",
  },
  {
    value: 75000,
    suffix: "",
    prefix: "$",
    description: "of monthly ad\nspend managed",
  },
  {
    value: 5.7,
    suffix: "%",
    prefix: "",
    description: "average CVR on\nour websites",
  },
  {
    value: 10,
    suffix: "%",
    prefix: "-",
    description: "average\nCAC reduction",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-black py-20 text-white border-y border-dotted border-gray-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center px-6">
        {stats.map((stat, index) => (
          <Parallax speed={-5} key={index}>
            <div className="flex flex-col items-center space-y-4">
              <img src={flowerIcon} alt="Icon" className="w-6 h-6" />
              <h3 className="text-4xl font-semibold">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={3}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  `${stat.prefix}0${stat.suffix}`
                )}
              </h3>
              <hr className="border-dotted border-t border-gray-600 w-full max-w-[140px]" />
              <p className="text-sm whitespace-pre-line text-gray-300">{stat.description}</p>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}