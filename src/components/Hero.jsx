import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h1 className="font-bold">
          <Parallax speed={-6}>
            <span className="text-6xl text-indigo-500">Welcome</span>{' '}
            <span className="text-7xl">to</span>{' '}
          </Parallax>
          <Parallax speed={-3}>
            <span className="text-9xl">Moowo</span>
          </Parallax>
        </h1>
        <p className="text-lg">We help brands scale through content & strategy.</p>
      </div>
    </section>
  );
}