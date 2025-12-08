import ieeeLogo from '@/assets/clubs/ieee.png';
import securinetsLogo from '@/assets/clubs/sec.png';
import melodiesLogo from '@/assets/clubs/melo.png';
import enactusLogo from '@/assets/clubs/enactus.png';
import jciLogo from '@/assets/clubs/jci.png';
import libertadLogo from '@/assets/clubs/libertad.png';
import lionsLogo from '@/assets/clubs/lions.png';

export const clubLogos: Record<string, string> = {
  '1': ieeeLogo,
  '2': securinetsLogo,
  '3': melodiesLogo,
  '4': enactusLogo,
  '5': jciLogo,
  '6': libertadLogo,
  '7': lionsLogo,
};

export const getClubLogo = (clubId: string): string => {
  return clubLogos[clubId] || '';
};
