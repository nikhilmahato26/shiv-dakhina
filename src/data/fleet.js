import { ux } from './site'

export const fleet = [
  {
    id: 'scorpio',
    name: 'Black Scorpio',
    category: 'Premium SUV',
    tone: 'Black',
    description: 'Perfect for group travel.',
    image: ux('1606664515524-ed2f786a0bd6', 1400),
    specs: [
      { label: 'Seating', value: '7 Seater' },
      { label: 'Luggage', value: 'Spacious' },
      { label: 'AC', value: 'Climate Control' },
      { label: 'Best For', value: 'Group Travel' },
    ],
  },
  {
    id: 'bolero',
    name: 'White Bolero Neo',
    category: 'Comfort SUV',
    tone: 'White',
    description: 'Comfortable and reliable. Ideal for family tours.',
    image: ux('1503376780353-7e6692767b70', 1400),
    specs: [
      { label: 'Seating', value: '7 Seater' },
      { label: 'Ride', value: 'Smooth & Stable' },
      { label: 'AC', value: 'Full Cabin' },
      { label: 'Best For', value: 'Family Tours' },
    ],
  },
  {
    id: 'xuv700',
    name: 'Midnight Blue XUV700',
    category: 'Luxury Premium SUV',
    tone: 'Midnight Blue',
    description: 'Luxury premium SUV. Best for executive and luxury travel.',
    image: ux('1552519507-da3b142c6e3d', 1400),
    specs: [
      { label: 'Seating', value: '7 Seater' },
      { label: 'Comfort', value: 'Captain Seats' },
      { label: 'AC', value: 'Dual Zone' },
      { label: 'Best For', value: 'Executive Luxury' },
    ],
  },
]
