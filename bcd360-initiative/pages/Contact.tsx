import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'permission-error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Firebase
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // Submit to Formspree
      await fetch('https://formspree.io/f/xzznarpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          message: formData.message
        })
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error("Error submitting form: ", error);
      if (error.code === 'permission-denied') {
        setSubmitStatus('permission-error');
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-light py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">{t('GetInTouch')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('GetInTouchText')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">{t('SendUsMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('Name')} <span className="text-red-500">*</span></label>
                <input 
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  placeholder={t('YourName')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('Email')} <span className="text-red-500">*</span></label>
                <input 
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('Phone')}</label>
                  <input 
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  />
                </div>
                 <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">{t('Address')}</label>
                  <input 
                    type="text" id="address" name="address"
                    value={formData.address} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('Message')} <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" name="message" rows={4} required
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition bg-gray-50 focus:bg-white"
                  placeholder={t('HowCanWeHelp')}
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium animate-fade-in">
                  {t('SuccessMessage')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium animate-fade-in">
                  {t('ErrorMessage')}
                </div>
              )}

               {submitStatus === 'permission-error' && (
                <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg text-sm font-medium animate-fade-in">
                  {t('PermissionError')} <a href={`mailto:${CONTACT_INFO.officialEmail}`} className="underline font-bold">{CONTACT_INFO.officialEmail}</a>.
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> {t('Sending')}
                  </>
                ) : (
                  <>
                    {t('SendMessage')} <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info & Donation */}
          <div className="space-y-8">
            
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-secondary">
              <h3 className="text-xl font-bold text-dark mb-6">{t('ContactInfo')}</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0"><MapPin size={20}/></div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-dark mb-1">{t('Headquarters')}</p>
                    <p className="mb-2">{CONTACT_INFO.address1}</p>
                    <p>{CONTACT_INFO.address2}</p>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0"><Phone size={20}/></div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-dark mb-1">{t('Phone')}</p>
                    <p>{CONTACT_INFO.phone}</p>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-primary rounded-full flex items-center justify-center flex-shrink-0"><Mail size={20}/></div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-dark mb-3">{t('Email')}</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">General</p>
                        <a href="mailto:info@bcd360.org.ng" className="text-primary hover:text-secondary transition font-medium">info@bcd360.org.ng</a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Programmes</p>
                        <a href="mailto:Programmes@bcd360.org.ng" className="text-primary hover:text-secondary transition font-medium">Programmes@bcd360.org.ng</a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">MERL (Monitoring, Evaluation & Learning)</p>
                        <a href="mailto:MERL@bcd360.org.ng" className="text-primary hover:text-secondary transition font-medium">MERL@bcd360.org.ng</a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Director</p>
                        <a href="mailto:director@bcd360.org.ng" className="text-primary hover:text-secondary transition font-medium">director@bcd360.org.ng</a>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-1">Finance & Administration</p>
                        <a href="mailto:FA@bcd360.org.ng" className="text-primary hover:text-secondary transition font-medium">FA@bcd360.org.ng</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Support Button Card */}
             <div className="bg-gradient-to-br from-secondary to-red-900 p-8 rounded-2xl shadow-xl text-white">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                   <Heart size={24} className="text-white"/>
                 </div>
                 <h3 className="text-2xl font-serif font-bold">{t('SupportOurWork')}</h3>
              </div>
              <p className="text-red-100 mb-8 text-sm leading-relaxed">
                Interested in supporting our mission? View our bank details and donation information on our dedicated Support page.
              </p>
              
              <NavLink 
                to="/support"
                className="inline-block w-full bg-white text-secondary px-8 py-4 rounded-lg font-bold text-lg text-center hover:shadow-xl hover:bg-gray-50 transform hover:-translate-y-1 transition duration-300"
              >
                View Support Options
              </NavLink>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;