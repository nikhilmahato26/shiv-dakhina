import {
  ShieldCheck,
  BadgeCheck,
  Car,
  Sparkles,
  UserCheck,
  Leaf,
  Mountain,
  Users,
} from 'lucide-react'
import { ux } from './site'

export const includes = [
  'Travel by Scorpio (Black)',
  'Travel by Bolero Neo (White)',
  'Travel by XUV700 (Midnight Blue)',
  'Professional Drivers',
  'Hotel Accommodation (1 Night)',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Pure Vegetarian Meals',
  'Mahaprasad Lunch at Jagannath Temple',
  'Sightseeing as per itinerary',
  'Toll Charges',
  'Parking Charges',
  'Driver Allowance',
  'Drinking Water Throughout Trip',
  'First Aid Support',
]

export const whyChooseUs = [
  { icon: ShieldCheck, title: 'Safe Journey', text: 'Verified vehicles & disciplined driving.' },
  { icon: BadgeCheck, title: 'Reliable Service', text: 'On-time, every Friday, without fail.' },
  { icon: Car, title: 'Comfortable Vehicles', text: 'Premium, well-maintained SUVs.' },
  { icon: Sparkles, title: 'Memorable Experience', text: 'Curated for moments you keep.' },
  { icon: UserCheck, title: 'Professional Drivers', text: 'Courteous, experienced & local.' },
  { icon: Leaf, title: 'Pure Vegetarian Food', text: 'Sattvic meals throughout the tour.' },
  { icon: Mountain, title: 'Spiritual Tourism Experts', text: 'Odisha pilgrimage specialists.' },
  { icon: Users, title: 'Small Group Experience', text: 'Intimate, premium & personal.' },
]

export const stats = [
  { value: 6999, prefix: '₹', label: 'Per Person' },
  { value: 3, suffix: 'D / 2N', label: 'Divine Days' },
  { value: 5, suffix: '+', label: 'Sacred Sites' },
  { value: 100, suffix: '%', label: 'Pure Veg' },
]

export const food = {
  items: ['Healthy', 'Hygienic', 'Tasty'],
  images: [
    ux('1567337710282-00832b415979', 900),
    ux('1631452180519-c014fe946bc7', 900),
    ux('1601050690597-df0568f70950', 900),
    ux('1606491956689-2ea866880c84', 900),
  ],
}

export const gallery = [
  { src: ux('1582510003544-4d00b7f74220', 1000), label: 'Jagannath Temple' },
  { src: ux('1605649487212-47bdab064df7', 1000), label: 'Konark Temple' },
  { src: ux('1604608672516-f1b9b1d37076', 1000), label: 'Lingaraj Temple' },
  { src: ux('1567427017947-545c5f8d16ad', 1000), label: 'Dhauli Shanti Stupa' },
  { src: ux('1507525428034-b723cf961d3e', 1000), label: 'Puri Beach' },
  { src: ux('1606664515524-ed2f786a0bd6', 1000), label: 'Luxury SUV' },
  { src: ux('1567337710282-00832b415979', 1000), label: 'Vegetarian Meals' },
  { src: ux('1530789253388-582c481c54b0', 1000), label: 'Group Travel' },
  { src: ux('1599661046289-e31897846e41', 1000), label: 'Odisha Heritage' },
]

export const testimonials = [
  {
    name: 'Sourav Mohanty',
    place: 'Rourkela',
    text: 'The Mahaprasad darshan at Jagannath Temple was deeply moving. The XUV700 was spotless and the driver so caring. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Priya Agarwal',
    place: 'Sundargarh',
    text: 'Travelled with my parents. Pure veg food throughout, comfortable Bolero Neo and a perfectly planned weekend. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Rakesh & Family',
    place: 'Rourkela',
    text: 'Friday night departure made it so easy with our jobs. Konark, Puri Beach and the temples — a divine experience for the whole family.',
    rating: 5,
  },
  {
    name: 'Anita Sahoo',
    place: 'Bisra',
    text: 'Small group, premium feel. The Black Scorpio was super comfortable for our group of friends. Will book again next season.',
    rating: 5,
  },
]
