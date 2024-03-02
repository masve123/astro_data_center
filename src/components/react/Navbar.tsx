import React, { useEffect, useRef, useState } from "react"; // Make sure to import useState from React
import Menu0 from "./Menu0";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";


import SlideWrapper from "./SlideWrapper";
import Container from "./Container";
import HeroButton from "./HeroButton";


export default function Navbar() {
    const [hovering, setHovering] = useState<number | null>(null);
    const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
    const [popoverHeight, setPopoverHeight] = useState<number | null>(null);

    const [popoverTop, setPopoverTop] = useState<number | null>(null);


    const refs = useRef<(HTMLElement | null)[]>([]);

    const focusMenu = (index: number, el: HTMLElement) => {
      setHovering(index);
      setPopoverLeft(el.offsetLeft);
      setPopoverTop(el.offsetTop + el.offsetHeight);

      const menuElement = refs.current[index];
      if (menuElement) {
        setPopoverHeight(menuElement.offsetHeight);
    }
    };

    


    return (
      <header className="bg-white dark:bg-darker fixed top-0 left-0 w-full z-50">
      <Container>
      <div className="flex justify-between items-center w-full py-4 lg:py-4">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <div aria-hidden="true" className="flex space-x-1">
            <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
            <div className="h-6 w-2 bg-primary"></div>
          </div>
          <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">SnowCell</a>
          </div>
        {/* </div> */}

        {/* Navigation Items */}
        <nav className="flex justify-between hidden lg:flex items-center gap-4 lg:gap-6">
            <a
                // href="#products"
                onFocus={(event) => focusMenu(0, event.currentTarget)}
                onMouseEnter={(event) => focusMenu(0, event.currentTarget)} 
                className="transition-all flex items-center text-gray-900 dark:text-white hover:text-primary"
            >
                Products
            </a>
            <a
                // href="#solutions"
                onFocus={(event) => focusMenu(1, event.currentTarget)}
                onMouseEnter={(event) => focusMenu(1, event.currentTarget)} 
                className="flex items-center text-gray-900 dark:text-white hover:text-primary"
                
            >
                Solutions
            </a>
              
              {/* Navigation Items without dropdowns */}
          <a href="/whysnowcell" className="text-gray-900 dark:text-white hover:text-primary">Why SnowCell</a>
          <a href="/#pricing" className="text-gray-900 dark:text-white hover:text-primary">Pricing</a>
          <a href="/#pricing" className="text-gray-900 dark:text-white hover:text-primary">Company</a>
          <a href="/#contact-us" className="text-gray-900 dark:text-white hover:text-primary">Contact Us</a>

            
              {/*  Login Item  */}
            <HeroButton variant={"primary"} className={"min-w-max text-white"}>
              <span className="hidden sm:flex relative z-[5]">
                  Sign In
              </span>
              <span className="flex sm:hidden relative z-[5]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>                                      
              </span>
          </HeroButton>

            {typeof hovering === "number" && (
                <div
                    style={{
                        left: popoverLeft ?? 0,
                        height: popoverHeight ?? 0,
                        top: popoverTop ?? 0, // Apply the top position here
                    }}
                    className="absolute w-[600px] rounded bg-white p-5 shadow transition-all duration-300 ease-in-out" // I changed from 600px to 100px
                    onMouseLeave={() => setHovering(null)} // Hide the dropdown when the mouse leaves the menu
                >
                  <SlideWrapper index={0} hovering={hovering}>
                    <Menu3 ref={(ref) => (refs.current[0] = ref)} /> {/* I changed from menu0 to menu3 */}
                  </SlideWrapper>
                  <SlideWrapper index={1} hovering={hovering}>
                    <Menu1 ref={(ref) => (refs.current[1] = ref)} />
                  </SlideWrapper>
                  <SlideWrapper index={2} hovering={hovering}>
                    <Menu2 ref={(ref) => (refs.current[2] = ref)} />
                  </SlideWrapper>
                  <SlideWrapper index={3} hovering={hovering}>
                    <Menu3 ref={(ref) => (refs.current[3] = ref)} />
                  </SlideWrapper>
                  <SlideWrapper index={4} hovering={hovering}>
                    <Menu4 ref={(ref) => (refs.current[4] = ref)} />
                  </SlideWrapper>
                </div>
            )}
        </nav>
        </div>
      </Container>
      </header>
    );
}
