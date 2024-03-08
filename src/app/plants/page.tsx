import { PlantCarousel } from "~/components/plant-carousel";
import { CrudShowcase } from "../page";

export default function Plants() {
  return (
    <div className="container">
      <h1>Plants</h1>
      <p>Learn about the different types of plants or something!</p>
      <div className="container">
        <h1 className="py-5 text-6xl">Plants</h1>
        <PlantCarousel />
      </div>
      <div className="flex justify-center py-5">
        <CrudShowcase />
      </div>
    </div>
  );
}
