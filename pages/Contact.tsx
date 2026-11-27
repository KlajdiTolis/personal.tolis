import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { navigate } from '../hooks/useRoute';

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: React.ElementType;
  accent: string;
  copyValue?: string;
}

const phoneDigits = PERSONAL_INFO.phone.replace(/[^\d+]/g, '');
const stripUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

const CONTACT_ITEMS: ContactItem[] = [
  {
    id: 'email',
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: Mail,
    accent: 'group-hover:text-white',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: PERSONAL_INFO.phone,
    href: `tel:${phoneDigits}`,
    icon: Phone,
    accent: 'group-hover:text-white',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: PERSONAL_INFO.phone,
    href: `https://wa.me/${phoneDigits.replace('+', '')}`,
    external: true,
    icon: MessageCircle,
    accent: 'group-hover:text-[#25D366]',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: stripUrl(PERSONAL_INFO.linkedin),
    href: PERSONAL_INFO.linkedin,
    external: true,
    icon: Linkedin,
    accent: 'group-hover:text-[#0A66C2]',
    copyValue: PERSONAL_INFO.linkedin,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: stripUrl(PERSONAL_INFO.github),
    href: PERSONAL_INFO.github,
    external: true,
    icon: Github,
    accent: 'group-hover:text-white',
    copyValue: PERSONAL_INFO.github,
  },
  {
    id: 'location',
    label: 'Location',
    value: PERSONAL_INFO.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PERSONAL_INFO.location)}`,
    external: true,
    icon: MapPin,
    accent: 'group-hover:text-white',
  },
];

const ContactCard: React.FC<{ item: ContactItem; index: number }> = ({ item, index }) => {
  const [copied, setCopied] = useState(false);
  const Icon = item.icon;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.copyValue ?? item.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (insecure context / denied) — silently ignore.
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06 }}
      className="group relative flex items-center gap-4 p-5 border border-zinc-800 rounded-2xl bg-zinc-950 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all"
    >
      <div className={`shrink-0 p-3 rounded-xl border border-zinc-800 text-zinc-400 transition-colors ${item.accent}`}>
        <Icon size={22} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest text-zinc-500">{item.label}</p>
        {item.href ? (
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="block truncate text-white font-medium mt-1 hover:underline underline-offset-4"
          >
            {item.value}
          </a>
        ) : (
          <p className="truncate text-white font-medium mt-1">{item.value}</p>
        )}
      </div>

      <div className="flex shrink-0 gap-1">
        <button
          type="button"
          onClick={handleCopy}
          className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label={`Copy ${item.label}`}
          title={copied ? 'Copied!' : 'Copy'}
        >
          {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
        </button>
        {item.href && item.external && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label={`Open ${item.label}`}
            title="Open"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </button>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-10"
      >
        Contact
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-full md:h-full md:min-h-[460px]">
            <div className="absolute inset-0 bg-zinc-800/20 rounded-2xl rotate-3" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <img
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {CONTACT_ITEMS.map((item, index) => (
            <ContactCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
