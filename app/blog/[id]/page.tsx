'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Star,
  Eye,
  Heart,
  Share2,
  Quote,
  Play,
  ChevronLeft,
  ChevronRight,
  Tag,
  MessageCircle,
  Bookmark,
  ThumbsUp,
  Download,
  ArrowRight,
  Mail,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ExternalLink
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const [isClient, setIsClient] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentRelatedSlide, setCurrentRelatedSlide] = useState(0)
  const [showShareOptions, setShowShareOptions] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Auto-slide for related articles carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const totalSlides = Math.ceil(blogPost.relatedPosts.length / 3)
      setCurrentRelatedSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Enhanced blog post data with better video content and gastro-related images
  const blogPost = {
    id: params.id,
    title: "Understanding Irritable Bowel Syndrome (IBS): A Comprehensive Guide",
    excerpt: "Learn about the symptoms, causes, and treatment options for IBS, a common digestive disorder affecting millions worldwide.",
    author: {
      name: "Dr. Shenthil Prabhu M",
      avatar: "RK",
      specialization: "Senior Gastroenterologist",
      experience: "15+ Years",
      about: "Dr. Shenthil Prabhu M is a highly experienced gastroenterologist with over 15 years of practice. He specializes in advanced endoscopic procedures and has treated thousands of patients with various digestive disorders."
    },
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Digestive Health",
    views: 1250,
    likes: 89,
    tags: ["IBS", "Digestive Health", "Treatment", "Symptoms"],
    content: `
      <p class="text-lg leading-relaxed text-gray-700 mb-6">Irritable Bowel Syndrome (IBS) is a common functional gastrointestinal disorder that affects the large intestine. It's characterized by a group of symptoms that typically occur together, including abdominal pain, bloating, and changes in bowel habits.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Irritable Bowel Syndrome?</h2>
      <p class="text-lg leading-relaxed text-gray-700 mb-6">IBS is a chronic condition that affects the digestive system, particularly the large intestine (colon). Unlike inflammatory bowel diseases like Crohn's disease or ulcerative colitis, IBS doesn't cause inflammation or damage to the intestinal tissue.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Symptoms of IBS</h2>
      <ul class="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
        <li>Abdominal pain and cramping</li>
        <li>Bloating and gas</li>
        <li>Diarrhea or constipation (or alternating between both)</li>
        <li>Mucus in the stool</li>
        <li>Feeling of incomplete bowel movement</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of IBS</h2>
      <p class="text-lg leading-relaxed text-gray-700 mb-4">IBS is classified into three main types based on the predominant bowel habit:</p>
      <ul class="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
        <li><strong>IBS-D:</strong> Diarrhea-predominant</li>
        <li><strong>IBS-C:</strong> Constipation-predominant</li>
        <li><strong>IBS-M:</strong> Mixed (alternating diarrhea and constipation)</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Diagnosis and Treatment</h2>
      <p class="text-lg leading-relaxed text-gray-700 mb-6">Diagnosing IBS involves ruling out other conditions and identifying the characteristic symptoms. Treatment focuses on managing symptoms through lifestyle changes, dietary modifications, and medications when necessary.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lifestyle Changes for IBS Management</h2>
      <p class="text-lg leading-relaxed text-gray-700 mb-4">Making certain lifestyle changes can significantly improve IBS symptoms:</p>
      <ul class="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
        <li>Regular exercise and physical activity</li>
        <li>Stress management techniques</li>
        <li>Adequate sleep and rest</li>
        <li>Maintaining a food diary</li>
        <li>Gradual dietary changes</li>
      </ul>
    `,
    images: [
      "/images/blog/ibs-symptoms.jpg",
      "/images/blog/ibs-diagnosis.jpg",
      "/images/blog/ibs-treatment.jpg",
      "/images/blog/ibs-diet.jpg"
    ],
    video: {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Understanding IBS: Expert Discussion with Dr. Shenthil Prabhu M",
      description: "In this comprehensive video, Dr. Shenthil Prabhu M explains the causes, symptoms, and treatment options for Irritable Bowel Syndrome (IBS). Learn about dietary recommendations, lifestyle changes, and when to seek medical attention.",
      duration: "5:30",
      thumbnail: "/images/blog/video-thumbnail.jpg",
      views: 2340,
      likes: 156
    },
    quotes: [
      {
        text: "IBS is a real condition that affects millions of people worldwide. Early diagnosis and proper management can significantly improve quality of life.",
        author: "Dr. Shenthil Prabhu M"
      },
      {
        text: "Dietary changes and stress management are often the most effective treatments for IBS symptoms.",
        author: "Dr. Priya Sharma"
      }
    ],
    relatedPosts: [
      {
        id: 2,
        title: "The Importance of Fiber in Digestive Health",
        excerpt: "Discover how dietary fiber plays a crucial role in maintaining a healthy digestive system.",
        image: "/images/blog/fiber-digestive-health.jpg",
        date: "2024-01-12",
        readTime: "4 min read",
        category: "Nutrition"
      },
      {
        id: 3,
        title: "Preventing Acid Reflux: Lifestyle Changes That Help",
        excerpt: "Simple lifestyle modifications can significantly reduce acid reflux symptoms.",
        image: "/images/blog/acid-reflux-prevention.jpg",
        date: "2024-01-10",
        readTime: "6 min read",
        category: "Digestive Health"
      },
      {
        id: 4,
        title: "Liver Health: What You Need to Know",
        excerpt: "Essential information about maintaining liver health and preventing liver diseases.",
        image: "/images/blog/liver-health-guide.jpg",
        date: "2024-01-08",
        readTime: "7 min read",
        category: "Liver Care"
      },
      {
        id: 5,
        title: "Endoscopy: What to Expect During Your Procedure",
        excerpt: "A comprehensive guide to preparing for and understanding your endoscopy procedure.",
        image: "/images/blog/endoscopy-procedure.jpg",
        date: "2024-01-06",
        readTime: "5 min read",
        category: "Procedures"
      },
      {
        id: 6,
        title: "Colon Cancer Prevention: Early Detection Saves Lives",
        excerpt: "Learn about the importance of regular screening and early detection of colon cancer.",
        image: "/images/blog/colon-cancer-prevention.jpg",
        date: "2024-01-04",
        readTime: "8 min read",
        category: "Cancer Prevention"
      }
    ]
  }

  const formatDate = (dateString: string) => {
    if (!isClient) return dateString
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  const handleSlideChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % blogPost.images.length)
    } else {
      setCurrentSlide((prev) => (prev - 1 + blogPost.images.length) % blogPost.images.length)
    }
  }

  const handleRelatedSlideChange = (direction: 'next' | 'prev') => {
    const totalSlides = Math.ceil(blogPost.relatedPosts.length / 3)
    if (direction === 'next') {
      setCurrentRelatedSlide((prev) => (prev + 1) % totalSlides)
    } else {
      setCurrentRelatedSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }
  }

  const getVisibleRelatedPosts = () => {
    const startIndex = currentRelatedSlide * 3
    return blogPost.relatedPosts.slice(startIndex, startIndex + 3)
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = blogPost.title
    const text = blogPost.excerpt

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
        break
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`, '_blank')
        break
    }
    setShowShareOptions(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Enhanced Back Section */}
        <section className="pt-20 pb-8 bg-gradient-to-br from-orange-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Redesigned Breadcrumb */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Link href="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-[#e5623b] transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Blog</span>
                  </Link>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-500">{blogPost.category}</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium text-[#e5623b]">Current Article</span>
                </div>
                
                {/* Share Button */}
                <div className="relative">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs border-[#e5623b] text-[#e5623b] hover:bg-[#e5623b] hover:text-white"
                    onClick={() => setShowShareOptions(!showShareOptions)}
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Share
                  </Button>
                  
                  {/* Share Options Dropdown */}
                  {showShareOptions && (
                    <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50 min-w-[200px]">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 text-left"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 text-left"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 text-left"
                        >
                          <Linkedin className="w-4 h-4 text-blue-700" />
                          <span className="text-sm">LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare('whatsapp')}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 text-left"
                        >
                          <MessageCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">WhatsApp</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50 text-left col-span-2"
                        >
                          <Copy className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">Copy Link</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Article Header */}
              <div className="max-w-4xl mx-auto">
                <Badge className="bg-[#e5623b] text-white hover:bg-[#d4552e] mb-4">
                  {blogPost.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {blogPost.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {blogPost.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e5623b] to-[#d4552e] rounded-full flex items-center justify-center text-white font-semibold">
                        {blogPost.author.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{blogPost.author.name}</div>
                        <div className="text-sm text-gray-600">{blogPost.author.specialization}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blogPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{blogPost.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content - Full Width */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Enhanced Video Section */}
              {blogPost.video && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                      <Play className="w-6 h-6 text-[#e5623b] mr-3" />
                      {blogPost.video.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{blogPost.video.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blogPost.video.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{blogPost.video.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{blogPost.video.likes} likes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-[#e5623b] to-[#d4552e] flex items-center justify-center text-white relative overflow-hidden">
                      <div className="text-center z-10">
                        <Play className="w-20 h-20 mx-auto mb-4 opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
                        <p className="text-xl font-semibold mb-2">Watch Expert Discussion</p>
                        <p className="text-lg opacity-80 mb-4">{blogPost.video.duration}</p>
                        <Button className="bg-white text-[#e5623b] hover:bg-gray-100">
                          <Play className="w-4 h-4 mr-2" />
                          Play Video
                        </Button>
                      </div>
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    
                    {/* Video Controls */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/90 backdrop-blur-sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Image Gallery */}
              {blogPost.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Article Images</h3>
                    <p className="text-gray-600">Visual guide to understanding IBS symptoms and treatment</p>
                  </div>
                  
                  <div className="relative">
                    <div className="relative h-96 bg-gradient-to-br from-[#e5623b] to-[#d4552e]">
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center">
                          <Tag className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <p className="text-lg opacity-80">Blog Image {currentSlide + 1}</p>
                        </div>
                      </div>
                      
                      {/* Navigation Arrows */}
                      {blogPost.images.length > 1 && (
                        <>
                          <button
                            onClick={() => handleSlideChange('prev')}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={() => handleSlideChange('next')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Slide Indicators */}
                    {blogPost.images.length > 1 && (
                      <div className="flex justify-center space-x-2 p-4">
                        {blogPost.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentSlide ? 'bg-[#e5623b]' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </motion.div>

              {/* Quotes */}
              {blogPost.quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-[#e5623b] p-8 rounded-r-2xl"
                >
                  <Quote className="w-10 h-10 text-[#e5623b] mb-4" />
                  <blockquote className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-lg text-gray-600 font-semibold">
                    — {quote.author}
                  </cite>
                </motion.div>
              ))}

              {/* Tags */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm px-4 py-2 border-[#e5623b] text-[#e5623b]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h3>
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#e5623b] to-[#d4552e] rounded-full flex items-center justify-center text-white font-semibold text-xl">
                    {blogPost.author.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{blogPost.author.name}</h4>
                    <p className="text-[#e5623b] font-medium mb-3">{blogPost.author.specialization}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{blogPost.author.about}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>4.9 Rating</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{blogPost.author.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Related Articles Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleRelatedSlideChange('prev')}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleRelatedSlideChange('next')}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getVisibleRelatedPosts().map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <div className="h-48 bg-gradient-to-br from-[#e5623b] to-[#d4552e] relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            <div className="text-center">
                              <Tag className="w-12 h-12 mx-auto mb-2 opacity-80" />
                              <p className="text-sm opacity-80">{post.category}</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <Badge className="mb-3 text-xs bg-[#e5623b] text-white">{post.category}</Badge>
                          <h4 className="font-semibold text-gray-900 group-hover:text-[#e5623b] transition-colors line-clamp-2 mb-3">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-3 h-3" />
                              <span>{formatDate(post.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
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
    </div>
  )
}
