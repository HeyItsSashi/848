import Header from '../../../components/Header';
import EdgeSystems from '../../../pages/services/EdgeSystems';

export const metadata = {
  title: 'Edge Systems - SevenX Global',
  description: 'Design edge systems for real-time automation and analytics at the point of action.',
};

export default function EdgeSystemsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <EdgeSystems />
    </div>
  );
}