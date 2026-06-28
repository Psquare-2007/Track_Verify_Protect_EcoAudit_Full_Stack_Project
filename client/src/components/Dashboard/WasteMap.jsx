import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

/* Fix default marker icons */

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function WasteMap({ records = [] }) {

  const defaultCenter = [13.0827, 80.2707];

  return (

    <div className="glass-card rounded-3xl shadow-lg p-8 h-230">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div className = "text-center translate-x-150">

          <h2 className="text-3xl font-bold text-slate-800">

            Waste Location Map

          </h2>

          <p className="text-slate-500 mt-2">

            Interactive GPS locations of submitted reports

          </p>

        </div>

        <div className="-translate-x-10 bg-green-100 text-green-700 px-5 py-2 rounded-xl font-semibold">

          {records.length} Locations

        </div>

      </div>

      {/* Map */}

      <div className="rounded-3xl overflow-hidden border border-slate-200">

        <MapContainer
          center={defaultCenter}
          zoom={11}
          scrollWheelZoom={true}
          style={{
            height: "500px",
            width: "100%",
          }}
        >

          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {records.map((item) => {

            if (!item.latitude || !item.longitude)
              return null;

            return (

              <Marker
                key={item._id}
                position={[
                  Number(item.latitude),
                  Number(item.longitude),
                ]}
              >

                <Popup>

                  <div className="min-w-[220px]">

                    {item.image && (

                      <img
                        src={`http://localhost:5000/uploads/${item.image}`}
                        alt=""
                        className="rounded-xl mb-3 w-full h-32 object-cover"
                      />

                    )}

                    <h3 className="text-lg font-bold">

                      {item.wasteType}

                    </h3>

                    <p className="mt-2">

                      <strong>Weight:</strong>{" "}
                      {item.weight} kg

                    </p>

                    <p>

                      <strong>Status:</strong>{" "}
                      {item.status}

                    </p>

                    <p className="mt-2 text-slate-600">

                      {item.description}

                    </p>

                  </div>

                </Popup>

              </Marker>

            );

          })}

        </MapContainer>

      </div>

      {/* Summary */}

      <div className="translate-y-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div className="bg-green-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-green-600">

            {records.length}

          </h3>

          <p className="mt-2 text-slate-600">

            Total Locations

          </p>

        </div>

        <div className="bg-blue-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-blue-600">

            {
              records.filter(
                (r) => r.status === "Verified"
              ).length
            }

          </h3>

          <p className="mt-2 text-slate-600">

            Verified

          </p>

        </div>

        <div className="bg-yellow-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-yellow-600">

            {
              records.filter(
                (r) => r.status !== "Verified"
              ).length
            }

          </h3>

          <p className="mt-2 text-slate-600">

            Pending

          </p>

        </div>

        <div className="bg-purple-50 rounded-2xl p-5 text-center">

          <h3 className="text-3xl font-bold text-purple-600">

            {
              new Set(
                records.map(
                  (r) =>
                    `${r.latitude}-${r.longitude}`
                )
              ).size
            }

          </h3>

          <p className="mt-2 text-slate-600">

            Unique Points

          </p>

        </div>

      </div>

    </div>

  );
}