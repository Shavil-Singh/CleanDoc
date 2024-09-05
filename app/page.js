'use client'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, Progress, Textarea } from '@nextui-org/react'

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

import DropZone from './components/DropZone'
import ThemeSwitcher from './components/ThemeSwitcher'

import { useState } from 'react'


export default function Home() {

    // const [file,setFile] = useState('')
      const [message,setMessage] = useState('')
      const [result, setResult] = useState('')
      const [loading, setLoading] = useState(false)


    // const handleSubmit = async () => {
    //     console.log(file)
    //     const response = fetch('/api/pdfparse', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': file.type,
    //         },
    //         body: file
    //     })

    //     const result = await response.json()
    //     console.log(result.text)
    // }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const response = await fetch('/api/generate', { 
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: message,
            });
    
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
    
            const data = await response.json();
            setResult(data.result);
            setMessage('');
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
        setLoading(false)
    }

    return (
    <div className=' w-screen h-screen'>
        <Navbar>
            <NavbarBrand>
            <p>Clean<span className='text-primary'>Doc</span></p>            
            </NavbarBrand>

            <NavbarContent justify="end">
                <NavbarItem><ThemeSwitcher /></NavbarItem>
                <NavbarItem>
                    <SignedOut>
                        <SignInButton><Button color='primary'>Sign in</Button></SignInButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />    
                    </SignedIn>                    
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    <div className='flex w-screen h-screen flex-col justify-center items-center gap-10'>


        <div className='flex items-center gap-2'>
            <h1 className='text-7xl'>Clean<span className='text-primary'>Doc</span></h1>
            <ThemeSwitcher />
        </div>
        <p className='text-xl'> Submit a document and let us do the rest.</p>

        <div className="flex w-1/3 justify-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4" >
            {/* <DropZone> <input type="file"  name="image"  onChange={(e)=>setFile(e.target.files[0])} className={`block w-full text-M text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white`} /> </DropZone>
            <h1 className='text-xl'>Or upload pdf file</h1> */}
            <Textarea 
                fullWidth
                isRequired
                onChange={(e)=> {setMessage(e.target.value)}}
                label="Paste your text here"
            />
        </div>
        {loading ? <Progress size='sm' isIndeterminate aria-label='Loading...' className='max-w-md'/> : <Button color='primary' onClick={handleSubmit}>Submit</Button>}

        {result && <div className="flex flex-col w-1/3 justify-center flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"> <Textarea isReadOnly variant='bordered' defaultValue={result}></Textarea> <Button color='primary' onClick={() => {navigator.clipboard.writeText(result)}}>Copy</Button></div>}
    </div>
    </div>

  )
}
