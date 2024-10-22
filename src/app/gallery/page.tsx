'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import graphic from '@/public/images/gallery_hero_image.png';




const eventImages = [ //1st set of images 
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12166189/pexels-photo-12166189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const newEventImages = [ //2nd set of images
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/27138663/pexels-photo-27138663/free-photo-of-a-tree-in-a-field-with-grass-and-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const additionalEventImages1 = [ //3rd set of images
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const additionalEventImages2 = [ //4th set of images
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/19758092/pexels-photo-19758092/free-photo-of-a-small-building-on-a-hill-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]


const generatePastEvents = (start: number, count: number, imageArray: string[]) => {
    return Array.from({ length: count }, (_, i) => ({
        id: start + i,
        image: imageArray[i % imageArray.length],
    }))
}

const initialPastEvents = generatePastEvents(1, 12, eventImages)

const videoData = [
    { id: 1, src: "https://videos.pexels.com/video-files/4208097/4208097-hd_1920_1080_25fps.mp4", poster: "/placeholder.svg?height=400&width=600&text=IEEE Event Highlights 1" },
    { id: 2, src: "https://videos.pexels.com/video-files/19942428/19942428-uhd_2560_1440_30fps.mp4", poster: "/placeholder.svg?height=400&width=600&text=IEEE Event Highlights 2" },
    { id: 3, src: "/path-to-video-3.mp4", poster: "/placeholder.svg?height=400&width=600&text=IEEE Event Highlights 3" },
    { id: 4, src: "/path-to-video-4.mp4", poster: "/placeholder.svg?height=400&width=600&text=IEEE Event Highlights 4" },
    { id: 5, src: "/path-to-video-5.mp4", poster: "/placeholder.svg?height=400&width=600&text=IEEE Event Highlights 5" },
]

const TypingAnimation = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('')

    useEffect(() => {
        let i = 0
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [text])

    return (
        <motion.h2
            className="text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
        </motion.h2>
    )
}

export default function EventsPage() {
    const [pastEvents, setPastEvents] = useState(initialPastEvents)
    const [clickCount, setClickCount] = useState(0)
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const [text, setText] = useState('')
    const fullText = 'Welcome to IEEE Gallery'

    useEffect(() => {
        let i = 0
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1))
                i++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [])

    const handleSeeMore = () => {
        const newClickCount = clickCount + 1
        setClickCount(newClickCount)

        let imageArray;
        switch (newClickCount) {
            case 1:
                imageArray = newEventImages;
                break;
            case 2:
                imageArray = additionalEventImages1;
                break;
            case 3:
                imageArray = additionalEventImages2;
                break;

            default:
                imageArray = eventImages; // Default to the first set if out of bounds
        }

        const newEvents = generatePastEvents(pastEvents.length + 1, 10, imageArray)
        setPastEvents([...pastEvents, ...newEvents])
    }

    const handlePrevVideo = () => {
        setDirection(-1)
        setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1))
    }

    const handleNextVideo = () => {
        setDirection(1)
        setCurrentVideoIndex((prevIndex) => Math.min(videoData.length - 1, prevIndex + 1))
    }

    return (
        <div className="w-full">
            <section className="relative w-full h-[70vh] mb-12">
                <Image
                    src={graphic}
                    alt="IEEE Gallery Hero"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-40"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {text}
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-center max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                    >
                        Have a glimpse of Past IEEE events here
                    </motion.p>
                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-16 mx-auto">
                <AnimatePresence>
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl w-full max-w-sm mx-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <img src={event.image} alt={`Event ${event.id}`} className="w-full h-48 object-cover" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {clickCount < 3 && (
                <motion.div
                    className="flex justify-center mt-8 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button onClick={handleSeeMore} variant="outline" size="lg">
                        See More
                    </Button>
                </motion.div>
            )}
        </div>
    )
}
