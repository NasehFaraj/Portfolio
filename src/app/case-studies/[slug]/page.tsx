import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetail from "./CaseStudyDetail";

type PageProps = {
  params: { slug: string };
};

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}
