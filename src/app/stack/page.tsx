import Header from '../../components/Header';
import Stack from '../../pages/Stack';

export const metadata = {
  title: 'SevenX Stack - SevenX Global',
  description: 'Our foundation built on purpose, strategy, and culture that drives intelligent solutions.',
};

export default function StackPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Stack />
    </div>
  );
}