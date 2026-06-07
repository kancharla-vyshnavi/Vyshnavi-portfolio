'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const emailVal = 'vyshuv474@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: Record<string, string> = {};

    if (!formState.name.trim()) tempErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }
    if (!formState.message.trim()) tempErrors.message = 'Message is required';

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setStatus('submitting');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Neon Glows */}
      <div className="absolute bottom-1/10 right-1/4 w-[300px] h-[300px] bg-cyber-pink/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <span className="font-mono text-sm tracking-widest text-cyber-purple uppercase block">
            [07] // SECURE CONNECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-extrabold text-foreground">Contact Registry</h3>
            <p className="text-sm text-gray-400 dark:text-gray-300 leading-relaxed max-w-sm">
              Please feel free to connect with me. Whether you have an internship opening, a project idea, or just want to talk about Data Analytics and AI, I will get back to you!
            </p>

            {/* Email Card (Copyable) */}
            <div className="p-4 rounded-xl bg-black/25 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-cyber-cyan/30 transition-all duration-300 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">EMAIL</div>
                  <div className="text-sm font-semibold text-foreground break-all">{emailVal}</div>
                </div>
              </div>
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-cyber-cyan hover:bg-cyber-cyan/5 transition-all duration-200 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-black/25 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-cyber-purple/30 transition-all duration-300 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-gray-500 uppercase">PHONE</div>
                <div className="text-sm font-semibold text-foreground">+91 99123 24198</div>
              </div>
            </div>

            {/* Socials Card */}
            <div className="p-4 rounded-xl bg-black/25 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-cyber-pink/30 transition-all duration-300">
              <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">NETWORKS</div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kancharla-lakshmi-vyshnavi-37445833a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-sky-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-sky-400" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/kancharla-vyshnavi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyber-cyan transition-colors"
                >
                  <Github className="h-4 w-4 text-cyber-cyan" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-black/30 dark:bg-[#0c0c0c] border border-black/5 dark:border-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.2)]">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold text-gray-400 uppercase">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          className={`w-full bg-black/20 dark:bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,245,255,0.2)] transition-all ${
                            errors.name ? 'border-cyber-pink' : 'border-white/10'
                          }`}
                          placeholder="Karan..."
                        />
                        {errors.name && (
                          <span className="text-[10px] font-mono text-cyber-pink block">{errors.name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-bold text-gray-400 uppercase">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          className={`w-full bg-black/20 dark:bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,245,255,0.2)] transition-all ${
                            errors.email ? 'border-cyber-pink' : 'border-white/10'
                          }`}
                          placeholder="karan@example.com"
                        />
                        {errors.email && (
                          <span className="text-[10px] font-mono text-cyber-pink block">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-gray-400 uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        className="w-full bg-black/20 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,245,255,0.2)] transition-all"
                        placeholder="Collaboration Opportunities"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-gray-400 uppercase">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full bg-black/20 dark:bg-white/5 border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,245,255,0.2)] transition-all resize-none ${
                          errors.message ? 'border-cyber-pink' : 'border-white/10'
                        }`}
                        placeholder="I'd love to invite you for an interview..."
                      />
                      {errors.message && (
                        <span className="text-[10px] font-mono text-cyber-pink block">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-black font-bold hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 transform active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {status === 'submitting' ? (
                        <span className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Transmit Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 space-y-4"
                  >
                    <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 animate-bounce">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h4 className="text-xl font-extrabold text-foreground">Transmission Succeeded</h4>
                    <p className="text-sm text-gray-400 dark:text-gray-300 max-w-xs leading-relaxed">
                      Your message has been encrypted and sent to my inbox. I will analyze the contents and reply shortly!
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-xl border border-white/15 text-xs font-mono text-gray-400 hover:text-white hover:border-white/25 transition-all mt-4 cursor-pointer"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
