"use client";
import ButtonLink from "./ButtonLink";

import { pdfData } from "@/app/data/Data";

function InfoPdf() {
    return (
        <div className="grid gap-2 w-full">
            <h2 className="font-bold justify-self-center">
                PDFs con Información
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {pdfData.map((pdf) => (
                    <ButtonLink href={pdf.to} text={pdf.text} key={pdf.id} />
                ))}
            </div>
        </div>
    );
}

export default InfoPdf;
