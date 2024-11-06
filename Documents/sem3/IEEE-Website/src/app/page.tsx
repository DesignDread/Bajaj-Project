"use client"
import { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Users, Lightbulb, ChevronRight, Menu, Code, Globe, Award, Zap, BookOpen, Users2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValue, useSpring, useVelocity, useAnimationFrame, wrap } from 'framer-motion'

interface SponsorsCarouselProps {
  sponsors: string[];
}

function SponsorsCarousel({ sponsors }: SponsorsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sponsorsPerPage = 4

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + sponsorsPerPage >= sponsors.length) ? 0 : prevIndex + sponsorsPerPage
      )
    }, 5000)
    return () => clearInterval(timer)
  }, [sponsors.length])

  return (
    <div className="relative overflow-hidden h-40">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / sponsorsPerPage)}%)` }}
      >
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex-none w-1/4 px-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 h-32 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">{sponsor}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ParallaxText({ children, baseVelocity = 100 }: { children: ReactNode, baseVelocity?: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

export default function Page() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-foreground">
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-24 relative min-h-[90vh] flex items-center justify-center">
          <motion.div style={{ y }} className="absolute inset-0 -z-10">
            <Image
              src=""
              alt="Technology Background"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </motion.div>
          <div className="text-center relative z-10">
            <motion.h1 
              className="text-6xl font-extrabold tracking-tight lg:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Innovate. Create. Inspire.
            </motion.h1>
            <motion.p 
              className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Join IEEE CIET and be part of a global community driving technological innovation for humanity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full">
                Get Started
              </Button>
            </motion.div>
          </div>
        </section>
        
        <ParallaxText baseVelocity={-5}>Innovate • Create • Inspire • IEEE CIET •</ParallaxText>
        
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Join IEEE CIET?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Network", description: "Connect with tech enthusiasts worldwide" },
              { icon: Code, title: "Hands-on Projects", description: "Work on cutting-edge technologies" },
              { icon: Award, title: "Recognition", description: "Showcase your skills and win accolades" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 inline-block mb-4">
                        <item.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <Button variant="ghost" className="mt-4">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          <Tabs defaultValue="workshops" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
              <TabsTrigger value="webinars">Webinars</TabsTrigger>
            </TabsList>
            <TabsContent value="workshops">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['AI Workshop', 'IoT Seminar', 'Blockchain Basics'].map((event, index) => (
                  <motion.div
                    key={event}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                      <Image src={``} width={400} height={200} alt={event} className="w-full object-cover" />
                      <CardContent className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{event}</h3>
                          <p className="text-sm text-muted-foreground mb-4">Join us for an exciting workshop on cutting-edge technology.</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CalendarDays className="h-4 w-4" />
                            <span>July {20 + index}, 2023</span>
                          </div>
                          <Badge>New</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="hackathons">
              <div className="text-center text-muted-foreground">
                Hackathon details coming soon...
              </div>
            </TabsContent>
            <TabsContent value="webinars">
              <div className="text-center text-muted-foreground">
                Webinar schedule to be announced...
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="mb-24 relative py-16">
          <div className="absolute inset-0 -z-10">
            <Image
              src=""
              alt="Technology Background"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </div>
          <h2 className="text-4xl font-bold mb-12 text-center relative z-10">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Users, title: "Active Members", count: "500+" },
              { icon: Lightbulb, title: "Innovative Projects", count: "50+" },
              { icon: CalendarDays, title: "Events Organized", count: "100+" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <item.icon className="h-16 w-16 mb-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-5xl font-bold mb-2">{item.count}</h3>
                    <p className="text-muted-foreground">{item.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Smart City Solution', description: 'IoT-based urban management system for efficient resource allocation.' },
              { title: 'AI-Powered Healthcare', description: 'Machine learning-driven predictive diagnosis for improved healthcare outcomes.' }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <Image src={``} width={600} height={400} alt={project.title} className="w-full object-cover" />
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                    <Button variant="outline" className="group mt-4">
                      Learn More 
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Joining IEEE CIET</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Career Boost", description: "Enhance your professional profile and job prospects" },
              { icon: Users2, title: "Networking", description: "Connect with industry leaders and like-minded peers" },
              { icon: BookOpen, title: "Resources", description: "Access to vast technical literature and educational content" },
              { icon: Globe, title: "Global Exposure", description: "Participate in international conferences and events" },
              { icon: Award, title: "Recognition", description: "Opportunities for awards and scholarships" },
              { icon: Lightbulb, title: "Innovation", description: "Contribute to cutting-edge research and development" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-4 mb-4">
                      <benefit.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground flex-grow">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Sponsors</h2>
          <SponsorsCarousel sponsors={['Sponsor A', 'Sponsor B', 'Sponsor C', 'Sponsor D', 'Sponsor E', 'Sponsor F', 'Sponsor G', 'Sponsor H']} />
        </section>
        
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center">Join Our Community</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white rounded-lg p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src=""
                alt="Community Background"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-4">Ready to make an impact?</h3>
              <p className="text-xl mb-8">Become a part of IEEE CIET and contribute to groundbreaking technological advancements.</p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 rounded-full">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}