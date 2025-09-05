import Header from '../../components/Header';
import Careers from '../../pages/Careers';

export const metadata = {
  title: 'Careers - SevenX Global',
  description: 'Join SevenX Global and help build the future of AI-native platforms and intelligent systems.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Careers />
    </div>
  );
}