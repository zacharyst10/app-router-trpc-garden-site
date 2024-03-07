import { PlantCarousel } from "~/components/plant-carousel";

export default function Plants() {
  return (
    <div className="container">
      <h1>Plants</h1>
      <p>Learn about the different types of plants or something!</p>
      <div className="container">
        <h1 className="py-5 text-6xl">Fruits</h1>
        <PlantCarousel />
      </div>
      <div className="container">
        <h1 className="py-5 text-6xl">Veggies</h1>
        <PlantCarousel />
      </div>
      <div className="container">
        <h1 className="py-5 text-6xl">Herbs</h1>
        <PlantCarousel />
      </div>
      <div className="container">
        <h1 className="py-5 text-6xl">Flowers</h1>
        <PlantCarousel />
      </div>
    </div>
  );
}
