import React, { useState, useEffect } from 'react';
import Container from '../Container';
   
  export default function SimpleRegistrationForm() {
    const [module, setModule] = useState(null);

    useEffect(() => {
        (async () => {
          const materialTailwind = await import('@material-tailwind/react');
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
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal dark:text-gray-300">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3 dark:text-gray-200">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal dark:text-gray-300"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-200"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 dark:bg-primary dark:text-white dark:hover:bg-opacity-90" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal dark:text-gray-300">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900 dark:text-primary">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
      </Container>
    );
  }
  