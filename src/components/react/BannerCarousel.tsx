import React from "react";
import { motion, useAnimation } from "framer-motion";

interface Banner {
    title: string;
    description: string;
}

interface BannerCarouselProps {
    banners: Banner[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({
            x: [-100 * banners.length, 0],
            transition: { duration: 10 * banners.length, ease: "linear", repeat: Infinity },
        });
    }, [controls, banners.length]);

    return (
        <motion.div className="flex overflow-hidden" initial={{ x: 0 }} animate={controls}>
            <div className="whitespace-nowrap">
                {banners.map((banner, index) => (
                    <motion.div key={index} className="inline-block space-x-4">
                        {/* Render your banner content here */}
                        <div className="flex gap-4">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
                                <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
                                    <img className="h-12 w-12 rounded-full" src="./images/avatars/avatar.webp" alt="user avatar" width="400" height="400" loading="lazy" />
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700 dark:text-white">Daniella Doe</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default BannerCarousel;
