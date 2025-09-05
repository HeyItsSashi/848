import Header from '../../../components/Header';
import DataAIEngineering from '../../../pages/services/DataAIEngineering';

export const metadata = {
  title: 'Data & AI Engineering - SevenX Global',
  description: 'Help businesses turn data into measurable outcomes through intelligent analysis.',
};

export default function DataAIEngineeringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <DataAIEngineering />
    </div>
  );
}