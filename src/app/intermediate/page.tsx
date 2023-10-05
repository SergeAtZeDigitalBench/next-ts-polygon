import ImageSliderIntermediate from "@/components/ImageSliderIntermediate";
import { IMAGES } from "@/constants";

const Homepage = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Intermediate Image slider
      </h1>
      <div className="flex flex-col gap-2 justify-center items-center w-[70vw]  aspect-[3/2] mx-auto">
        <ImageSliderIntermediate images={IMAGES} />
      </div>
    </>
  );
};

export default Homepage;
