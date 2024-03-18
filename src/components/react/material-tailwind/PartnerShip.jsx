import React, { useState, useEffect } from "react";
import Container from "../Container";

export default function SimpleRegistrationForm() {
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

    const { Card, Input, Checkbox, Button, Typography } = module;

    return (
        <Container>
            <Card color="transparent" shadow={false} className="dark:bg-dark">
                <Typography variant="h4" color="blue-gray" className="dark:text-gray-200">
                    Partnership Inquiry
                </Typography>
                <Typography color="gray" className="mt-1 font-normal dark:text-gray-300">
                    We're excited about the opportunity to partner with you! Please share your details and we'll be in touch.
                </Typography>
                <form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="John Doe"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="johndoe@example.com"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
                            Company Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Doe Industries"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
                            Message
                        </Typography>
                        <textarea placeholder="Tell us more about your partnership idea..." 
                        className="h-32 w-full resize-none rounded-lg border-2 border-gray-300 p-4 transition-colors focus:border-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400
                        focus:outline-none" 
                        />
                    </div>
                    <Button className="mt-6 dark:bg-primary dark:text-white dark:hover:bg-opacity-90" fullWidth>
                        Submit Inquiry
                    </Button>
                </form>
            </Card>
        </Container>
    );
}
