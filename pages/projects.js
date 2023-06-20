import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pb-4 pt-6 md:space-y-5">
          <div className="relative inline-block">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Projects
              <div className="absolute bottom-0 left-0 mt-6 h-0.5 w-full bg-blue-500 p-1 shadow"></div>
            </h1>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Discover extraordinary projects showcasing my expertise and creativity. From innovative
            web applications to stunning designs, explore a portfolio of excellence that leaves a
            lasting impact.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
