// Brand Development
const ipal = DataIpalComp()
const veasa = DataVeasaComp()
const joeys = DataJoeysComp()
const goldenDress = DataGoldenDressComp()
const selina = DataSelinaComp()
const hearsOnFire = DataHearsOnFireComp()

// Animation
const tigo = DataTigoComp()
const forumPeriodistas = DataForumPeriodistasComp()
const fases = DataFasesComp()
const advisors = DataAdvisorsComp()

// UI/UX & Dev
const lynkCo = DataLynkCoComp()
const paar = DataPaarComp()

const projects = [
  {
    name: 'Brand Development',
    projects: [ipal, veasa, goldenDress, selina, joeys, hearsOnFire],
  },
  {
    name: 'Animation',
    projects: [tigo, forumPeriodistas, fases, advisors],
  },
  {
    name: 'UI/UX & Development',
    projects: [lynkCo, paar],
  },
]

export default function projectsComp() {
  return {
    projects,
  }
}
