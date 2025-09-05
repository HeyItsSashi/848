import Header from '../../../components/Header';
import EnterpriseSolutions from '../../../pages/services/EnterpriseSolutions';

export const metadata = {
  title: 'Enterprise Solutions - SevenX Global',
  description: 'Deliver enterprise-ready solutions with clarity and speed for complex business challenges.',
};

export default function EnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <EnterpriseSolutions />
    </div>
  );
}