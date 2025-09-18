'use client'

import { Dialog, DialogContent,DialogHeader ,DialogTitle  } from '@/components/ui/dialog'
import { 
  Calendar,Youtube 

} from 'lucide-react'
import YouTubeSubscribe from '@/components/YouTubeSubscribe';
import Logo from './Logo';

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId?: string // Video ID to embed
  title?: string
}

const YouTubeVideoModal = ({ isOpen, onClose, videoId, title = '' }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center ">
            <div className="flex items-center gap-x-6">
              <Logo/>
          {/* <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" /> */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 pb-2">{title}</h3>
            <p className="text-sm/6 font-semibold text-indigo-600"><YouTubeSubscribe /></p>
          </div>
        </div>


        
          </DialogTitle>
        </DialogHeader>
        {videoId ? (
          <div className="relative w-full">
            <button
              className="absolute top-2 right-2 text-white text-4xl"
              onClick={onClose}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500">No video selected.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default YouTubeVideoModal