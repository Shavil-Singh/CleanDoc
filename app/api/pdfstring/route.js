import {NextResponse} from 'next/server'
import pdfparse from 'pdf-parse'

export async function POST(req){
    pdfparse(req).then(function(data){
        const str = data.text
        console.log(str)
    })
    return new NextResponse(str)
}