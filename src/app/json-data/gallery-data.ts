export interface GalleryItem {
  id: number;
  title: string;
  category: 'Installations' | 'Components' | 'Facility';
  categoryLabel: string;
  image: string;
  specs: string;
  description: string;
  highlight?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'PVC End Cap 63 mm',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/gallery/pvc-end-cap-63mm.jpg',
    specs: '63mm Standard Bore / High-Grade Virgin PVC',
    description: 'Precision-molded 63 mm PVC end cap designed for seamless sealing of distribution pipes and fill media headers.',
    highlight: 'Direct OEM Supply'
  },
  {
    id: 2,
    title: 'Tie Rod Adjuster',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/gallery/tie-rod-adjuster.jpg',
    specs: 'Galvanized / SS Grade / Precision Threaded',
    description: 'High-tensile tie rod adjuster ensuring exact structural tensioning and rigidity for heavy industrial cooling towers.',
    highlight: 'Corrosion Proof'
  },
  {
    id: 3,
    title: 'Aluminium Alloy Sprinkler',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/gallery/aluminium-sprinkler.jpg',
    specs: 'Aluminium Alloy / Self-Rotating / Low Pressure',
    description: 'Dynamic rotary sprinkler head delivering uniform 360-degree water distribution across the fill pack for maximum thermal transfer.',
    highlight: 'High Efficiency'
  },
  {
    id: 4,
    title: 'Heavy Duty Fan Hub',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/gallery/fan-hub-assembly.jpg',
    specs: 'Dynamic Balanced Cast Alloy / Multi-Blade Hub',
    description: 'Dynamically balanced cooling tower fan hub engineered to handle immense torque with minimal/less mechanical vibration.',
    highlight: 'Minimal Vibration'
  },
  {
    id: 5,
    title: 'Industrial Fan Blade',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/gallery/industrial-fan-blade.jpg',
    specs: 'Aerofoil FRP / Aluminium / Adjustable Pitch',
    description: 'High-efficiency aerodynamic fan blade engineered for large industrial cooling towers with optimal CFM output.',
    highlight: 'Energy Efficient'
  },
  {
    id: 6,
    title: 'High-Efficiency PVC Honeycomb Fills',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/products/pvc-fills.jpg',
    specs: 'Cross-Flute Honeycomb / Virgin PVC / UV Stabilized',
    description: 'Engineered corrugated PVC fill media blocks designed to maximize water surface exposure and accelerate evaporative cooling.',
    highlight: 'High Surface Area'
  },
  {
    id: 7,
    title: 'Target Nozzle PVC Splash Cap',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/products/pvc-splash-cap.jpg',
    specs: 'Molded PVC / Multi-Tier Diffuser Discs',
    description: 'Targeted cooling tower spray nozzle splash cap with engineered deflector rings for uniform micro-droplet water breakup.',
    highlight: 'Optimized Spray'
  },
  {
    id: 8,
    title: 'Cellular PVC Drift Eliminator',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/products/pvc-drift-eliminator.jpg',
    specs: 'Sinusoidal Cellular Modules / <0.005% Drift Loss',
    description: 'Aerodynamic wave-profile drift eliminators that capture entrained droplets and drastically reduce water makeup loss.',
    highlight: 'Low Pressure Drop'
  },
  {
    id: 9,
    title: 'Distribution Branch Pipe Manifold',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/products/distribution-branch-pipe.jpg',
    specs: 'Heavy Gauge Schedule 80 PVC / Threaded Nozzle Ports',
    description: 'Custom-drilled distribution branch pipes delivering balanced hydraulic water flow to spray nozzles without pressure loss.',
    highlight: 'Balanced Flow'
  },
  {
    id: 10,
    title: 'Industrial Long Shaft Motor',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/products/long-shaft-motor.jpg',
    specs: 'IP66 Weatherproof / Extended SS Shaft / Cast Iron',
    description: 'High-efficiency flange-mounted industrial motor with extended stainless steel shaft designed for harsh moist environments.',
    highlight: 'Heavy Duty IP66'
  },
  {
    id: 11,
    title: 'FRP Aerodynamic Fan Canopy Stack',
    category: 'Components',
    categoryLabel: 'Spares & Components',
    image: 'assets/products/frp-fan-canopy.jpg',
    specs: 'Molded FRP Composite / Venturi Recovery Profile',
    description: 'Venturi recovery fan stack that lowers discharge turbulence and acoustic noise while reducing fan motor power draw.',
    highlight: 'Venturi Energy Save'
  },
  {
    id: 12,
    title: 'PPCT Manufacturing Plant',
    category: 'Facility',
    categoryLabel: 'Manufacturing Facility',
    image: 'assets/gallery/factory-plant.jpg',
    specs: 'Delhi NCR Facility / Full In-House Fabrication',
    description: 'Our specialized Delhi NCR plant equipped with fabrication, testing, and direct manufacturing capabilities.',
    highlight: 'In-House Facility'
  },
  {
    id: 13,
    title: 'Chiller & DG Cooling Tower System',
    category: 'Installations',
    categoryLabel: 'Cooling Towers & Systems',
    image: 'assets/gallery/chiller-dg-installation-1.jpg',
    specs: 'Commercial & Industrial Duty / Complete Piping',
    description: 'Turnkey industrial cooling tower installation designed specifically for chiller plant & DG cooling duty.',
    highlight: 'Turnkey Project'
  },
  {
    id: 14,
    title: 'Multi-Cell Rooftop Installation',
    category: 'Installations',
    categoryLabel: 'Cooling Towers & Systems',
    image: 'assets/gallery/chiller-dg-rooftop-2.jpg',
    specs: 'Rooftop Mount / Multi-Cell Counterflow',
    description: 'High-capacity cooling towers installed on commercial/industrial rooftops across Delhi NCR with zero downtime.',
    highlight: 'Proven Performance'
  },
  {
    id: 15,
    title: 'Diesel Generator (DG) Cooling Tower',
    category: 'Installations',
    categoryLabel: 'Cooling Towers & Systems',
    image: 'assets/gallery/dg-cooling-system.jpg',
    specs: 'High Temperature Tolerance / Rapid Dissipation',
    description: 'Heavy duty cooling tower engineered for high-heat continuous diesel generator sets in industrial complexes.',
    highlight: 'Heavy Duty'
  }
];
