export interface Contact {
  id: string;
  name: string;
  number: string;
  description: string;
  category: 'national' | 'provincial' | 'medical' | 'fire' | 'police' | 'rescue';
  available: string;
}

export const contacts: Contact[] = [
  {
    id: 'c1',
    name: 'Rescue 1122',
    number: '1122',
    description: 'Emergency rescue service for accidents, medical emergencies, and disaster response. Available in Punjab and KPK.',
    category: 'rescue',
    available: '24/7',
  },
  {
    id: 'c2',
    name: 'NDMA Emergency',
    number: '051-9205037',
    description: 'National Disaster Management Authority — coordination for all national-level disaster response and relief operations.',
    category: 'national',
    available: '24/7',
  },
  {
    id: 'c3',
    name: 'Edhi Foundation',
    number: '115',
    description: 'Ambulance service, disaster relief, and humanitarian aid across Pakistan. Largest ambulance network in the country.',
    category: 'medical',
    available: '24/7',
  },
  {
    id: 'c4',
    name: 'Pakistan Police',
    number: '15',
    description: 'Emergency police assistance for law and order, crime reporting, and public safety during disasters.',
    category: 'police',
    available: '24/7',
  },
  {
    id: 'c5',
    name: 'Fire Brigade',
    number: '16',
    description: 'Fire emergency service for fire incidents, building collapses, and rescue operations.',
    category: 'fire',
    available: '24/7',
  },
  {
    id: 'c6',
    name: 'PDMA Punjab',
    number: '042-99203870',
    description: 'Provincial Disaster Management Authority Punjab — manages disaster preparedness and response in Punjab province.',
    category: 'provincial',
    available: 'Office Hours + Emergency',
  },
  {
    id: 'c7',
    name: 'PDMA Sindh',
    number: '021-99251483',
    description: 'Provincial Disaster Management Authority Sindh — coordinates disaster management and relief in Sindh province.',
    category: 'provincial',
    available: 'Office Hours + Emergency',
  },
  {
    id: 'c8',
    name: 'PDMA KPK',
    number: '091-9211430',
    description: 'Provincial Disaster Management Authority KPK — handles disaster response and preparedness in Khyber Pakhtunkhwa.',
    category: 'provincial',
    available: 'Office Hours + Emergency',
  },
  {
    id: 'c9',
    name: 'Chippa Foundation',
    number: '1021',
    description: 'Ambulance and welfare services operating primarily in Sindh and Balochistan. Free ambulance and funeral services.',
    category: 'medical',
    available: '24/7',
  },
  {
    id: 'c10',
    name: 'Motorway Police Helpline',
    number: '130',
    description: 'National Highway and Motorway Police for road emergencies, accidents, and travel advisories on motorways.',
    category: 'police',
    available: '24/7',
  },
];

export const contactCategoryConfig: Record<Contact['category'], { label: string; color: string; icon: string }> = {
  national: { label: 'National', color: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400', icon: '🏛️' },
  provincial: { label: 'Provincial', color: 'bg-blue-500/15 border-blue-500/30 text-blue-400', icon: '🏢' },
  medical: { label: 'Medical', color: 'bg-red-500/15 border-red-500/30 text-red-400', icon: '🏥' },
  fire: { label: 'Fire', color: 'bg-orange-500/15 border-orange-500/30 text-orange-400', icon: '🔥' },
  police: { label: 'Police', color: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400', icon: '🚔' },
  rescue: { label: 'Rescue', color: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400', icon: '🚑' },
};
