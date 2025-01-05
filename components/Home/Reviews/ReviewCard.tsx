import React from "react";
import Image from "next/image";
type Props = {
  name: string;
  post: string;
  image: string;
  review: string;
};
const ReviewCard: React.FC<Props> = ({ name, post, image, review }: Props) => {
  return (
    <div className="size-full h-[300px] rounded-[30px] border border-black-secondary px-5 py-4 flex flex-col items-start justify-between">
      <p className="text-base text-gray-tertary font-light">{review}</p>
      <div className="w-full flex items-center justify-start gap-3">
        <div className="size-[54px] sm:size-[62px] relative rounded-full">
          <Image
            alt=""
            src={image}
            className="object-cover object-center rounded-full"
            fill
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-black-main text-xl sm:text-2xl font-bold">
            {name}
          </p>
          <p className="text-gray-tertary text-base font-normal">{post}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
