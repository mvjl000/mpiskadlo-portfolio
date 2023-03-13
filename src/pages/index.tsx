import client from "@/apollo-client";
import { Experience } from "@/components/Experience/Experience";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navigation } from "@/components/Navigation/Navigation";
import Projects from "@/components/Projects/Projects";
import { Quote } from "@/components/Quote/Quote";
import { Skills } from "@/components/Skills/Skills";
import { ApolloQueryResult, gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { z } from "zod";

const projectsQuery = gql`
  {
    allProjects {
      id
      title
      description
      projectUrl
      techStack
      repoUrl
      gallery {
        id
        alt
        url
      }
    }

    _allProjectsMeta {
      count
    }
  }
`;

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().min(140).max(512),
  projectUrl: z.string().url(),
  repoUrl: z.union([z.string().url(), z.string().length(0)]),
  techStack: z.object({
    data: z.array(z.string()),
  }),
  gallery: z.array(
    z.object({
      id: z.string(),
      alt: z.string(),
      url: z.string().url(),
    })
  ),
});

const projectsSchema = z.array(projectSchema);

const projectsResponseSchema = z.object({
  allProjects: projectsSchema,
  _allProjectsMeta: z.object({
    count: z.number(),
  }),
});

export type ProjectType = z.infer<typeof projectSchema>;
type ProjectsResponseType = z.infer<typeof projectsResponseSchema>;

export const getStaticProps = async () => {
  const { data }: ApolloQueryResult<ProjectsResponseType> = await client.query({
    query: projectsQuery,
  });

  const parsingResult = projectsSchema.safeParse(data.allProjects);

  if (!parsingResult.success)
    return {
      props: {
        projects: {
          success: false,
          data: null,
        },
      },
    } as const;

  return {
    props: {
      projects: {
        success: true as const,
        data: parsingResult.data,
      },
    },
  };
};

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Navigation />
      <Hero />
      <Experience />
      {projects.success ? (
        <Projects projects={projects.data} />
      ) : (
        <div className="h-screen bg-black flex items-center justify-center">
          <p className="text-2xl text-center text-white">
            Ooops, something went wrong
            <br />
            Couldn{"'"}t fetch projects
          </p>
        </div>
      )}
      <Quote />
      <Skills />
      <Footer />
    </>
  );
}
