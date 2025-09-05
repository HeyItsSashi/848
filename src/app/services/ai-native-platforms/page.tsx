import Header from '../../../components/Header';
import AINativePlatforms from '../../../pages/services/AINativePlatforms';

export const metadata = {
  title: 'AI-Native Platforms - SevenX Global',
  description: 'Build AI-native platforms with closed-loop intelligence that learn and adapt continuously.',
};

export default function AINativePlatformsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AINativePlatforms />
    </div>
  );
}