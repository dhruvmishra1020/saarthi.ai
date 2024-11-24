import React from 'react'
import { Button } from '../ui/button'
function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5 w-full'>
      <img src="vite.svg"/>
      <div>
        <Button>login</Button>
      </div>
    </div>
  )
}

export default Header