import { useEffect, useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Divider } from "@mui/material";
import PDF from '../../assets/Teste.pdf'


export default function Teste(){
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setTimeout(() => {
            //document.querySelectorAll("div.textLayer").forEach(element=>element.remove());
            //document.querySelectorAll("div.annotationLayer").forEach(element=>element.remove());
            console.log("delete")
        }, 100);
    }

    return(


        <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>

        {Array.apply(null, Array(numPages))
            .map((x, i)=>i+1)
            .map((page) => {
                return <><Page pageNumber={page} key={page}/><Divider sx={{width:"fit-content"}}/></>
            })
        }

        </Document>

                
    )
}