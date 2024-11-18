import ReviewPage from "./review-page";

export default function ReviewsPageView() {
  return (
    <div className="space-y-6 mb-8 bg-card p-6 rounded-md">
      <h1 className="text-xl font-semibold">Reviews</h1>
      <hr />
      <ReviewPage />
    </div>
  );
}
