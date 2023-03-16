import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Title from "../../components/Title";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="max-w-7xl m-auto px-4 min-h-[calc(100vh-100px)] flex flex-col gap-4 my-12">
      <Title section="FAQ" title="Any Questions? Look Here"></Title>
      <div>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)} className='text-black'>
            Is this a real store?
          </AccordionHeader>
          <AccordionBody className='text-black'>
            <strong className="text-red-500 font-semibold">No!</strong> This is a demo store created by <a href="https://www.linkedin.com/in/bautista-pietraroia/" target={'_blank'} className='underline text-blue-500'>Bautista Pietraroia</a>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)} className='text-black'>
            How can I make an online purchase in your store?
          </AccordionHeader>
          <AccordionBody className='text-black'>
            To make a purchase in our online store, simply select the product you wish to buy, add it to the cart and follow the steps indicated on the screen to complete the purchase. If you have any difficulty, do not hesitate to contact us.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)} className='text-black'>
            What are the accepted payment methods?
          </AccordionHeader>
          <AccordionBody className='text-black'>
            We accept a variety of payment methods, including credit cards, debit cards, bank transfers and online payments. All of our payment methods are secure and reliable.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)} className='text-black'>
            How long does it take for my order to arrive?
          </AccordionHeader>
          <AccordionBody className='text-black'>
            The delivery time varies depending on the location and the shipping method selected. In general, the delivery time can be between 2 and 7 business days. However, in some cases, the delivery time may be longer. We will provide you with a tracking number so you can track your order at all times.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6}>
          <AccordionHeader onClick={() => handleOpen(6)} className='text-black'>
            What happens if the product I received is damaged or not what I expected?
          </AccordionHeader>
          <AccordionBody className='text-black'>
            If the product you received is damaged or not what you expected, contact us immediately so we can help you resolve the issue. In some cases, you may be able to return the product for a refund or exchange.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7}>
          <AccordionHeader onClick={() => handleOpen(7)} className='text-black'>
            Do you offer international shipping?
          </AccordionHeader>
          <AccordionBody className='text-black'>
            Yes, we offer international shipping to some countries. Please check our shipping page for more information about the countries we ship to and the shipping prices.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}