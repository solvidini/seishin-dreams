export const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      className='w-full h-[240px] sm:w-[560px] sm:h-[315px]'
      src={`https://www.youtube.com/embed/${videoId}`}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
  );
};
