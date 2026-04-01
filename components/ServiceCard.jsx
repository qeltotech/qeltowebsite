import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServiceCard({ icon, title, description }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMove = (event) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -py * 10, y: px * 10 });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      onMouseMove={onMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      className="glass rounded-2xl p-6 transition-transform"
    >
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gradient text-lg text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}
