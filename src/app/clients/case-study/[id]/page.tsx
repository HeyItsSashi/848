import { notFound } from 'next/navigation';
import Header from '../../../../components/Header';
import CaseStudyDetail from '../../../../pages/CaseStudyDetail';

const clientProjects = [
  { id: 'healthcare', title: 'HealthTrack Mobile App' },
  { id: 'retail', title: 'RetailBot Assistant' },
  { id: 'manufacturing', title: 'SmartFactory Automation' },
  { id: 'finance', title: 'FinanceFlow Mobile Suite' },
  { id: 'education', title: 'EduAdapt Learning Platform' }
];

export function generateStaticParams() {
  return clientProjects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = clientProjects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Case Study Not Found - SevenX Global',
    };
  }

  return {
    title: `${project.title} - Case Study - SevenX Global`,
    description: `Detailed case study of ${project.title} - discover how SevenX Global delivered intelligent solutions with measurable results.`,
  };
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = clientProjects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <CaseStudyDetail />
    </div>
  );
}