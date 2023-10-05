import ImageSliderBasic from "@/components/ImageSliderBasic";
import { IMAGES } from "@/constants";

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Image sliders
      </h1>
      <div className="flex flex-col gap-2 justify-center items-center w-[70vw]  aspect-[3/2] mx-auto">
        <ImageSliderBasic images={IMAGES} />
      </div>
    </>
  );
};

export default Homepage;
