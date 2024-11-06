'use client';

import { motion } from 'framer-motion';

const events = [
    {
        id: 1,
        title: 'AI Workshop',
        date: '2023-07-15',
        description: 'Learn about the latest advancements in AI',
    },
    {
        id: 2,
        title: 'Robotics Seminar',
        date: '2023-08-01',
        description: 'Explore the world of robotics and automation',
    },
    {
        id: 3,
        title: 'Web Development Bootcamp',
        date: '2023-08-15',
        description: 'Master modern web development techniques',
    },
];

export default function EventsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.h1
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Upcoming Events
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.5,
                        }}
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            {event.title}
                        </h2>
                        <p className="mb-4">{event.description}</p>
                        <p className="text-sm text-muted-foreground">
                            Date: {event.date}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
