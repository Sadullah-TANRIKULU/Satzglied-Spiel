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
    { text: "Während viele Eltern versuchen, die Bildschirmzeit zu begrenzen", typ: "Adverbiale" },
    { text: "entwickelt", typ: "Prädikat" },
    { text: "sich", typ: "Subjekt" },
    { text: "bei Jugendlichen", typ: "Dativobjekt" },
    { text: "häufig", typ: "Adverbiale" },
    { text: "eine Abhängigkeit", typ: "Akkusativobjekt" },
    { text: "die schwer zu erkennen ist", typ: "Adverbiale" },
  ],
},
{
  teile: [
    { text: "Aufgrund der steigenden Nutzung digitaler Geräte", typ: "Adverbiale" },
    { text: "wird", typ: "Prädikat" },
    { text: "das Problem der Onlinesucht", typ: "Subjekt" },
    { text: "den Fachkräften", typ: "Dativobjekt" },
    { text: "immer bewusster", typ: "Akkusativobjekt" },
    { text: "in der Gesellschaft", typ: "Adverbiale" },
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
    { text: "Obwohl viele Jugendliche sich der Risiken bewusst sind", typ: "Adverbiale" },
    { text: "verbringen", typ: "Prädikat" },
    { text: "sie", typ: "Subjekt" },
    { text: "ihren Freunden", typ: "Dativobjekt" },
    { text: "immer weniger Zeit", typ: "Akkusativobjekt" },
    { text: "im echten Leben", typ: "Adverbiale" },
  ],
},
{
  teile: [
    { text: "Durch das ständige Nutzen sozialer Medien", typ: "Adverbiale" },
    { text: "wird", typ: "Prädikat" },
    { text: "das Verhalten", typ: "Subjekt" },
    { text: "vielen Jugendlichen", typ: "Dativobjekt" },
    { text: "immer unkontrollierter", typ: "Akkusativobjekt" },
    { text: "im Alltag", typ: "Adverbiale" },
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
      { text: "mit Kollegen", typ: "Dativobjekt" },
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
    { text: "Nachdem sie alle erforderlichen Unterlagen eingereicht hatte", typ: "Adverbiale" },
    { text: "bewilligte", typ: "Prädikat" },
    { text: "die Behörde", typ: "Subjekt" },
    { text: "der Antragstellerin", typ: "Dativobjekt" },
    { text: "die finanzielle Unterstützung", typ: "Akkusativobjekt" },
    { text: "innerhalb weniger Tage", typ: "Adverbiale" },
  ],
},
{
  teile: [
    { text: "Von zahlreichen Experten geprüft", typ: "Adverbiale" },
    { text: "wurde", typ: "Prädikat" },
    { text: "das neue Konzept", typ: "Subjekt" },
    { text: "den Mitarbeitern", typ: "Dativobjekt" },
    { text: "detailliert", typ: "Adverbiale" },
    { text: "am letzten Freitag", typ: "Adverbiale" },
    { text: "vorgestellt", typ: "Prädikat" },
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
    { text: "Während des Meetings", typ: "Adverbiale" },
    { text: "präsentiert", typ: "Prädikat" },
    { text: "der Projektleiter", typ: "Subjekt" },
    { text: "den Kollegen", typ: "Dativobjekt" },
    { text: "die neuen Konzepte", typ: "Akkusativobjekt" },
    { text: "mit großer Überzeugung", typ: "Adverbiale" },
  ],
},
{
  teile: [
    { text: "Am Wochenende", typ: "Adverbiale" },
    { text: "organisiert", typ: "Prädikat" },
    { text: "die Gemeinde", typ: "Subjekt" },
    { text: "den Bewohnern", typ: "Dativobjekt" },
    { text: "ein Straßenfest", typ: "Akkusativobjekt" },
    { text: "auf dem Marktplatz", typ: "Adverbiale" },
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
    { text: "Nach dem erfolgreichen Projektabschluss", typ: "Adverbiale" },
    { text: "überreicht", typ: "Prädikat" },
    { text: "der Abteilungsleiter", typ: "Subjekt" },
    { text: "den Mitarbeitenden", typ: "Dativobjekt" },
    { text: "eine besondere Auszeichnung", typ: "Akkusativobjekt" },
    { text: "im großen Konferenzraum", typ: "Adverbiale" },
  ],
},
{
  teile: [
    { text: "Am Ende des Semesters", typ: "Adverbiale" },
    { text: "stellt", typ: "Prädikat" },
    { text: "die Professorin", typ: "Subjekt" },
    { text: "den Studierenden", typ: "Dativobjekt" },
    { text: "die Prüfungsergebnisse", typ: "Akkusativobjekt" },
    { text: "online", typ: "Adverbiale" },
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
      { text: "Während der Reise", typ: "Adverbiale" },
      { text: "schreibt", typ: "Prädikat" },
      { text: "Er", typ: "Subjekt" },
      { text: "mir", typ: "Dativobjekt" },
      { text: "einen Brief", typ: "Akkusativobjekt" },
      { text: "schnell", typ: "Adverbiale" },
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

function getRandomIndex(length: number, exclude?: number) {
  let idx: number;
  do {
    idx = Math.floor(Math.random() * length);
  } while (exclude !== undefined && length > 1 && idx === exclude);
  return idx;
}

// Fisher-Yates Shuffle für Arrays
function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let aktuellerSatz = getRandomIndex(saetze.length);
let aktuelleFrage = getRandomIndex(fragen.length);
let gemischteTeile: Satzglied[] = [];

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
      // Zufällige nächste Frage
      let neueFrage = getRandomIndex(fragen.length, aktuelleFrage);
      aktuelleFrage = neueFrage;

      // Falls alle Fragen einmal durch sind, nächster zufälliger Satz
      if (aktuelleFrage === 0) {
        aktuellerSatz = getRandomIndex(saetze.length, aktuellerSatz);
      }
      render();
    }, 800);
  } else {
    buttons[idx].classList.add("falsch");
  }
}

// Initiales Rendern
render();
