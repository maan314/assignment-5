import { TiArrowDown } from "react-icons/ti";
import WordCount from "@/public/images/wordcount.png"
import Currency from "@/public/images/currency.jpg"
import PortFo from "@/public/images/port.jpg"
import Card from "@/app/components/Card";

export default function App() {
  return (
    
    <>
      <div className="flex px-20 items-center h-[70vh] gap-16">
      <div className="w-[45%]">
      <h1 className="text-6xl font-title text-[#181717]">
        Hello, I'm <br />Muhammad Usman.
      </h1>
      </div>
      <div className="w-[55%] flex text-xl mt-24">
        <p className="font-normal text-xl font-title text-[#606060]">A Senior Web Development Student with ambition to learn AI <br />also know about the basics of Front-end web development. <br />
        Getting closer to become Agentic AI</p>
      </div>
      </div>
        <div className="px-20 -mt-10 mb-36">
          <p className="text-5xl font-extrabold ">
          <TiArrowDown />
          </p>
        </div>

        <Card 
        cardNo="01"
        cardTitle="Word Count"
        cardParagraph="word count been develop using TypeScript and CLI."
        cardSpan="It's Helpful when we just wana count our lengthy paragraphs."
        cardLink="Wana Count your Words"
        cardImage={WordCount}
        />

        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

        {/* 2nd card  */}

        <Card 
        cardNo="02"
        cardTitle="Currency Convertor"
        cardParagraph="Used Only TypeScript to Develop this awesome CLI in our GIAIC classes"
        cardSpan="A good project make you good but a unique one will make you the Best in industry."
        cardLink="More shots from This Project "
        cardImage={Currency}/>
        <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

        <Card 
        cardNo="03"
        cardTitle="Portfolio"
        cardParagraph="All about me, What i learned in GIAIC and got the opportunity to deliever."
        cardSpan="A path who choose many stays only those who have the consistency you can Know more about me in this portfolio."
        cardLink="You can Contact through via "
        cardImage={PortFo}/>
        

        </>
)};