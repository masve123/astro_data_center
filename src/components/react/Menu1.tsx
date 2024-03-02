import { forwardRef } from "react";

const SectionLink = ({ src, alt, text }) => (
  <div className="flex gap-2.5 items-start self-start max-w-full">
    <img loading="lazy" src={src} alt={alt} className="object-contain overflow-hidden self-start w-4 max-w-full aspect-square" />
    <div className="self-start text-sm font-medium tracking-wide leading-5 whitespace-nowrap text-sky-950">{text}</div>
  </div>
);

const sectionsData = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a7a9daf-60b5-4691-8cc8-da401c607692?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Support Center Icon",
    text: "Support Center",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f822770-e3ce-46c6-9848-44794c771396?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Support Plans Icon",
    text: "Support Plans",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/606121cb-96a7-4b1d-92ae-56a16d3ff96c?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Guides Icon",
    text: "Guides",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cdd706a8-7511-4eeb-9856-7c1883dfc30d?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Customer Stories Icon",
    text: "Customer Stories",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c3571a4-6af7-4d91-9dc3-05db71b57aab?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Blog Icon",
    text: "Blog",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/30b6c375-a656-4b87-a7b4-af94077d85bb?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Annual Conference Icon",
    text: "Annual Conference",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/06a9e233-31d7-4c60-9bc1-0f2d1876e2e9?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Contact Sales Icon",
    text: "Contact Sales",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9723939f-de92-4282-8e3a-2e32257d9d3c?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Jobs Icon",
    text: "Jobs",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/980ec4b1-687f-4f58-a84b-2b71e445a909?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Newsroom Icon",
    text: "Newsroom",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7889138c-d763-4255-b6df-3ae21fc93e14?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Stripe Press Icon",
    text: "Stripe Press",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8bfcd31-5eef-4fa5-ba8f-e5d1a55246cb?apiKey=ae3be05ca001433cabd8590597471ad6&",
    alt: "Become a Partner Icon",
    text: "Become a Partner",
  }
];

export const Menu1 = forwardRef<HTMLElement>((props, ref) => (
    <section ref={ref} {...props}>
         <div className="flex flex-col bg-white">
      <div className="self-start px-5 mt-9 ml-8 max-w-full w-[401px] max-md:ml-2.5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              {sectionsData.slice(0, 4).map((item, index) => (
                <SectionLink key={index} src={item.src} alt={item.alt} text={item.text} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              {sectionsData.slice(4).map((item, index) => (
                <SectionLink key={index} src={item.src} alt={item.alt} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-start px-5 py-7 mt-7 mb-1 max-w-full rounded bg-slate-100 w-[600px]">
        <div className="flex flex-col items-start self-start py-0.5 pr-5 max-w-full w-[466px]">
          <div className="flex gap-5 justify-between items-start self-start max-w-full w-[393px]">
            <div className="flex flex-col items-start self-stretch min-w-[217px]">
              <SectionLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a7a9daf-60b5-4691-8cc8-da401c607692?apiKey=ae3be05ca001433cabd8590597471ad6&" alt="Jobs Icon" text="Jobs" />
              <SectionLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f822770-e3ce-46c6-9848-44794c771396?apiKey=ae3be05ca001433cabd8590597471ad6&" alt="Newsroom Icon" text="Newsroom" />
            </div>
            <div className="flex flex-col items-start self-stretch min-w-[217px]">
              <SectionLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/606121cb-96a7-4b1d-92ae-56a16d3ff96c?apiKey=ae3be05ca001433cabd8590597471ad6&" alt="Stripe Press Icon" text="Stripe Press" />
              <SectionLink src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdd706a8-7511-4eeb-9856-7c1883dfc30d?apiKey=ae3be05ca001433cabd8590597471ad6&" alt="Become a Partner Icon" text="Become a Partner" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
));

export default Menu1;
