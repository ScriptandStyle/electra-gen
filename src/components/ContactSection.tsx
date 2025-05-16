
import React from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-shore-blue mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in learning more about our innovative energy solutions? Contact us today to discuss how Shore Energy can help create a sustainable future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 border-none shadow-lg hover-card">
            <h3 className="text-2xl font-bold text-shore-blue mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-shore-blue/10">
                  <Mail className="h-6 w-6 text-shore-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email Us</h4>
                  <p className="text-gray-600">electragen7@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-shore-blue/10">
                  <Phone className="h-6 w-6 text-shore-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-shore-blue/10">
                  <MapPin className="h-6 w-6 text-shore-blue" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Visit Us</h4>
                  <p className="text-gray-600">Sri Eshwar college of Engineering</p>
                  <p className="text-gray-600">Coimbatore</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-shore-blue/5 rounded-lg border border-shore-blue/20">
              <h4 className="font-medium text-lg text-shore-blue mb-2">Operating Hours</h4>
              <p className="text-gray-600">Monday - Friday: 9AM - 5PM</p>
              <p className="text-gray-600">Saturday: 10AM - 2PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </Card>
          
          <Card className="p-8 border-none shadow-lg hover-card">
            <h3 className="text-2xl font-bold text-shore-blue mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">Full Name</label>
                  <Input id="name" placeholder="Your Name" className="hover:border-shore-blue focus:border-shore-electric transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">Email Address</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="hover:border-shore-blue focus:border-shore-electric transition-colors duration-300" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help you?" className="hover:border-shore-blue focus:border-shore-electric transition-colors duration-300" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px] hover:border-shore-blue focus:border-shore-electric transition-colors duration-300" />
              </div>
              
              <Button className="w-full bg-shore-blue hover:bg-shore-electric transition-colors duration-300">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
