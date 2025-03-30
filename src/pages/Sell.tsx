
import React, { useState } from 'react';
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
import { Check, Home, Building, Info, Upload, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Form schema
const sellFormSchema = z.object({
  propertyType: z.string().min(1, "Property type is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "Valid zip code is required"),
  price: z.string().min(1, "Price is required"),
  bedrooms: z.string().min(1, "Number of bedrooms is required"),
  bathrooms: z.string().min(1, "Number of bathrooms is required"),
  squareFeet: z.string().min(1, "Square footage is required"),
  description: z.string().min(10, "Description is required"),
  contactName: z.string().min(2, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(10, "Valid phone number is required"),
});

type SellFormValues = z.infer<typeof sellFormSchema>;

const Sell = () => {
  const [step, setStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { toast } = useToast();
  
  const form = useForm<SellFormValues>({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      propertyType: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      squareFeet: "",
      description: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
    },
  });

  const onSubmit = (data: SellFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Property submission successful",
      description: "Our team will contact you shortly to discuss your listing.",
      duration: 5000,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setUploadedImages((prev) => [...prev, ...fileArray]);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="bg-black/80 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl font-bold mb-4">
              Sell Your <span className="text-gradient-gold">Property</span>
            </h1>
            <p className="text-gray-300 max-w-2xl">
              List your luxury property with LuxuryEstates and connect with qualified buyers from around the world.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-10">
          <div className="glass-card rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            {/* Progress indicator */}
            <div className="flex justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2"></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative z-10">
                  <div 
                    className={`h-8 w-8 rounded-full flex items-center justify-center border ${
                      step >= i ? 'bg-gold border-gold-light' : 'bg-white/10 border-white/20'
                    }`}
                  >
                    {step > i ? (
                      <Check className="h-5 w-5 text-black" />
                    ) : (
                      <span className={step === i ? 'text-black' : 'text-white'}>{i}</span>
                    )}
                  </div>
                  <div className="text-xs text-center mt-2">
                    {i === 1 ? 'Property Details' : i === 2 ? 'Photos & Description' : 'Contact Info'}
                  </div>
                </div>
              ))}
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium">Property Details</h2>
                    
                    <FormField
                      control={form.control}
                      name="propertyType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Type</FormLabel>
                          <FormControl>
                            <select
                              {...field}
                              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                            >
                              <option value="" disabled>Select property type</option>
                              <option value="House">House</option>
                              <option value="Condo">Condo</option>
                              <option value="Apartment">Apartment</option>
                              <option value="Villa">Villa</option>
                              <option value="Penthouse">Penthouse</option>
                              <option value="Estate">Estate</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="bedrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bedrooms</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                min="0"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="bathrooms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bathrooms</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number" 
                                min="0" 
                                step="0.5"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="squareFeet"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Square Feet</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="number"
                                min="0"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Asking Price ($)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              min="0"
                              className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Property Location
                      </h3>
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zip Code</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      Property Photos & Description
                    </h2>
                    
                    <div className="space-y-4">
                      <label className="block text-sm font-medium">
                        Upload Photos (You can select multiple)
                      </label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center">
                        <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-gray-400 mb-2">Drag & drop photos or</p>
                        <div className="relative">
                          <Input 
                            type="file" 
                            multiple
                            accept="image/*" 
                            className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                            onChange={handleImageUpload}
                          />
                          <Button variant="outline" className="border-white/20 hover:bg-white/10">
                            Browse Files
                          </Button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          Upload high-quality images (max 10MB each)
                        </p>
                      </div>
                    </div>
                    
                    {uploadedImages.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium">Uploaded Images</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {uploadedImages.map((img, index) => (
                            <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                              <img 
                                src={img} 
                                alt={`Property image ${index + 1}`} 
                                className="object-cover w-full h-full"
                              />
                              <button 
                                className="absolute top-1 right-1 bg-black/80 rounded-full p-1 hover:bg-black text-white"
                                onClick={() => setUploadedImages(uploadedImages.filter((_, i) => i !== index))}
                              >
                                &times;
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Description</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={6}
                              placeholder="Describe your property in detail. Include key features, recent renovations, and what makes it special..."
                              className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium">Contact Information</h2>
                    <p className="text-gray-400">How can potential buyers or our agents reach you?</p>
                    
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="contactEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400"
                                placeholder="email@example.com"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contactPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
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
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="bg-gold hover:bg-gold-light text-black w-full py-6 h-auto text-lg"
                      >
                        Submit Property Listing
                      </Button>
                      <p className="text-sm text-gray-400 mt-3 text-center">
                        By submitting, you agree to our terms and conditions.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      className="border-white/20 hover:bg-white/10"
                    >
                      Previous
                    </Button>
                  )}
                  <div className={step > 1 ? 'ml-auto' : ''}>
                    {step < 3 && (
                      <Button
                        type="button"
                        className="bg-gold hover:bg-gold-light text-black"
                        onClick={nextStep}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sell;
