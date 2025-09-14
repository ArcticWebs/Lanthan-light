import precmos from "assets/precmos.jpg";
import fuzzion from "assets/fuzzion.jpg";
import tremolo from "assets/tremolo.jpg";
import wah from "assets/wah.jpg";

export const products = [
  {
    name: "FUZZION",
    description:
      "Modern Fuzz. Dynamiczny, selektywny i zawsze z przodu. Od lekkiego drive'u do pełnego fuzz'owego gainu z dużym sustain'em.",
    imgUrl: fuzzion,
    isAvailable: true,
  },
  {
    name: "PRECMOS",
    description:
      "Bass/Guitar Preamp/Drive. Wszechstronne urządzenie z unikalnym charakterem brzmienia. 3 pukktowe EQ o zakresie ±30 dB oraz wyjątkowa dynamika to główne atuty tego urządzenia.",
    imgUrl: precmos,
    isAvailable: true,
  },

  {
    name: "TREMOLO",
    description:
      "W pełni analogowe optyczne tremolo z boost'em. Wyjątkowo organiczne i dynamiczne, spory wachlarz regulacji pulsowania dźwięku.",
    imgUrl: tremolo,
    isAvailable: true,
  },

  {
    name: "WAH",
    description:
      "Klasyczny Wah dający możliwość dostosowania do własnych preferencji przy pomocy 3 mini potencjometrów, 6 pozycyjnego przełącznika zakresu oraz innowacyjnej przełączanej cewce",
    imgUrl: wah,
    isAvailable: true,
  },
];
