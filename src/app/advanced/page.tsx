import ImageSliderAdvanced from "@/components/ImageSliderAdvanced";
import { IMAGES } from "@/constants";

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Advanced Image slider
      </h1>
      <div className="flex flex-col gap-2 justify-center items-center w-[70vw]  aspect-[3/2] mx-auto">
        <ImageSliderAdvanced images={IMAGES} />
      </div>
    </>
  );
};

export default Homepage;
