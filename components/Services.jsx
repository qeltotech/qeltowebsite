import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '⚙️',
    title: 'ERP Implementation',
    description:
      'Automate operations with integrated inventory, finance, procurement, and CRM workflows that improve visibility and reduce manual overhead.',
  },
  {
    icon: '📈',
    title: 'Brand Promotion',
    description:
      'Drive measurable growth through SEO, paid ads, social campaigns, and conversion-centered digital marketing strategies.',
  },
  {
    icon: '🎬',
    title: 'Video Promotion',
    description:
      'Produce and promote high-impact videos, ads, and reels that strengthen brand trust and accelerate audience engagement.',
  },
  {
    icon: '💻',
    title: 'Website Development',
    description:
      'Launch responsive business websites, eCommerce experiences, and SaaS-ready platforms engineered for performance and scalability.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">Core Services</p>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
        Complete digital solutions aligned to your business goals.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
