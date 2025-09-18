'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, Eye, ChevronLeft, ChevronRight, CheckCircle, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import YouTubeVideoModal from '@/components/YouTubeVideoModal';

const YOUTUBE_API_KEY = 'AIzaSyDJ7Vk2xU9iHSJ2wvR5-3S8xxnNM0ks6vE'
const CHANNEL_ID = 'UCe_EfhzRmqjyJPQgbNsufSA'

export default function BlogPage() {
  const [videos, setVideos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
        )
        const data = await response.json()
        const formattedVideos = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          excerpt: item.snippet.description,
          author: 'Dr. Senthil Prabhu',
          date: item.snippet.publishedAt,
          readTime: '5 min read',
          category: 'video',
          image: item.snippet.thumbnails.high.url,
          views: Math.floor(Math.random() * 1000) + 500 // Mock views
        }))
        setVideos(formattedVideos)
      } catch (error) {
        console.error('Error fetching YouTube videos:', error)
      }
    }

    fetchVideos()
  }, [])

  // Pagination logic
  const totalPages = Math.ceil(videos.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = videos.slice(startIndex, endIndex)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedVideoId, setSelectedVideoId] = useState<string | undefined>('')
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | undefined>('')

  const handlePageChange = (page: any) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openVideoModal = (videoId: string , videoTitle: string) => {
    //console.log(`https://www.youtube.com/embed/${videoId}?autoplay=1`)
    setSelectedVideoId(videoId)
    setSelectedVideoTitle(videoTitle);
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setSelectedVideoId(undefined)
    setIsVideoModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Health <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Stay informed about digestive health, nutrition tips, and
                medical insights from our expert gastroenterologists and
                healthcare professionals.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            {currentPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                  No videos found
                </h3>
                <p className="text-gray-500">Please check back later.</p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((video:any, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="blog-card group hover:shadow-xl transition-all duration-500 h-full">
                        <CardHeader className="pb-4">
                          <img
                            src={video.image}
                            alt={video.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 w-fit">
                            {video.category}
                          </Badge>
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {video.title}
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {video.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>{video.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {new Date(video.date).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              {/* <Clock className="w-4 h-4" />
                              <span>{video.readTime}</span> */}
                               {/* <Eye className="w-4 h-4" /> */}
                                {/* <span>{video.views}</span> */}
                            </div>
                          </div>

                          {/* <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{video.views}</span>
                              </div>
                            </div>
                          </div> */}

                          {/* <Button 
                            asChild onClick={() => openVideoModal(video.id)}
                            className="w-full btn-primary mt-4"
                          > Watch Video
                            <Link href={`https://www.youtube.com/watch?v=${video.id}`} 
                            target="_blank" rel="noopener noreferrer">
                              Watch Video
                            </Link> 
                          </Button> */}
                          <Button
                            onClick={() => openVideoModal(video.id , video.title)} // Open modal with video ID
                            className="w-full btn-primary mt-4"
                          >
                            Watch Video
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center items-center space-x-2 mt-12"
                  >
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="flex items-center space-x-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Button>

                    <div className="flex space-x-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                          <Button
                            key={page}
                            variant={
                              currentPage === page ? "default" : "outline"
                            }
                            onClick={() => handlePageChange(page)}
                            className="w-10 h-10 p-0"
                          >
                            {page}
                          </Button>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="flex items-center space-x-2"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>
        {/* Enhanced Newsletter Section  */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
          {/* <div className="absolute inset-0 bg-black/10"></div> */}
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <Mail className="w-12 h-12 text-white/90 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Stay Updated with Health Insights
                  </h2>
                </div>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Subscribe to our newsletter for the latest health tips, medical insights, 
                  and updates from our expert team. Get exclusive content delivered to your inbox.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <div className="flex-1 max-w-md w-full">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg"
                      />
                    </div>
                    <Button className="btn-secondary">
                      <Mail className="w-5 h-5 mr-2" />
                      Subscribe Now
                    </Button>
                  </div>
                  {/* <p className="text-sm text-white/70 mt-4">
                    🔒 We respect your privacy. Unsubscribe at any time.
                  </p> */}
                  <p className="text-sm text-white/70 mt-4">
                    🔒 We respect your privacy.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-white/80">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Weekly Health Tips</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Expert Medical Insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Latest Research Updates</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      {/* Render VideoModal */}
      <YouTubeVideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoId={selectedVideoId} // Pass video ID to modal
        title={selectedVideoTitle}
      />
    </div>
  );
}