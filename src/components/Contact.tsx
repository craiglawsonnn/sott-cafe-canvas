
import React from 'react';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Visit Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-foreground/80">Lwowska 1, 30-548 Kraków, Poland</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Opening Hours</h3>
                  <p className="text-foreground/80">Monday - Friday: 7:00 AM - 7:00 PM</p>
                  <p className="text-foreground/80">Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-foreground/80">+48 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-foreground/80">hello@sottcafebakery.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 md:h-full min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.7550246861654!2d19.95387837677667!3d50.04754631850912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b8c8b43becd%3A0x4cbecad2c2807643!2sLwowska%201%2C%2030-548%20Krak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1712848945852!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sott Café & Bakery Location"
              className="rounded-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
