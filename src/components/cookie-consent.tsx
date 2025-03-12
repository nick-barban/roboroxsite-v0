'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(true)
  
  const acceptCookies = () => {
    setShowConsent(false)
    // Here you would typically set a cookie to remember the user's choice
  }
  
  const openSettings = () => {
    // This would typically open a modal with more detailed cookie settings
    console.log('Opening cookie settings')
  }
  
  if (!showConsent) return null
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 p-4 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-700 mb-4 md:mb-0 md:mr-4">
          We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. 
          By clicking "Accept", you consent to the use of ALL the cookies. However you may visit Cookie Settings to provide a controlled consent.
        </p>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={openSettings}
            className="text-gray-700 border-gray-300"
          >
            Cookie settings
          </Button>
          <Button 
            size="sm" 
            onClick={acceptCookies}
            className="bg-[#8bc34a] hover:bg-[#7cb342] text-white"
          >
            ACCEPT
          </Button>
        </div>
      </div>
    </div>
  )
}