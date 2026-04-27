import { SBC_CONFIG } from '@/lib/config'

export const AnnounceBar = () => {
  return (
    <div className="w-full bg-[length:200%] animate-shimmer py-2 text-center text-sm font-medium text-white"
         style={{ backgroundImage: 'linear-gradient(90deg, #eb06f9, #2D9CDB, #eb06f9)' }}>
      <a href={SBC_CONFIG.announce.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {SBC_CONFIG.announce.text}
      </a>
    </div>
  )
}
