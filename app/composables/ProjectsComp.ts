import type { ServiceData } from '~/types/ServiceData'

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
const veasaweb = DataVeasawebComp()
const onespot = DataOneSpotComp()

export default function projectsComp() {
  return [
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
      projects: [onespot, lynkCo, paar, veasaweb],
    },
  ] as ServiceData[]
}
