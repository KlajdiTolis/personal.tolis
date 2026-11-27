import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  Copy,
  Download,
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

const buildVCard = () => {
  const [first, ...rest] = PERSONAL_INFO.name.split(' ');
  const last = rest.join(' ');
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${last};${first};;;`,
    `FN:${PERSONAL_INFO.name}`,
    `TITLE:${PERSONAL_INFO.title}`,
    `EMAIL;TYPE=INTERNET:${PERSONAL_INFO.email}`,
    `TEL;TYPE=CELL:${phoneDigits}`,
    `URL:${PERSONAL_INFO.linkedin}`,
    `URL:${PERSONAL_INFO.github}`,
    `ADR;TYPE=WORK:;;;${PERSONAL_INFO.location.replace(', ', ';;')};`,
    'END:VCARD',
  ].join('\r\n');
};

const downloadVCard = () => {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

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
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-10"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </button>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-14 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-full md:max-w-[380px] md:h-[460px]">
            <div className="absolute inset-0 bg-zinc-800/30 rounded-2xl -rotate-3" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl">
              <img
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <span className="text-zinc-500 font-medium tracking-widest text-sm uppercase">Contact</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mt-3">{PERSONAL_INFO.name}</h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light mt-3">{PERSONAL_INFO.title}</p>
          <p className="text-zinc-500 text-lg leading-relaxed mt-6 max-w-xl mx-auto md:mx-0">
            Tech lead and full-stack engineer building real-time systems across EV infrastructure, enterprise
            SaaS, IPTV/OTT and IoT. Based in {PERSONAL_INFO.location}. Here is where you can reach me.
          </p>
          <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 text-sm text-zinc-300">
              <MapPin size={14} />
              {PERSONAL_INFO.location}
            </span>
            {PERSONAL_INFO.languages.map((lang) => (
              <span
                key={lang.name}
                className="px-3 py-1.5 rounded-full border border-zinc-800 text-sm text-zinc-400"
              >
                {lang.name} <span className="text-zinc-600">· {lang.level}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONTACT_ITEMS.map((item, index) => (
          <ContactCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex flex-col sm:flex-row gap-4"
      >
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors"
        >
          <Mail className="mr-2" size={20} />
          Send me an email
        </a>
        <button
          type="button"
          onClick={downloadVCard}
          className="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-900 transition-colors"
        >
          <Download className="mr-2" size={20} />
          Save contact (vCard)
        </button>
      </motion.div>
    </section>
  );
};

export default Contact;
