import ServiceCard from './ServiceCard';

const services = [
  {
    icon: '⚙️',
    title: 'ERP Implementation',
    description:
      'Automate inventory, finance, procurement, and CRM workflows through reliable ERP deployment and process redesign.',
  },
  {
    icon: '📈',
    title: 'Brand Promotion',
    description:
      'Expand digital presence with SEO, ads, content strategy, funnel optimization, and social growth programs.',
  },
  {
    icon: '🎬',
    title: 'Video Production & Promotion',
    description:
      'Create brand films, ad creatives, short-form videos, and campaign distribution strategies that improve engagement.',
  },
  {
    icon: '💻',
    title: 'Website Design & Development',
    description:
      'Design and build modern, high-performance websites, eCommerce storefronts, and SaaS platforms for B2B outcomes.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-wrap py-20">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">Services</p>
      <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
        A complete digital growth stack for modern businesses.
      </h2>
      <p className="mt-4 max-w-3xl text-slate-300">
        Every service is structured to support your core KPIs: operational efficiency, lead quality,
        sales conversion, and long-term scalability.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
