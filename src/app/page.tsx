import type { Metadata } from "next";
import {
  articles,
  profile,
  projects,
  roles,
  site,
  skillGroups,
  socials,
  successStories,
} from "@/content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { SuccessStories } from "@/components/SuccessStories";
import { Projects } from "@/components/Projects";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: site.url,
    jobTitle: profile.title,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medan",
      addressCountry: "ID",
    },
    knowsAbout: profile.keywords,
    sameAs: socials.map((social) => social.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <Nav profile={profile} socials={socials} />
      <main id="main">
        <Hero profile={profile} socials={socials} />
        <About profile={profile} />
        <Skills skillGroups={skillGroups} />
        <Experience roles={roles} />
        <SuccessStories successStories={successStories} />
        <Projects projects={projects} />
        <Writing articles={articles} />
        <Contact profile={profile} socials={socials} />
      </main>
      <Footer socials={socials} />
    </>
  );
}
