export default function Alerts() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">🚨 Disaster Alerts</h1>
      <p className="text-gray-700 mb-6">
        Real-time alerts and updates about ongoing or potential disasters.
      </p>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-600">No current alerts. Stay safe!</p>
      </div>
    </section>
  );
}
