import { NextResponse } from 'next/server';

import PDFParser from "pdf2json";


export async function POST(req) {
    const pdfParser = new PDFParser(this, 1);
    const buffer = await req.Buffer()
    let str = ''

    pdfParser.on("pdfParser_dataError", (errData) =>
        console.error(errData.parserError)
      );

    pdfParser.on("pdfParser_dataReady", (pdfData) => {
        console.log(pdfData);
      });

      pdfParser.loadPDF(buffer);
    return NextResponse.json({ str });
}