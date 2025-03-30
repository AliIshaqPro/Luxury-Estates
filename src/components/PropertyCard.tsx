
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'sale' | 'rent';
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  price,
  address,
  beds,
  baths,
  sqft,
  type,
  featured = false,
}) => {
  return (
    <Card className="property-card-animation overflow-hidden bg-black/40 border border-white/10 rounded-xl">
      <div className="relative overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={type === 'sale' ? "bg-gold text-black" : "bg-blue-600"}>
            {type === 'sale' ? 'For Sale' : 'For Rent'}
          </Badge>
          {featured && (
            <Badge className="bg-purple-600">
              Featured
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="font-serif font-bold text-gradient-gold">{price}</p>
        </div>
        
        <div className="flex items-center text-gray-400 text-sm mb-4">
          <MapPin className="h-3.5 w-3.5 mr-1 text-gray-400" />
          <span>{address}</span>
        </div>
        
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <div className="flex items-center justify-center">
            <Bed className="h-4 w-4 mr-2 text-gold" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center justify-center">
            <Bath className="h-4 w-4 mr-2 text-gold" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center justify-center">
            <Square className="h-4 w-4 mr-2 text-gold" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
