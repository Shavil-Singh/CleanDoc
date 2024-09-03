import {NextResponse} from 'next/server'
import pdfparse from 'pdf-parse'

export async function POST(req){
    //pdfparse(req.file).then(function(data){
    //const str = await data.text
    const data = await req.text()
    console.log(data)
    //})
    return new NextResponse 
}