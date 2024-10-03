import React, { useRef } from "react";
import { Provider } from "../UserContext/UserContext";
import NavBar from "./NavBar";
import Title from "./Ttitle";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import jsPDF from "jspdf"; // Import jsPDF
import html2canvas from "html2canvas"; // Import html2canvas
import Skills from "./Skills";
import Languages from "./Languages";
import styled from "styled-components";

const ResumePageWrapper = styled.div`
 width: 70%;
  border: 1px solid lightgray;
  border-radius: 2px;
  box-shadow: 5px 5px 5px lightgray;
  margin: 10px auto;

  .div-flex {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  
  .work-experience {
  flex-basis: 50%;
}

.education {
  flex-basis: 50%;
}

`



const ResumePage = () => {
    const contentRef = useRef(); // Reference for the content to convert to PDF

    const handleDownload = () => {
        const element = contentRef.current;

        html2canvas(element, {
            scale: 3, // Increase scale for higher quality
            useCORS: true, // Ensure cross-origin images are loaded
            allowTaint: true, // For loading images without CORS issues
        }).then((canvas) => {
            const pdf = new jsPDF("p", "mm", "a4");
            const imgData = canvas.toDataURL("image/png");

            const imgWidth = 210; // A4 page width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Ensure the content fits within the single page by scaling down
            const maxHeight = 290; // Leave some margin at the bottom
            const imgScaledHeight = imgHeight > maxHeight ? maxHeight : imgHeight;

            // Add the image to the PDF with scaling to fit one page
            pdf.addImage(imgData, "PNG", 0, 10, imgWidth, imgScaledHeight);

            // Save the PDF
            pdf.save("resume.pdf");
        });
    };

    return (
        <div>
            <Provider >
                <ResumePageWrapper>
                    <NavBar download={handleDownload} />
                    <div ref={contentRef} style={{ padding: "20px" }}>
                        <Title />
                        <div className="div-flex">
                            <div className="education">
                                <Education />
                                <Skills />
                                <Languages />
                            </div>
                            <div className="work-experience">
                                <WorkExperience />
                            </div>
                        </div>
                    </div>
                </ResumePageWrapper>
            </Provider>
        </div>
    )
}


export default ResumePage;