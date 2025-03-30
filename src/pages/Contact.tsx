
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    form.reset();
  };
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="bg-black/80 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Our team is here to help. Reach out to us with any questions about our properties or services.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                placeholder="John Doe"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                placeholder="example@email.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                placeholder="(123) 456-7890"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                placeholder="Property Inquiry"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 resize-none"
                              placeholder="How can we help you?"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="bg-gold hover:bg-gold-light text-black w-full md:w-auto px-8"
                      >
                        Send Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
            
            <div>
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Head Office</h3>
                      <p className="text-gray-300 text-sm">
                        1234 Luxury Lane<br />
                        Beverly Hills, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-300 text-sm">
                        +1 (310) 555-8765<br />
                        +1 (800) LUXURY-1
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-300 text-sm">
                        info@luxuryestates.com<br />
                        sales@luxuryestates.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-gray-300 text-sm">
                        Monday - Friday: 9AM - 6PM<br />
                        Saturday: 10AM - 4PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 mt-6">
                <h2 className="text-2xl font-medium mb-6">Global Offices</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-gold" />
                      New York
                    </h3>
                    <p className="text-gray-300 text-sm">
                      500 Park Avenue<br />
                      New York, NY 10022
                    </p>
                    <p className="text-sm text-gold mt-1">+1 (212) 555-1234</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-gold" />
                      London
                    </h3>
                    <p className="text-gray-300 text-sm">
                      10 Berkeley Square<br />
                      London, W1J 6AA
                    </p>
                    <p className="text-sm text-gold mt-1">+44 20 7123 4567</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-gold" />
                      Dubai
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Emirates Towers<br />
                      Dubai, UAE
                    </p>
                    <p className="text-sm text-gold mt-1">+971 4 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="relative aspect-[16/7] rounded-xl overflow-hidden">
            <iframe
              title="LuxuryEstates Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209964477564!3d34.07739852762174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1656391023691!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
