import React, { useState, useEffect } from 'react';

 
export default function HeroSectionAccordion() {
  const [module, setModule] = useState(null);
  useEffect(() => {
    (async () => {
      const materialTailwind = await import('@material-tailwind/react');
      setModule(materialTailwind);
    })();
  }, []);


  const [openAcc1, setOpenAcc1] = React.useState(true); 
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);


  if (!module) {
    return <div>Loading...</div>;
  }

  const { Accordion, AccordionHeader, AccordionBody } = module;
 
  return (
    <>
      <Accordion open={openAcc1} className="dark:text-white">
        <AccordionHeader onClick={handleOpenAcc1}>Why SnowCell?</AccordionHeader>
        <AccordionBody className="dark:text-gray-100">
          {/* We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams. */}

          We are faster, cheaper, and more efficient than traditional legacy providers. 
          Gone are the days of complex setups, slow deployments, and escalating costs. 
        </AccordionBody>
      </Accordion>
    </>
  );
}

