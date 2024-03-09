import React, { useState, useEffect } from 'react';

 
export default function HeroSectionAccordion() {
  const [module, setModule] = useState(null);

  
  useEffect(() => {
    (async () => {
      const materialTailwind = await import('@material-tailwind/react');
      setModule(materialTailwind);
    })();
  }, []);

  // // use this to open and close the accordion
  // const [openAcc1, setOpenAcc1] = React.useState(true); 
  // const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

  // Currently in use: always open
  const [alwaysOpen, setAlwaysOpen] = useState(true);
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);


  if (!module) {
    return <div>Loading...</div>;
  }

  const { Accordion, AccordionHeader, AccordionBody } = module;
 
  return (
    <>
      <Accordion open={alwaysOpen} className="dark:text-white">
        <AccordionHeader>Why SnowCell?</AccordionHeader>
        <AccordionBody className="dark:text-gray-100">
          We are faster, cheaper, and more efficient than traditional legacy providers. 
          Gone are the days of complex setups, slow deployments, and escalating costs. 
        </AccordionBody>
      </Accordion>
    </>
  );
}

