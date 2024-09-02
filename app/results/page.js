'use client'
import { Button } from '@nextui-org/react'
import DropZone from './components/DropZone'
import ThemeSwitcher from './components/ThemeSwitcher'


export default function Home() {
  const handleFileChange = () => {


  }

  const handleSubmit = () => {

 
  }
  return (
    <div className='flex w-screen h-screen flex-col justify-center items-center gap-10'>
        <div className='flex items-center gap-2'>
            <h1 className='text-7xl'>Clean<span className='text-primary'>Doc</span></h1>
            <ThemeSwitcher></ThemeSwitcher>
        </div>
        <p className='text-xl'>Submit a document and let us do the rest.</p>

        <DropZone> <input type="file"  name="image"  onChange={handleFileChange} className={`block w-full text-M text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white`} /> </DropZone>
        <Button color='primary' onClick={handleSubmit} href="loading_page/page.js">Submit</Button>
    </div>

  )
}