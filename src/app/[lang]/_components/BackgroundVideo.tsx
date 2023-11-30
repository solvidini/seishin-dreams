export const BackgroundVideo = () => {
  return (
    <div className='relative z-0 w-full h-screen opacity-50'>
      <video autoPlay muted loop playsInline className='w-full h-full object-cover absolute inset-0'>
        <source src='/zen2.mp4' type='video/mp4' />
      </video>
    </div>
  );
};
