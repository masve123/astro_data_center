import React, { useState, useEffect } from 'react';

 
export default function AccordionAllOpen() {
  const [module, setModule] = useState(null);
  useEffect(() => {
    (async () => {
      const materialTailwind = await import('@material-tailwind/react');
      setModule(materialTailwind);
    })();
  }, []);


  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);
 
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  if (!module) {
    return <div>Loading...</div>;
  }

  const { Accordion, AccordionHeader, AccordionBody } = module;
 
  return (
    <>
      <Accordion open={openAcc1} className="dark:text-white">
        <AccordionHeader onClick={handleOpenAcc1}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody className="dark:text-gray-100">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2} className="dark:text-white">
        <AccordionHeader onClick={handleOpenAcc2}>How to use Material Tailwind?</AccordionHeader>
        <AccordionBody className="dark:text-gray-100">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3} className="dark:text-white">
        <AccordionHeader onClick={handleOpenAcc3}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="dark:text-gray-100">
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

