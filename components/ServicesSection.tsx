'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  Heart, 
  Shield, 
  Activity,
  Microscope,
  Camera,
  Scissors,
  Pill,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
} from 'lucide-react'
import { useState } from 'react'
import AppointmentModal from '@/components/AppointmentModal'

const ServicesSection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)

  const services = [
    {
      id: 1,
      title: "Advanced Endoscopy",
      description: "State-of-the-art endoscopic procedures for accurate diagnosis and treatment of digestive disorders.",
      icon: Camera,
      features: ["Colonoscopy", "Gastroscopy", "ERCP", "Capsule Endoscopy"],
      duration: "30-60 minutes",
      price: "₹––– (consult hospital)", 
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      gradient: "from-blue-500/10 to-cyan-500/10",
      svg: '<svg id="Layer_1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m7 47v-5.6893l.35453.00476a26.7452 26.7452 0 0 0 15.523 4.96579h.47459c16.986.00005 21.15923-16.38584 21.15923-23.81658 0-8.59714-4.1228-16.184-12.41242-16.184a13.47721 13.47721 0 0 0 -10.18139 4.96133"/><path d="m23.86408 8.6695c-2.16243-2.08956-5.00916-5.11926-4.77033-7.6695"/><path d="m11 1c0 10.0625 9.13286 9.215 9.13286 23.28124a10.25783 10.25783 0 0 1 -10.22771 10.22776h-3.03188a5.87327 5.87327 0 0 0 -5.87327 5.87327v6.61773"/><path d="m36.09032 27.54674a6.97471 6.97471 0 1 1 -12.75906 1.94869l.2173-.98694a7.553 7.553 0 0 1 .44906-1.31552 7.82338 7.82338 0 0 0 .6371-3.05562c0-8.711-3.58128-12.466-6.35661-15.5989-2.14362-2.41945-3.27811-4.0177-3.27811-7.53845"/><path d="m37.58463 24.14876-3.88292-6.99429-5.082 2.82177 3.88287 6.99418a1.99989 1.99989 0 0 0 2.71935.77777l1.585-.88005a2.00007 2.00007 0 0 0 .7777-2.71938z"/><path d="m30.561 23.473 5.082-2.821"/></g></svg>'
    },
    {
      id: 2,
      title: "Laparoscopic Surgery",
      description: "Minimally invasive surgical procedures for faster recovery and reduced complications.",
      icon: Scissors,
      features: ["Gallbladder Surgery", "Hernia Repair", "Appendectomy", "Bariatric Surgery"],
      duration: "1-3 hours",
      price: "₹––– (consult hospital)",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500/10 to-teal-500/10",
      svg: '<svg id="Capa_1" enable-background="new 0 0 511.999 511.999" viewBox="0 0 511.999 511.999" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g><path d="m312.63 511.999h-87.197c-4.143 0-7.5-3.357-7.5-7.5s3.357-7.5 7.5-7.5h49.697v-106.116l-17.301-17.301-15.4 32.268c3.428 3.949 5.504 9.101 5.504 14.729 0 12.406-10.094 22.5-22.5 22.5s-22.5-10.094-22.5-22.5c0-9.778 6.27-18.119 15-21.215v-50.679l-55.022 55.023c-7.154 7.153-18.124 9.153-27.297 4.968-4.157-1.895-9.079-4.396-14.481-7.634l-20.403 20.404c-7.501 7.501-17.475 11.632-28.083 11.632-7.818 0-15.293-2.244-21.686-6.428-3.251 5.028-4.994 10.89-4.994 17.02 0 17.33 14.099 31.429 31.429 31.429 9.505 0 21.592-4.124 33.28-8.112 12.847-4.384 26.132-8.917 38.126-8.917 25.601 0 46.428 20.828 46.428 46.429 0 4.143-3.357 7.5-7.5 7.5s-7.5-3.357-7.5-7.5c0-17.33-14.099-31.429-31.428-31.429-9.506 0-21.593 4.124-33.282 8.113-12.847 4.383-26.13 8.916-38.124 8.916-25.601 0-46.429-20.828-46.429-46.429 0-10.076 3.188-19.663 9.087-27.606-10.788-15.479-9.285-36.984 4.511-50.781l20.405-20.403c-3.237-5.402-5.738-10.324-7.634-14.48-4.182-9.174-2.186-20.144 4.968-27.298l38.059-38.059c2.93-2.928 7.678-2.928 10.607 0 2.929 2.93 2.929 7.678 0 10.607l-38.06 38.059c-2.752 2.752-3.526 6.959-1.927 10.468 4.72 10.352 13.625 25.972 29.253 41.599 15.627 15.628 31.247 24.533 41.599 29.253 3.509 1.598 7.716.826 10.468-1.927l55.023-55.022h-50.679c-3.096 8.73-11.437 15-21.215 15-12.406 0-22.5-10.094-22.5-22.5 0-9.778 6.27-18.119 15-21.215v-61.285h-61.285c-3.096 8.73-11.437 15-21.215 15-12.406 0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5c5.628 0 10.779 2.076 14.729 5.504l32.299-15.415c-2.448-2.946-2.291-7.327.471-10.09 2.763-2.761 7.145-2.92 10.09-.471l15.416-32.3c-3.428-3.949-5.504-9.101-5.504-14.729 0-12.406 10.094-22.5 22.5-22.5s22.5 10.094 22.5 22.5c0 9.778-6.27 18.119-15 21.215v50.679l63.696-63.697c44.336-44.335 80.229-78.248 105.137-78.248 13.149 0 30.854 9.854 47.359 26.359 16.506 16.505 26.359 34.21 26.359 47.359 0 13.072-9.443 30.232-29.718 54.003-2.688 3.15-7.421 3.528-10.573.839-3.151-2.688-3.527-7.422-.839-10.573 17.339-20.328 26.13-35.223 26.13-44.269 0-19.756-38.963-58.719-58.719-58.719-19.466 0-60.003 39.399-89.225 68.554l79.388 79.388c7.111-7.136 14.816-14.939 22.119-22.604 2.856-2.998 7.605-3.112 10.603-.257 2.999 2.857 3.114 7.605.258 10.604-9.277 9.738-19.148 19.647-27.672 28.172l-63.697 63.696h50.679c3.096-8.73 11.437-15 21.215-15 12.406 0 22.5 10.094 22.5 22.5s-10.094 22.5-22.5 22.5c-5.628 0-10.779-2.076-14.729-5.504l-32.269 15.401 19.498 19.497c1.406 1.407 2.196 3.314 2.196 5.304v109.222h22.5c54.873 0 98.67-19.277 126.655-55.749 29.084-37.901 38.432-92.528 25.436-147.177-3.275-.267-6.477-1.259-9.407-2.95-5.205-3.005-8.928-7.857-10.482-13.663-1.102-4.105-65.655-245.026-66.756-249.135-1.556-5.804-.758-11.868 2.247-17.072 3.005-5.205 7.857-8.928 13.662-10.483 11.989-3.211 24.347 3.927 27.557 15.91l13.951 52.065c1.072 4.001-1.302 8.113-5.303 9.186-4.002 1.076-8.114-1.302-9.186-5.303l-13.951-52.066c-1.07-3.995-5.191-6.37-9.187-5.304-1.935.519-3.552 1.76-4.554 3.495-1.001 1.734-1.268 3.756-.749 5.69 1.101 4.109 65.654 245.026 66.756 249.134.519 1.937 1.76 3.554 3.494 4.556 1.729.997 3.74 1.265 5.669.755.008-.002.016-.004.022-.006.008-.002.016-.004.022-.006 3.981-1.08 6.349-5.192 5.281-9.181l-44.851-167.383c-1.072-4.001 1.302-8.113 5.303-9.186 4.002-1.077 8.114 1.302 9.186 5.303l44.851 167.385c2.539 9.476-1.392 19.187-9.071 24.424 6.652 27.79 8.044 56.249 4.008 82.69-4.448 29.145-15.53 55.927-32.048 77.453-30.93 40.31-78.841 61.617-138.554 61.617zm-87.197-98.92c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5zm-151.977-55.474-18.285 18.285c-9.636 9.636-9.636 25.314 0 34.951 4.667 4.667 10.874 7.237 17.475 7.237 6.602 0 12.809-2.57 17.476-7.238l18.285-18.285c-6.073-4.481-12.431-9.827-18.777-16.173-6.347-6.346-11.693-12.704-16.174-18.777zm159.477-8.919v42.235l13.645-28.59zm10.605-10.607 13.646 13.646 28.591-13.646zm71.895-15c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5zm-187.5 7.5c0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5-3.364-7.5-7.5-7.5-7.5 3.364-7.5 7.5zm28.714-7.5h50.678l-26.894-26.893-24.697 24.697c.342.712.647 1.445.913 2.196zm34.392-37.499 26.894 26.894v-50.68c-6.384-2.264-11.451-7.331-13.715-13.715h-50.68l26.894 26.894 8.326-8.326c2.93-2.928 7.678-2.928 10.607 0 2.929 2.93 2.929 7.678 0 10.607zm41.894-23.786v50.679l58.394-58.394-79.394-79.394-58.394 58.394h50.679c3.096-8.73 11.437-15 21.215-15 12.406 0 22.5 10.094 22.5 22.5 0 9.778-6.27 18.119-15 21.215zm-90 47.57c.751.267 1.483.571 2.195.913l24.697-24.697-26.893-26.894v50.678zm82.5-76.285c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5zm-180 0c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5zm29.657 0h42.235l-13.646-13.645zm39.197-24.252 13.646 13.646v-42.237zm21.146-65.748c-4.136 0-7.5 3.364-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5-3.365-7.5-7.5-7.5z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></g></svg>'
    },
    {
      id: 3,
      title: "Liver Disease Treatment",
      description: "Comprehensive treatment for various liver conditions including hepatitis and cirrhosis.",
      icon: Heart,
      features: ["Hepatitis Treatment", "Liver Biopsy", "FibroScan", "Nutritional Support"],
      duration: "Varies",
      price: "₹––– (consult hospital)",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      gradient: "from-purple-500/10 to-pink-500/10",
      svg: '<svg enable-background="new 0 0 59.826 60.001"  viewBox="0 0 59.826 60.001"  xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m4.922 60.001c-.036 0-.072 0-.109-.001-1.502-.025-2.735-1.932-2.931-4.534-.113-1.486-.404-2.926-.712-4.452-.275-1.362-.559-2.771-.703-4.21-.631-6.318-.968-13.787 1.322-21.284.129-.423.267-.846.413-1.267.94-2.717 1.985-4.78 3.29-6.492 3.381-4.438 9.227-6.382 17.872-5.924 3.033.159 7.868.819 10.777 1.473 2.693.604 5.486.819 8.302.637 4.122-.267 8.831-1.45 11.451-2.877 1.533-.834 3.358-.607 4.648.582 1.261 1.162 1.631 2.92.941 4.479-.918 2.075-2.87 4.604-5.804 7.516-.817.812-1.885 1.89-2.897 3.021-2.7 3.02-12.498 13.377-25.22 19.853-2.559 1.302-5.135 2.199-7.658 2.664-2.6.479-6.127 1.953-8.172 6.247-.06.125-.106.31-.169.524-.354 1.213-1.181 4.045-4.641 4.045zm-1.22-33.897c-2.187 7.159-1.856 14.381-1.244 20.501.134 1.34.408 2.699.673 4.014.306 1.518.623 3.087.745 4.697.128 1.691.772 2.598 1.019 2.692 1.832-.004 2.312-1.118 2.749-2.614.092-.316.172-.589.283-.823 2.534-5.323 7.112-6.892 9.615-7.354 2.333-.431 4.727-1.265 7.114-2.479 12.413-6.318 21.995-16.449 24.637-19.403 1.047-1.17 2.142-2.275 2.979-3.106 2.756-2.736 4.567-5.06 5.384-6.906.41-.926.027-1.743-.467-2.199-.518-.477-1.403-.805-2.337-.296-3.342 1.819-8.575 2.876-12.279 3.116-3.007.192-5.991-.036-8.869-.682-2.819-.633-7.504-1.273-10.444-1.427-8.048-.425-13.186 1.212-16.176 5.139-1.172 1.538-2.122 3.424-2.99 5.934-.14.397-.27.796-.392 1.196z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m6.83 50c-.085 0-.17-.011-.255-.033-.37-.098-.653-.398-.726-.774-.017-.087-.05-.232-.094-.426-.457-2.041-1.848-8.251-.906-12.962.108-.541.636-.893 1.177-.784.542.108.893.635.784 1.177-.519 2.593-.315 6.206.603 10.752 3.515-3.284 7.523-4.336 9.221-4.649 1.999-.369 4.119-1.365 5.743-2.19.492-.251 1.094-.055 1.345.438.25.492.054 1.094-.438 1.345-1.744.888-4.034 1.959-6.287 2.375-1.71.315-6.05 1.472-9.408 5.385-.193.222-.472.346-.759.346z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m6.83 29c-.108 0-.219-.018-.327-.056-.522-.18-.799-.75-.618-1.272.743-2.147 2.592-5.579 3.584-6.882 1.996-2.621 5.5-3.79 11.361-3.79.552 0 1 .448 1 1s-.448 1-1 1c-5.175 0-8.188.926-9.77 3.002-.886 1.164-2.611 4.375-3.285 6.325-.143.414-.531.673-.945.673z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m31.83 11c-.552 0-1-.448-1-1 0-2.757-2.243-5-5-5-.552 0-1-.448-1-1s.448-1 1-1c3.86 0 7 3.14 7 7 0 .552-.448 1-1 1z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m35.83 11c-.552 0-1-.448-1-1s.448-1 1-1c2.757 0 5-2.243 5-5 0-.552.448-1 1-1s1 .448 1 1c0 3.86-3.141 7-7 7z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m35.829 40c-.236 0-.474-.083-.664-.252-.413-.367-.45-.999-.083-1.412 7.335-8.252 2.169-15.436 1.946-15.738-.328-.443-.237-1.069.205-1.398.442-.33 1.066-.24 1.397.201.065.086 6.393 8.764-2.053 18.265-.198.221-.472.334-.748.334z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m35.83 15.641c-.052 0-.103-.004-.155-.012-.66-.104-1.319-.221-1.973-.368-.605-.136-1.307-.271-2.047-.402-.477-.084-.825-.5-.825-.984v-10.875c0-1.654 1.346-3 3-3s3 1.346 3 3v11.641c0 .292-.128.57-.35.76-.183.156-.414.24-.65.24zm-1.689-2.331c.229.051.459.099.689.144v-10.454c0-.551-.448-1-1-1s-1 .449-1 1v10.041c.467.088.909.178 1.311.269z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m28.83 60c-1.654 0-3-1.346-3-3v-12.291c0-.366.199-.702.52-.877 1.297-.709 2.624-1.494 3.944-2.331.308-.196.698-.208 1.018-.032s.518.512.518.876v14.655c0 1.654-1.346 3-3 3zm-1-14.701v11.701c0 .551.448 1 1 1s1-.449 1-1v-12.862c-.67.403-1.338.791-2 1.161z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m13.755 14.607c-.323 0-.633-.157-.823-.432-.94-1.362-2.473-2.175-4.102-2.175h-1c-1.654 0-3-1.346-3-3s1.346-3 3-3h1c4.308 0 8.241 2.544 10.019 6.482.134.296.115.638-.049.917-.164.28-.454.463-.777.491-1.449.124-2.796.354-4.004.682-.088.024-.176.035-.264.035zm-5.925-6.607c-.552 0-1 .449-1 1s.448 1 1 1h1c2.051 0 3.991.915 5.317 2.476.699-.166 1.434-.303 2.198-.41-1.647-2.507-4.467-4.066-7.515-4.066z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/><path d="m46.83 47h-2c-4.693 0-8.872-2.986-10.397-7.431-.142-.414.002-.873.355-1.131 1.14-.835 2.298-1.727 3.442-2.652.286-.231.678-.287 1.017-.144.34.143.573.461.607.829.241 2.583 2.38 4.53 4.976 4.53h2c1.654 0 3 1.346 3 3s-1.346 2.999-3 2.999zm-10.244-7.405c1.42 3.26 4.647 5.405 8.244 5.405h2c.552 0 1-.449 1-1s-.448-1-1-1h-2c-3.044 0-5.64-1.913-6.601-4.659-.548.428-1.097.847-1.643 1.254z" fill="#ffffff" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></svg>'
    },
    {
      id: 4,
      title: "Inflammatory Bowel Disease",
      description: "Specialized care for Crohn's disease, ulcerative colitis, and other IBD conditions.",
      icon: Shield,
      features: ["IBD Management", "Biologic Therapy", "Nutritional Counseling", "Support Groups"],
      duration: "Ongoing",
      price: "₹––– (consult hospital)",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      gradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      id: 5,
      title: "Digestive Health Screening",
      description: "Comprehensive screening programs for early detection of digestive system disorders.",
      icon: Microscope,
      features: ["Cancer Screening", "Polyps Detection", "Biopsy", "Follow-up Care"],
      duration: "1-2 hours",
      price: "₹––– (consult hospital)",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      gradient: "from-red-500/10 to-pink-500/10",
    },
    {
      id: 6,
      title: "Nutritional Therapy",
      description: "Personalized nutritional guidance for optimal digestive health and recovery.",
      icon: Pill,
      features: ["Diet Planning", "Supplements", "Lifestyle Changes", "Monitoring"],
      duration: "Ongoing",
      price: "₹––– (consult hospital)",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      gradient: "from-green-500/10 to-emerald-500/10",
    }
  ]
  const handleAppointmentClick = (doctor?: any) => {
    setSelectedDoctor(doctor);
    setIsAppointmentModalOpen(true);
  };

  return (
    <>
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive gastroenterology services delivered with cutting-edge technology 
            and compassionate care for optimal patient outcomes.
          </p>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle, value: "100+", label: "Specialists", color: "text-green-600" },
              { icon: Heart, value: "98%", label: "Success Rate", color: "text-red-600" },
              { icon: Shield, value: "24/7", label: "Emergency Care", color: "text-blue-600" },
              { icon: Zap, value: "50+", label: "Advanced Procedures", color: "text-amber-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-12 h-12 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="service-card group hover:shadow-2xl transition-all duration-500 h-full border-0 shadow-lg relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="text-center pb-3 relative z-10">
                  {/* Service Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {/* <service.icon className="w-8 h-8 text-white" /> */}
                    {service.svg ? <span 
                        key={index} className="w-9"
                        dangerouslySetInnerHTML={{ __html: service.svg }} 
                      /> : <service.icon className="w-8 h-8 text-white" /> }
                    {/* {service.svg} */}
                  </motion.div>

                  {/* Service Title */}
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>

                  {/* Service Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center space-x-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span className="text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="w-4 h-4 text-gray-500 mr-1" />
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{service.duration}</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-1">
                        {/* <DollarSign className="w-4 h-4 text-gray-500 mr-1" /> */}
                        <div className="text-xs text-gray-500">₹ Starting Price</div>
                      </div>
                      <div className="font-semibold text-gray-900 text-sm">{service.price}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <a href={`/services/${service.id}`}>
                      <Button 
                        className="w-full btn-primary group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Learn More
                        </span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-all duration-500 pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Schedule a consultation with our expert team to discuss your specific needs 
                and find the right treatment plan for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => handleAppointmentClick()} className="btn-secondary btn-lg hover:scale-105 transition-transform duration-300">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Book Consultation 
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                 <a href='/services'>
                <Button className="btn-secondary btn-lg hover:scale-105 transition-transform duration-300">
                   <Activity className="w-5 h-5 mr-2" />
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
        <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        selectedDoctor={selectedDoctor}
      />
    </>
  )
}

export default ServicesSection
