
import React, { useState, useEffect } from "react";

export function HorizontalCard() {
    // dynamic imports for material-tailwind to work
    const [module, setModule] = useState(null);
    useEffect(() => {
        (async () => {
            const materialTailwind = await import("@material-tailwind/react");
            setModule(materialTailwind);
        })();
    }, []);

    if (!module) {
        return <div>Loading...</div>;
    }

    const { Card, CardHeader, CardBody, Typography, Button } = module;

    return (
        <Card className="w-full max-w-[48rem] flex-row bg-gray-100 dark:bg-gray-900">
            {/* <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 rounded-r-none">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="card-image" className="h-full w-full object-cover" />
            </CardHeader> */}
            <CardBody>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mb-4 h-12 w-12 text-gray-900 dark:text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
                <Typography variant="h6" color="gray" className="mb-4 uppercase dark:text-gray-400">
                    console
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 font-bold text-heading-1 dark:text-gray-100">
                    Build, Launch, Deploy
                </Typography>
                <Typography color="gray" className="mb-8 text-lg text-gray-700 dark:text-gray-100">
                The SnowCell Console is your personal gateway to high-performance GPUs, crafted for developers. 
                Streamline your projects with serverless inference and rendering capabilities directly from our catalog.
                </Typography>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2 dark:text-gray-100">
                        Sign Up Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Button>
                </a>
            </CardBody>
        </Card>
    );
}
export default HorizontalCard;
