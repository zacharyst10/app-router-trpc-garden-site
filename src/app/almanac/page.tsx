import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const plants = [
  {
    plantName: "Rose",
    scientificName: "Rosa spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Late spring to fall",
  },
  {
    plantName: "Lavender",
    scientificName: "Lavandula spp.",
    preferredClimate: "Mediterranean",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Sunflower",
    scientificName: "Helianthus annuus",
    preferredClimate: "Warm",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Tulip",
    scientificName: "Tulipa spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
  {
    plantName: "Orchid",
    scientificName: "Orchidaceae",
    preferredClimate: "Tropical",
    bloomingSeason: "Varies",
  },
  {
    plantName: "Daffodil",
    scientificName: "Narcissus spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
  {
    plantName: "Azalea",
    scientificName: "Rhododendron spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
  {
    plantName: "Daisy",
    scientificName: "Bellis perennis",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring to fall",
  },
  {
    plantName: "Lily",
    scientificName: "Lilium spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Iris",
    scientificName: "Iris spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring to summer",
  },
  {
    plantName: "Hydrangea",
    scientificName: "Hydrangea spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Peony",
    scientificName: "Paeonia spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring to summer",
  },
  {
    plantName: "Chrysanthemum",
    scientificName: "Chrysanthemum spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Fall",
  },
  {
    plantName: "Lilac",
    scientificName: "Syringa vulgaris",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring",
  },
  {
    plantName: "Dahlia",
    scientificName: "Dahlia spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Summer to fall",
  },
  {
    plantName: "Carnation",
    scientificName: "Dianthus caryophyllus",
    preferredClimate: "Temperate",
    bloomingSeason: "Spring to fall",
  },
  {
    plantName: "Gladiolus",
    scientificName: "Gladiolus spp.",
    preferredClimate: "Temperate",
    bloomingSeason: "Summer",
  },
  {
    plantName: "Amaryllis",
    scientificName: "Hippeastrum spp.",
    preferredClimate: "Tropical",
    bloomingSeason: "Winter to spring",
  },
  {
    plantName: "Anthurium",
    scientificName: "Anthurium spp.",
    preferredClimate: "Tropical",
    bloomingSeason: "Varies",
  },
];

export default function Almanac() {
  return (
    <Table className="container mt-10">
      <TableCaption>A list of your terms in your Almanac.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Plant Name</TableHead>
          <TableHead>Scientific Name </TableHead>
          <TableHead>Preferred Climate</TableHead>
          <TableHead className="text-right">Blooming Season</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {plants.map((plant) => (
          <TableRow key={plant.plantName}>
            <TableCell className="font-medium">{plant.plantName}</TableCell>
            <TableCell>{plant.scientificName}</TableCell>
            <TableCell>{plant.preferredClimate}</TableCell>
            <TableCell className="text-right">{plant.bloomingSeason}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">7</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
