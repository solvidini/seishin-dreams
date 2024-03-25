/* To position the background video differently on the mobile devices add: object-[-500px] xs:object-center */
export const BackgroundVideo = () => {
  return (
    <div className='relative z-0 w-full h-screen opacity-70'>
      <video
        autoPlay
        muted
        loop
        playsInline
        className='fade-in w-full -mt-[2%] h-[106%] object-cover absolute inset-0 object-center'
      >
        <source src='/realm-video.mp4' type='video/mp4' />
      </video>
    </div>
  );
};
