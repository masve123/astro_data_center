import { motion } from 'framer-motion';

interface Banner {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface BannerCarouselProps {
  banners: Banner[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const bannerWidth = 200; // Width of each banner, you can adjust as needed

  // The animation sequence for the banners
  const bannerAnimation = {
    animate: {
      x: [0, -bannerWidth * (banners.length - 1)], // Change here to ensure it does not move past the last image
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: banners.length * 2, // Duration could be adjusted to control the speed
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap"
      initial={{ x: 0 }}
    >
      <motion.div
        className="flex"
        {...bannerAnimation.animate}
      >
        {banners.map((banner, index) => (
          <motion.div
            key={index}
            className="inline-flex flex-col items-center"
            style={{ minWidth: `${bannerWidth}px` }} // Apply the width to each banner
          >
            <img src={banner.image} alt={banner.alt} className="mb-4 h-full w-full object-cover" />
            <h2 className="text-lg font-bold">{banner.title}</h2>
            <p className="text-sm font-medium">{banner.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BannerCarousel;
