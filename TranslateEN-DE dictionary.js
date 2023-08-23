
//Dictionary from shall into an object in named language convert.

const LANGUAGE_DE = [
  "hallo",
  "heute",
  "sprachkurs",
  "willkommen",
  "mikrofon",
  "und"
]

const LANGUAGE_EN = [
  "hello",
  "today",
  "language course",
  "welcome",
  "microphone",
  "and"
]

let DE_TO_EN = {}

for (const i in LANGUAGE_DE) {
  const wordDe = LANGUAGE_DE[i]
  const wordEn = LANGUAGE_EN[i]

  DE_TO_EN[wordDe] = wordEn
}

console.log("DE_TO_EN:", DE_TO_EN)
console.log("@Codewitchy")
