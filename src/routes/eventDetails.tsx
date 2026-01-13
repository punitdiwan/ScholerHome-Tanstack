import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/eventDetails")({
  component: EventDetail,
});

function EventDetail() {
  

  return (
    <div className="px-10 py-8">
      <h1 className="text-3xl font-bold">{}</h1>
      {/* show full data here */}
    </div>
  );
}
