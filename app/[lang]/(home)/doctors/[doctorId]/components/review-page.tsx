import ImageComponent from "@/components/ImageComponent";
import Pagination from "@/components/PaginationComponents";
import { Rating } from "@/components/ui/rating";
import { avatar } from "@/config/user.config";

export default function ReviewPage() {
  return (
    <div className="space-y-4" id="review">
      <h1 className="text-lg">Reviews (20)</h1>
      {[1, 2, 4, 5, 6].map((i) => (
        <div className=" border bg-card rounded-md " key={i}>
          <div className=" p-4  flex justify-between items-center border-b">
            <div className="flex gap-4 items-start ">
              <div className="w-14 h-14  ">
                <ImageComponent
                  src={avatar}
                  alt="Description of image"
                  className="rounded-lg overflow-hidden"
                />
                {/* <ImageComponent src={avatar} alt="logo" /> */}
              </div>
              <div>
                <h3 className="text-lg font-bold text-default-600">John Doe</h3>
                <p className="text-sm text-default-600">2023-04-15</p>
              </div>
            </div>
            <Rating value={2} readOnly className="gap-x-1.5 max-w-[125px]" />
          </div>

          <p className="p-4">
            Dr. Edalin Hendry has been my family's trusted doctor for years.
            Their genuine care and thorough approach to our health concerns make
            every visit reassuring. Dr. Edalin Hendry's ability to listen and
            explain complex health issues in understandable terms is
            exceptional. We are grateful to have such a dedicated physician by
            our side
          </p>
        </div>
      ))}
      <Pagination currentPage={1} totalPages={10} />
    </div>
  );
}