import React, { useState, useEffect } from 'react';

function AccordionAlwaysOpen() {
  const [module, setModule] = useState(null);
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);

  useEffect(() => {
    (async () => {
      const materialTailwind = await import('@material-tailwind/react');
      setModule(materialTailwind);
    })();
  }, []);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if (!module) {
    return <div>Loading...</div>;
  }

  const { Accordion, AccordionHeader, AccordionBody } = module;

  return (
    <>
      <Accordion open={alwaysOpen}>
        <AccordionHeader onClick={handleAlwaysOpen}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default AccordionAlwaysOpen;
