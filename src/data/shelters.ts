export interface Shelter {
  id: string;
  name: string;
  type: 'shelter' | 'hospital' | 'relief-camp';
  lat: number;
  lng: number;
  address: string;
  contact: string;
  capacity: number;
  status: 'open' | 'full' | 'closed';
  city: string;
}

export const shelters: Shelter[] = [
  // Islamabad
  {
    id: 's1',
    name: 'F-9 Park Emergency Shelter',
    type: 'shelter',
    lat: 33.7010,
    lng: 73.0262,
    address: 'F-9 Fatima Jinnah Park, Islamabad',
    contact: '051-9210637',
    capacity: 3000,
    status: 'open',
    city: 'Islamabad',
  },
  {
    id: 's2',
    name: 'Pakistan Institute of Medical Sciences',
    type: 'hospital',
    lat: 33.6938,
    lng: 73.0485,
    address: 'G-8/3, Islamabad',
    contact: '051-9261170',
    capacity: 800,
    status: 'open',
    city: 'Islamabad',
  },
  {
    id: 's3',
    name: 'Islamabad Convention Centre Relief Camp',
    type: 'relief-camp',
    lat: 33.7126,
    lng: 73.0872,
    address: 'Club Road, Islamabad',
    contact: '051-9205037',
    capacity: 2000,
    status: 'open',
    city: 'Islamabad',
  },
  // Rawalpindi
  {
    id: 's4',
    name: 'Rawalpindi Cricket Stadium Shelter',
    type: 'shelter',
    lat: 33.5989,
    lng: 73.0624,
    address: 'Stadium Road, Rawalpindi',
    contact: '051-9270614',
    capacity: 4000,
    status: 'open',
    city: 'Rawalpindi',
  },
  {
    id: 's5',
    name: 'Holy Family Hospital',
    type: 'hospital',
    lat: 33.5975,
    lng: 73.0481,
    address: 'Satellite Town, Rawalpindi',
    contact: '051-9290301',
    capacity: 600,
    status: 'open',
    city: 'Rawalpindi',
  },
  // Lahore
  {
    id: 's6',
    name: 'Expo Centre Emergency Shelter',
    type: 'shelter',
    lat: 31.5204,
    lng: 74.3587,
    address: 'Johar Town, Lahore',
    contact: '042-35761999',
    capacity: 5000,
    status: 'open',
    city: 'Lahore',
  },
  {
    id: 's7',
    name: 'Mayo Hospital Lahore',
    type: 'hospital',
    lat: 31.5667,
    lng: 74.3203,
    address: 'Neela Gumbad, Anarkali, Lahore',
    contact: '042-99211137',
    capacity: 1200,
    status: 'open',
    city: 'Lahore',
  },
  {
    id: 's8',
    name: 'Minar-e-Pakistan Ground Relief Camp',
    type: 'relief-camp',
    lat: 31.5925,
    lng: 74.3095,
    address: 'Greater Iqbal Park, Lahore',
    contact: '042-99210000',
    capacity: 3500,
    status: 'open',
    city: 'Lahore',
  },
  // Karachi
  {
    id: 's9',
    name: 'Karachi Expo Centre Shelter',
    type: 'shelter',
    lat: 24.8519,
    lng: 67.0188,
    address: 'University Road, Karachi',
    contact: '021-99261300',
    capacity: 6000,
    status: 'open',
    city: 'Karachi',
  },
  {
    id: 's10',
    name: 'Jinnah Postgraduate Medical Centre',
    type: 'hospital',
    lat: 24.8629,
    lng: 67.0499,
    address: 'Rafiqui Shaheed Road, Karachi',
    contact: '021-99201300',
    capacity: 1500,
    status: 'open',
    city: 'Karachi',
  },
  {
    id: 's11',
    name: 'Peoples Sports Complex Relief Camp',
    type: 'relief-camp',
    lat: 24.8937,
    lng: 67.0824,
    address: 'Peoples Sports Complex, Lyari, Karachi',
    contact: '021-99211500',
    capacity: 2500,
    status: 'open',
    city: 'Karachi',
  },
  {
    id: 's12',
    name: 'University of Karachi Gymnasium Shelter',
    type: 'shelter',
    lat: 24.9420,
    lng: 67.1144,
    address: 'University Road, Karachi',
    contact: '021-99261301',
    capacity: 2000,
    status: 'open',
    city: 'Karachi',
  },
];

export const shelterTypeConfig: Record<Shelter['type'], { label: string; color: string; markerColor: string }> = {
  shelter: { label: 'Shelter', color: 'text-blue-400', markerColor: '#3b82f6' },
  hospital: { label: 'Hospital', color: 'text-red-400', markerColor: '#ef4444' },
  'relief-camp': { label: 'Relief Camp', color: 'text-emerald-400', markerColor: '#10b981' },
};
