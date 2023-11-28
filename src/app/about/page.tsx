import Image from 'next/image';

export default function About() {
  return (
    <main className='min-h-screen mb-4 max-w-[900px] flex flex-col items-center gap-6 p-4 md:p-6 text-justify mx-auto'>
      <h3 className='text-xl md:self-start'>About Us</h3>
      <Image src='/betta-fish.png' alt='Betta Fish' width={300} height={225} priority />
      <article className='flex flex-col gap-4'>
        <p>
          Welcome to Seishin Dreams - where creativity knows no bounds! 🎨 ✨ We&apos;re a passionate team dedicated to
          bringing imagination to life. From enchanting tales and vibrant coloring books to mesmerizing music and
          stunning print designs, our creations are born from a place of endless inspiration.
        </p>
        <p>
          At Seishin Dreams, we believe in the power of creativity to spark joy and ignite imaginations. Every project
          we undertake is fueled by our commitment to crafting immersive experiences that captivate and inspire.
        </p>
        <p>
          Join us on this magical journey where stories come alive, colors dance, and dreams find their wings. Explore
          our world of boundless creativity and let your imagination soar with Seishin Dreams. 🌟 🌌
        </p>
      </article>
    </main>
  );
}
