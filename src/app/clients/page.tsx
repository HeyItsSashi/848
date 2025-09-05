import Header from '../../components/Header';
import Clients from '../../pages/Clients';

export const metadata = {
  title: 'Client Success Stories - SevenX Global',
  description: 'Real projects, real impact, real testimonials from our enterprise clients.',
};

export default function ClientsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Clients />
    </div>
  );
}