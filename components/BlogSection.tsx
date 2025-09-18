'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import YouTubeVideoModal from '@/components/YouTubeVideoModal';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Gallbladder Removal Recovery Do's and Don't Tips",
      excerpt: "Gallbladder Removal Recovery Do's and Don,t Post-operative care after gallbladder removal (laparoscopic cholecystectomy)",
      author: "Dr Shenthil Prabhu",
      date: "Aug 30, 2025",
      readTime: "5 min read",
      category: "Health Tips",
      image: 'https://i.ytimg.com/vi/9_eUd6tdCmE/hqdefault.jpg',
      videoId: "9_eUd6tdCmE"
    },
    {
      title: "இருதயம் மற்றும் பிற உடல் நல பிரச்சனைகள் உள்ளவர்களுக்கு பித்தப்பை அறுவை சிகிச்சை எவ்வாறு செய்வது",
      excerpt: "",
      author: "Dr Shenthil Prabhu",
      date: "Aug 21, 2025",
      readTime: "4 min read",
      category: "Prevention",
      image: 'https://i.ytimg.com/vi/gj2PvIOg0ps/hqdefault.jpg',
      videoId: "gj2PvIOg0ps"
    },
    {
      title: "What is Endoscopic Polypectomy? What are the benefits of a polypectomy?",
      excerpt: "What is Endoscopic Polypectomy? 🧐 What are the benefits of a polypectomy?",
      author: "Dr Shenthil Prabhu",
      date: "Aug 13, 2025",
      readTime: "6 min read",
      category: "Treatment",
      image: 'https://i.ytimg.com/vi/ZiTU7ZhUT3I/hqdefault.jpg',
      videoId: "ZiTU7ZhUT3I"
    }
  ]

    const [selectedVideoId, setSelectedVideoId] = useState<string | undefined>("");
    const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | undefined>("");
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openVideoModal = (videoId: string, videoTitle: string) => {
      setSelectedVideoId(videoId);
      setSelectedVideoTitle(videoTitle);
      setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
      setSelectedVideoId(undefined)
      setIsVideoModalOpen(false)
    }

    const handleSubscribe = () => {
      const url =
        "https://www.youtube.com/channel/UCe_EfhzRmqjyJPQgbNsufSA?sub_confirmation=1";
      window.open(
        url,
        "SubscribePopup",
        "width=500,height=600,left=200,top=200"
      );
    };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Health <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about digestive health with expert insights, treatment updates, and wellness tips from our medical team.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="blog-card group hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                                        <img
                                          src={post.image}
                                          alt={post.title}
                                          className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                        <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 w-fit">
                                          Video
                                        </Badge>
                                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                          {post.title}
                                        </CardTitle>
                                      </CardHeader>
              <CardContent className="space-y-4">
                {/* <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p> */}
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div> */}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button onClick={() => openVideoModal(post.videoId , post.title)} variant="ghost" className="text-cyan-500 hover:text-blue-600">
                    Watch Video
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

         {/* Render VideoModal */}
      <YouTubeVideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        videoId={selectedVideoId} // Pass video ID to modal
        title={selectedVideoTitle}
      />

        {/* CTA */}
        <div className="text-center mt-12">
           <a href='/blog'>
          <Button className="btn-primary btn-lg">
            View All Videos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
