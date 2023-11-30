export const BackgroundVideo = () => {
  return (
    <div className='relative z-0 w-full h-screen opacity-70'>
      <video autoPlay muted loop playsInline className='w-full h-full object-cover absolute inset-0'>
        <source src='/zen.mp4' type='video/mp4' />
      </video>
    </div>
  );
};
