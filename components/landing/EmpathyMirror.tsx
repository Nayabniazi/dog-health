import { AlertCircle, Activity, Frown } from "lucide-react";

export function EmpathyMirror() {
  const symptoms = [
    {
      icon: AlertCircle,
      text: "Do they struggle to get up in the morning?",
    },
    {
      icon: Activity,
      text: "Are they hesitant to climb stairs or jump onto the sofa?",
    },
    {
      icon: Frown,
      text: "Have they lost their enthusiasm for daily walks?",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Watching Them Suffer is the <br />
            Hardest Part for Any Owner.
          </h2>

          <div className="space-y-6">
            {symptoms.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg bg-white p-6 border border-gray-200 transition-colors hover:bg-gray-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-lg font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-500">
            This isn't just "old age". It's a medical condition requiring a specialist.
          </p>
        </div>
      </div>
    </section>
  );
}
