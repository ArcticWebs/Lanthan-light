import guitarFix from "assets/fixing.jpg";
import service2 from "assets/earphones.jpg";
import service3 from "assets/multimetr.jpg";

export const services = [
  {
    name: "SPRZĘT ESTRADOWY",
    description:
      "Naprawiamy sprzęt używany na estradach i w studiach nagrań m.in. pianina cyfrowe, syntezatory, mikrofony, preampy, miksery audio, kolumny aktywne, interfejsy.  Wykonujemy kable na zamówienie.",
    imgUrl: service2,
  },
  {
    name: "GITARY ELEKTRYCZNE",
    description:
      "Dbamy o gitary elektryczne, elektro-akustyczne, wzmacniacze gitarowe i basowe oraz efekty. Zajmujemy się również budową pedal boardów i innych urządzeń na życzenie Klienta.",
    imgUrl: guitarFix,
  },

  {
    name: "PŁYTY STERUJĄCE",
    description:
      "Diagnozujemy usterki i naprawiamy moduły sterujące do różnego rodzaju urządzeń przemysłowych takich jak podnośniki, maszyny produkcyjne. Produkujemy podzespoły i komponenty elektroniczne do urządzeń - od projektu do gotowego modułu w zależości od potrzeb Klienta.",
    imgUrl: service3,
  },
];
