import {NextResponse} from 'next/server'
import OpenAI from "openai"
import pdfparse from 'pdf-parse'
const systemPrompt = `
You will recive a resume from the user and your job is to improve the wording of the all aspects of the resume. 
You will generate two different parts for the resume.
1. Improve all parts of the resume, fix the wording and so on
2. After give notes on what the user should focus on to include more in their resume


`

export async function POST(req){
    const fs = require('fs')
    const pdf = require('pdf-parse')
    let dataBuffer = fs.readFileSync('Shavil_Resume.pdf')//req.file)
    
    pdf(dataBuffer).then(function(data){
        //const str = data.text
        //const dat = req.text()
        //console.log(dat)
        ///console.log(str)
    })
    /*.catch(function(error){
        if(error.message === 'NullError'){

        } else {
            console.error(error)
        }
    })*/
    return new NextResponse 
    /*const data = await req.text()
    console.log(data)
    //})
    return new NextResponse*/

    /*const openai = new OpenAI()
    const data = await req.json()
    
    const completion = await openai.chat.completions.create({
        messages: [{
            role: 'system',
            content: systemPrompt,
        },
        ...data,
    ],
    model: 'gpt-4',
    stream: true
    })

    const steam = new ReadableStream({
        async start(controller){
            const encoder = new TextEncoder()
            try{
                for await (const chunk of completion){
                    const content = chunk.choices[0].delta.content
                    if(content){
                        const text = encoder.encode(content)
                        controller.enqueue(text)
                    }
                }
            }
            catch(err){
                controller.error(err)
            } finally {
                controller.close()
            }
        },
    })*/
    //return new NextResponse//(steam)

}