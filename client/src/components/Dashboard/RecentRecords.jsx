import {
  MapPin,
  Calendar,
  CheckCircle2,
  Clock3,
  Image as ImageIcon,
} from "lucide-react";

export default function RecentRecords({ records = [] }) {
  const recent = records.slice(0, 5);

  return (
    <div className="glass-card rounded-3xl shadow-lg p-8 h-150">

      {/* Header */}

      <div className="translate-x-10 translate-y-5 flex justify-between items-center mb-8">

        <div>

          <h2 className="text-3xl font-bold text-black">
            Recent Reports
          </h2>

          <p className="text-black mt-2">
            Latest community waste reports
          </p>

        </div>

        <div className="-translate-x-14 bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
          {recent.length} Latest
        </div>

      </div>

      {recent.length === 0 ? (

        <div className="h-72 flex flex-col items-center justify-center">

          <ImageIcon
            size={60}
            className="text-black"
          />

          <h3 className="translate-y-15 mt-5 text-2xl font-bold text-black">

            No Reports Yet

          </h3>

          <p className="translate-y-20 mt-2 text-black">

            Submit your first waste report.

          </p>

        </div>

      ) : (

        <div className="translate-y-10 space-y-10">

          {recent.map((item) => {

            const imageUrl = item.image
              ? `http://localhost:5000/uploads/${item.image}`
              : null;

            return (

              <div
                key={item._id}
                className="flex gap-5 p-5 rounded-2xl bg-green hover:bg-green-100 transition"
              >

                {/* Image */}

                <div className="flex-shrink-0">

                  {imageUrl ? (

                    <img
                      src={imageUrl}
                      alt={item.wasteType}
                      className="translate-x-3 translate-y-2 w-20 h-20 rounded-2xl object-cover"
                    />

                  ) : (

                    <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center">

                      <ImageIcon
                        size={30}
                        className="text-black"
                      />

                    </div>

                  )}

                </div>

                {/* Details */}

                <div className="flex-1">

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-xl font-bold text-black">

                        {item.wasteType}

                      </h3>

                      <p className="text-black mt-1">

                        {item.weight} kg

                      </p>

                    </div>

                    <span
                      className={`px-4 -translate-x-5 translate-y-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 ${
                        item.status === "Verified"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >

                      {item.status === "Verified" ? (

                        <CheckCircle2 size={16} />

                      ) : (

                        <Clock3 size={16} />

                      )}

                      {item.status}

                    </span>

                  </div>

                  <div className="flex flex-wrap gap-5 mt-4 text-black text-sm">

                    <div className="flex items-center gap-2">

                      <MapPin size={16} />

                      {Number(item.latitude).toFixed(4)},
                      {" "}
                      {Number(item.longitude).toFixed(4)}

                    </div>

                    <div className="flex items-center gap-2">

                      <Calendar size={16} />

                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}

                    </div>

                  </div>

                  <p className="mt-4 text-black line-clamp-2">

                    {item.description}

                  </p>

                </div>

              </div>

            );

          })}

        </div>

      )}

    </div>
  );
}