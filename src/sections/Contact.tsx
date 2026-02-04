import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Linkedin, MapPin, Radio, CheckCircle, Github, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-smoke to-void" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label text-center">/// PROTOCOL: CONTACT</div>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-mist tracking-wide mt-4">
            INITIATE
          </h2>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-cyan tracking-wide glow-cyan">
            TRANSMISSION
          </h2>
          <p className="text-fog/70 font-rajdhani mt-4 max-w-2xl mx-auto">
            Establish a secure connection. All transmissions are encrypted and
            will be responded to within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Terminal Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-smoke rounded-lg border border-cyan/30 overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-ash/50 px-4 py-3 flex items-center gap-2 border-b border-cyan/20">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-cyan" />
                <span className="ml-4 font-monoTech text-xs text-fog/50">
                  transmission_protocol.exe
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-4" />
                    <h3 className="font-orbitron text-xl text-mist mb-2">
                      TRANSMISSION SUCCESSFUL
                    </h3>
                    <p className="text-fog/70 font-monoTech">
                      Your message has been encrypted and sent.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Name Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-monoTech text-cyan">
                        <span>&gt;</span>
                        <span>NAME:</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-void border ${focusedField === 'name'
                            ? 'border-cyan shadow-cyan'
                            : 'border-ash'
                          } rounded px-4 py-3 text-mist font-rajdhani focus:outline-none transition-all duration-300`}
                        placeholder="Enter your designation..."
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-monoTech text-cyan">
                        <span>&gt;</span>
                        <span>EMAIL:</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full bg-void border ${focusedField === 'email'
                            ? 'border-cyan shadow-cyan'
                            : 'border-ash'
                          } rounded px-4 py-3 text-mist font-rajdhani focus:outline-none transition-all duration-300`}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 font-monoTech text-cyan">
                        <span>&gt;</span>
                        <span>MESSAGE:</span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className={`w-full bg-void border ${focusedField === 'message'
                            ? 'border-cyan shadow-cyan'
                            : 'border-ash'
                          } rounded px-4 py-3 text-mist font-rajdhani focus:outline-none transition-all duration-300 resize-none`}
                        placeholder="Enter your transmission..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-cyan flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-cyan/30 border-t-cyan rounded-full animate-spin" />
                          ENCRYPTING...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          EXECUTE TRANSMISSION
                        </>
                      )}
                    </button>
                  </>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Direct Contact */}
            <div className="glass rounded-xl p-6 border border-cyan/20">
              <h3 className="font-orbitron text-lg text-mist tracking-wider mb-6">
                DIRECT CONTACT
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+9779849756660"
                  className="flex items-center gap-4 text-fog hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Phone size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-monoTech text-xs text-fog/50">SIGNAL</div>
                    <div className="font-rajdhani">+977-9849756660</div>
                  </div>
                </a>

                <a
                  href="mailto:koiralachetan16@gmail.com"
                  className="flex items-center gap-4 text-fog hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-monoTech text-xs text-fog/50">ETHER</div>
                    <div className="font-rajdhani">koiralachetan16@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/np/ChetanKoirala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-fog hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Linkedin size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-monoTech text-xs text-fog/50">NETWORK</div>
                    <div className="font-rajdhani">linkedin.com/np/ChetanKoirala</div>
                  </div>
                </a>

                <a
                  href="https://github.com/chetan079bca005-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-fog hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Github size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-monoTech text-xs text-fog/50">REPOSITORY</div>
                    <div className="font-rajdhani">github.com/chetan079bca005-code</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/9779849756660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-fog hover:text-cyan transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <MessageCircle size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-monoTech text-xs text-fog/50">WHATSAPP</div>
                    <div className="font-rajdhani">+91 9849756660</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-fog">
                  <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                    <MapPin size={18} className="text-cyan" />
                  </div>
                  <div>
                    <div className="font-monoTech text-xs text-fog/50">COORDINATES</div>
                    <div className="font-rajdhani">Kathmandu, Nepal</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Panel */}
            <div className="glass rounded-xl p-6 border border-cyan/20">
              <h3 className="font-orbitron text-lg text-mist tracking-wider mb-6">
                SYSTEM STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Radio size={18} className="text-cyan" />
                    <span className="text-fog font-rajdhani">Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                    <span className="text-cyan font-monoTech text-sm">ONLINE</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Send size={18} className="text-cyan" />
                    <span className="text-fog font-rajdhani">Response Time</span>
                  </div>
                  <span className="text-cyan font-monoTech text-sm">&lt; 24 HOURS</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 border border-cyan rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan rounded-sm" />
                    </div>
                    <span className="text-fog font-rajdhani">Availability</span>
                  </div>
                  <span className="text-cyan font-monoTech text-sm">OPEN</span>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-6 pt-4 border-t border-ash">
                <div className="flex items-center justify-between text-xs font-monoTech text-fog/50">
                  <span>ENCRYPTION: AES-256</span>
                  <span>SECURE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
