import Pagination from "@/components/PaginationComponents";
import FavouriteDoctorCard from "./favouriteCard";

export default function ActiveDoctors() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <FavouriteDoctorCard />
        <FavouriteDoctorCard />
        <FavouriteDoctorCard />
        <FavouriteDoctorCard />
        <FavouriteDoctorCard />
      </div>
      <Pagination currentPage={1} totalPages={10} queryKey="appointmentsPage" />
    </>
  );
}
