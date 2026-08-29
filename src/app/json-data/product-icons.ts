import { IconName } from '../icon/icon.component';

// Maps each product id to a representative icon. We use clean icon tiles
// instead of the old mismatched stock photos. Swap in real product
// photography per item whenever it's available.
export const PRODUCT_ICONS: Record<number, IconName> = {
  1: 'fan', // Aluminium Alloys Fan Set
  2: 'disc', // Aluminium Alloys Sprinkler
  3: 'layers', // PVC Fills
  4: 'disc', // PVC Splash Cap
  5: 'valve', // PVC End Cap
  6: 'shield-check', // PVC Eliminator
  7: 'rod', // Tie Rod
  8: 'wrench', // Tie Rod Adjuster
  9: 'clamp', // GI Clamp
  10: 'pipe', // Branch Pipe
  11: 'valve', // FRP Flapper
  12: 'fan', // FRP Fan Set
  13: 'gear', // Long Shaft Motor
  14: 'roof', // FRP Fan Canopy
  15: 'building', // Chiller & DG Cooling Tower Systems
};

export function productIcon(id: number): IconName {
  return PRODUCT_ICONS[id] ?? 'package';
}
