// Central business + contact information for Shiv Dakhina Ventures

export const site = {
  name: 'Shiv Dakhina Ventures',
  shortName: 'Shiv Dakhina',
  tagline: 'Premium Spiritual Tourism · Odisha',
  phone: '+91 9938136659',
  phoneRaw: '919938136659',
  email: 'info@shivdakhinaventures.com',
  location: 'Rourkela, Odisha',
  category: 'Tour & Travel · Transport Services',
  whatsappMessage:
    'Hello Shiv Dakhina Ventures! I would like to book the Odisha Divine Veg Tour (3D/2N). Please share the details.',
}

export const links = {
  call: `tel:${site.phoneRaw}`,
  whatsapp: `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappMessage)}`,
  mail: `mailto:${site.email}`,
}

export const pkg = {
  title: 'Odisha Divine Veg Tour',
  tagline: 'Every Friday Night Departure',
  duration: '3 Days / 2 Nights',
  price: '₹6,999',
  priceUnit: 'Per Person',
  priceSubtitle: 'Best Value for a Spiritual & Comfortable Weekend Getaway',
  route: ['Rourkela', 'Bhubaneswar', 'Konark', 'Puri', 'Rourkela'],
}

export const highlights = [
  'Mahaprasad at Jagannath Temple Included',
  'Pure Vegetarian Tour',
  'Small Premium Group Experience',
  'Comfortable Family Journey',
  'Every Friday Departure',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Places', href: '#places' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

// Unsplash image helper — keeps URLs tidy and consistently sized
export const ux = (id, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`
