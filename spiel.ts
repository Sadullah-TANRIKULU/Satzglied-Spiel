interface Satzglied {
  text: string;
  typ:
    | "Subjekt"
    | "Prädikat"
    | "Akkusativobjekt"
    | "Dativobjekt"
    | "Adverbiale";
}

interface Satz {
  teile: Satzglied[];
}

// Beispiel-Sätze
const saetze: Satz[] = [
  {
    teile: [
      { text: "Die Lehrerin", typ: "Subjekt" },
      { text: "erklärt", typ: "Prädikat" },
      { text: "den Schülern", typ: "Dativobjekt" },
      { text: "geduldig", typ: "Adverbiale" },
      { text: "die schwierigen Aufgaben", typ: "Akkusativobjekt" },
      { text: "im Klassenzimmer", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Mein Freund", typ: "Subjekt" },
      { text: "schenkt", typ: "Prädikat" },
      { text: "seiner Schwester", typ: "Dativobjekt" },
      { text: "zum Geburtstag", typ: "Adverbiale" },
      { text: "ein interessantes Buch", typ: "Akkusativobjekt" },
    ],
  },
  {
    teile: [
      { text: "Nach dem langen Arbeitstag", typ: "Adverbiale" },
      { text: "kocht", typ: "Prädikat" },
      { text: "meine Mutter", typ: "Subjekt" },
      { text: "uns", typ: "Dativobjekt" },
      { text: "abends", typ: "Adverbiale" },
      { text: "eine leckere Suppe", typ: "Akkusativobjekt" },
      { text: "in der Küche", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Am frühen Morgen", typ: "Adverbiale" },
      { text: "bringt", typ: "Prädikat" },
      { text: "der Postbote", typ: "Subjekt" },
      { text: "mir", typ: "Dativobjekt" },
      { text: "ein Paket", typ: "Akkusativobjekt" },
      { text: "vor die Haustür", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Nach dem Training", typ: "Adverbiale" },
      { text: "erzählt", typ: "Prädikat" },
      { text: "mein Freund", typ: "Subjekt" },
      { text: "uns", typ: "Dativobjekt" },
      { text: "spannende Geschichten", typ: "Akkusativobjekt" },
      { text: "beim Abendessen", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Im Sommer", typ: "Adverbiale" },
      { text: "organisiert", typ: "Prädikat" },
      { text: "die Stadt", typ: "Subjekt" },
      { text: "den Kindern", typ: "Dativobjekt" },
      { text: "ein großes Fest", typ: "Akkusativobjekt" },
      { text: "im Park", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Während der Pause", typ: "Adverbiale" },
      { text: "liest", typ: "Prädikat" },
      { text: "die Schülerin", typ: "Subjekt" },
      { text: "ihrer Freundin", typ: "Dativobjekt" },
      { text: "ein interessantes Buch", typ: "Akkusativobjekt" },
      { text: "leise", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Am Wochenende", typ: "Adverbiale" },
      { text: "besucht", typ: "Prädikat" },
      { text: "mein Bruder", typ: "Subjekt" },
      { text: "uns", typ: "Dativobjekt" },
      { text: "seine neue Freundin", typ: "Akkusativobjekt" },
      { text: "in Zürich", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Nach dem langen Flug", typ: "Adverbiale" },
      { text: "bringt", typ: "Prädikat" },
      { text: "die Stewardess", typ: "Subjekt" },
      { text: "den Passagieren", typ: "Dativobjekt" },
      { text: "frische Getränke", typ: "Akkusativobjekt" },
      { text: "schnell", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Im Winter", typ: "Adverbiale" },
      { text: "schenkt", typ: "Prädikat" },
      { text: "der Großvater", typ: "Subjekt" },
      { text: "seinen Enkeln", typ: "Dativobjekt" },
      { text: "selbstgestrickte Mützen", typ: "Akkusativobjekt" },
      { text: "mit Liebe", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Nach dem Konzert", typ: "Adverbiale" },
      { text: "überreicht", typ: "Prädikat" },
      { text: "der Veranstalter", typ: "Subjekt" },
      { text: "den Musikern", typ: "Dativobjekt" },
      { text: "Blumensträuße", typ: "Akkusativobjekt" },
      { text: "als Dank", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Am Nachmittag", typ: "Adverbiale" },
      { text: "zeigt", typ: "Prädikat" },
      { text: "die Lehrerin", typ: "Subjekt" },
      { text: "den Kindern", typ: "Dativobjekt" },
      { text: "einen spannenden Film", typ: "Akkusativobjekt" },
      { text: "im Klassenzimmer", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Bei schönem Wetter", typ: "Adverbiale" },
      { text: "serviert", typ: "Prädikat" },
      { text: "der Kellner", typ: "Subjekt" },
      { text: "den Gästen", typ: "Dativobjekt" },
      { text: "das Frühstück", typ: "Akkusativobjekt" },
      { text: "auf der Terrasse", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Am ersten Schultag", typ: "Adverbiale" },
      { text: "schenkt", typ: "Prädikat" },
      { text: "die Mutter", typ: "Subjekt" },
      { text: "ihrem Sohn", typ: "Dativobjekt" },
      { text: "eine Schultüte", typ: "Akkusativobjekt" },
      { text: "voller Süßigkeiten", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Nach dem Umzug", typ: "Adverbiale" },
      { text: "zeigt", typ: "Prädikat" },
      { text: "der Nachbar", typ: "Subjekt" },
      { text: "uns", typ: "Dativobjekt" },
      { text: "die Umgebung", typ: "Akkusativobjekt" },
      { text: "freundlich", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Am Abend", typ: "Adverbiale" },
      { text: "liest", typ: "Prädikat" },
      { text: "mein Vater", typ: "Subjekt" },
      { text: "mir", typ: "Dativobjekt" },
      { text: "eine Geschichte", typ: "Akkusativobjekt" },
      { text: "im Wohnzimmer", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Während der Reise", typ: "Adverbiale" },
      { text: "erzählt", typ: "Prädikat" },
      { text: "die Reiseleiterin", typ: "Subjekt" },
      { text: "den Touristen", typ: "Dativobjekt" },
      { text: "interessante Fakten", typ: "Akkusativobjekt" },
      { text: "über die Stadt", typ: "Adverbiale" },
    ],
  },
  {
    teile: [
      { text: "Nach dem Mittagessen", typ: "Adverbiale" },
      { text: "bringt", typ: "Prädikat" },
      { text: "die Mutter", typ: "Subjekt" },
      { text: "dem Kind", typ: "Dativobjekt" },
      { text: "ein Glas Wasser", typ: "Akkusativobjekt" },
      { text: "an den Tisch", typ: "Adverbiale" },
    ],
  },
];

// Mögliche Fragen
const fragen = [
  { frage: "Welches Wort/Phrase ist das Subjekt?", typ: "Subjekt" },
  { frage: "Welches Wort/Phrase ist das Prädikat?", typ: "Prädikat" },
  {
    frage: "Welches Wort/Phrase ist das Akkusativobjekt?",
    typ: "Akkusativobjekt",
  },
  { frage: "Welches Wort/Phrase ist das Dativobjekt?", typ: "Dativobjekt" },
  {
    frage: "Welches Wort/Phrase ist die Adverbiale Bestimmung?",
    typ: "Adverbiale",
  },
];

let aktuellerSatz = 0;
let aktuelleFrage = 0;

function render() {
  const app = document.getElementById("app")!;
  app.innerHTML = "";

  const satz = saetze[aktuellerSatz];
  const frageObj = fragen[aktuelleFrage];

  // Frage anzeigen
  const frageDiv = document.createElement("div");
  frageDiv.textContent = frageObj.frage;
  frageDiv.style.fontWeight = "bold";

  const iconSpan = document.createElement("span");
  iconSpan.innerHTML =
    '<img src="./assets/satz.png" alt="Icon" style="width: 24px;">';
  iconSpan.style.fontSize = "1.2em";
  iconSpan.style.verticalAlign = "middle";
  frageDiv.appendChild(iconSpan);

  app.appendChild(frageDiv);

  // Satzglieder als Buttons anzeigen
  const satzDiv = document.createElement("div");
  satzDiv.className = "satz";
  satz.teile.forEach((teil, idx) => {
    const btn = document.createElement("button");
    btn.className = "wort-btn";
    btn.textContent = teil.text;
    btn.onclick = () => handleClick(idx);
    satzDiv.appendChild(btn);
  });
  app.appendChild(satzDiv);
}

function handleClick(idx: number) {
  const satz = saetze[aktuellerSatz];
  const frageObj = fragen[aktuelleFrage];
  const app = document.getElementById("app")!;
  const buttons = app.getElementsByTagName("button");
  const clickedTeil = satz.teile[idx];

  // Alle Buttons zurücksetzen
  Array.from(buttons).forEach((btn) =>
    btn.classList.remove("richtig", "falsch")
  );

  if (clickedTeil.typ === frageObj.typ) {
    buttons[idx].classList.add("richtig");
    setTimeout(() => {
      // Zur nächsten Frage oder Satz springen
      if (aktuelleFrage < fragen.length - 1) {
        aktuelleFrage++;
      } else {
        aktuelleFrage = 0;
        aktuellerSatz = (aktuellerSatz + 1) % saetze.length;
      }
      render();
    }, 800);
  } else {
    buttons[idx].classList.add("falsch");
  }
}

// Initiales Rendern
render();
