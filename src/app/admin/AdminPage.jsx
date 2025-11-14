"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [packages, setPackages] = useState([]);
  const router = useRouter();

  const [form, setForm] = useState({
    city: "",
    type: "",
    img: "",
    days: "",
    des: "",
    timeline: [],
  });

  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // NEW → Track which package is being edited
  const [editingCity, setEditingCity] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  async function fetchPackages() {
    try {
      const res = await fetch("/api/packages");
      const data = await res.json();
      setPackages(data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setForm({ ...form, img: data.url });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Image upload failed!");
    } finally {
      setUploading(false);
    }
  }

  function addTimelineDay() {
    setForm({
      ...form,
      timeline: [
        ...form.timeline,
        { day: form.timeline.length + 1, title: "", points: [""] },
      ],
    });
  }

  function updateTimelineField(index, field, value) {
    const updated = [...form.timeline];
    updated[index][field] = value;
    setForm({ ...form, timeline: updated });
  }

  function updatePoint(index, pointIndex, value) {
    const updated = [...form.timeline];
    updated[index].points[pointIndex] = value;
    setForm({ ...form, timeline: updated });
  }

  function addPoint(index) {
    const updated = [...form.timeline];
    updated[index].points.push("");
    setForm({ ...form, timeline: updated });
  }

  function removePoint(dayIndex, pointIndex) {
    const updated = [...form.timeline];
    updated[dayIndex].points.splice(pointIndex, 1);
    setForm({ ...form, timeline: updated });
  }

  function removeDay(index) {
    if (!confirm("Are you sure you want to remove this day?")) return;
    const updated = [...form.timeline];
    updated.splice(index, 1);
    updated.forEach((day, i) => (day.day = i + 1));
    setForm({ ...form, timeline: updated });
  }

  // NEW → Load existing package into the form for editing
  function startEdit(pkg) {
    setEditingCity(pkg.city); // track original city
    setForm({
      city: pkg.city,
      type: pkg.type,
      img: pkg.img,
      days: pkg.days,
      des: pkg.des,
      timeline: pkg.timeline,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // CREATE + UPDATE
  async function handleSubmit() {
    try {
      if (!form.city.trim()) {
        alert("Please enter the city name.");
        return;
      }
      if (!form.type.trim()) {
        alert("Please select package type.");
        return;
      }
      if (!form.img.trim()) {
        alert("Please upload an image.");
        return;
      }

      setSubmitting(true);

      if (editingCity) {
        // UPDATE existing package
        await fetch(`/api/packages/${editingCity}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        alert("Package updated successfully!");
      } else {
        // CREATE new package
        await fetch("/api/packages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      // Reset form
      setEditingCity(null);
      setForm({ city: "", type: "", img: "", days: "", des: "", timeline: [] });

      fetchPackages();
    } catch (err) {
      console.error("Error saving package:", err);
      alert("Failed to save package.");
    } finally {
      setSubmitting(false);
    }
  }

  async function deletePackage(city) {
    try {
      await fetch(`/api/packages/${city}`, { method: "DELETE" });
      fetchPackages();
    } catch (err) {
      console.error("Error deleting package:", err);
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="p-8 space-y-10 bg-gray-50 min-h-screen">
      <button
        onClick={handleLogout}
        type="button"
        className="cursor-pointer transition-all h-12 w-32 bg-black font-semibold border-2 border-white rounded-xl text-red-400"
      >
        <h1 className="text-red-500 font-semibold">LogOut</h1>
      </button>

      <h1 className="text-3xl font-bold text-black">Admin — Manage Tour Packages</h1>

      {/* FORM */}
      <div className="border p-5 rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4 text-black">
          {editingCity ? "Edit Package" : "Add New Package"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="City"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="border p-2 rounded border-black text-black"
          />

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="border p-2 rounded border-black text-black"
          >
            <option value="">Select Type</option>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border p-2 rounded w-full border-black text-black"
            />
            {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
            {form.img && (
              <img
                src={form.img}
                alt="Uploaded preview"
                className="mt-2 w-full h-40 object-cover rounded"
              />
            )}
          </div>

          <input
            placeholder="Days (e.g. 5 Days 4 Nights)"
            value={form.days}
            onChange={(e) => setForm({ ...form, days: e.target.value })}
            className="border p-2 rounded border-black text-black"
          />

          <textarea
            placeholder="Description"
            value={form.des}
            onChange={(e) => setForm({ ...form, des: e.target.value })}
            className="border p-2 rounded col-span-2 border-black text-black"
          />
        </div>

        {/* TIMELINE */}
        <div className="mt-6 space-y-6">
          <h3 className="text-lg font-bold text-black">Timeline</h3>

          {form.timeline.map((day, i) => (
            <div key={i} className="border p-4 rounded-lg border-black text-black">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-black">Day {day.day}</h4>
                <button
                  type="button"
                  onClick={() => removeDay(i)}
                  className="text-red-600 text-sm hover:text-red-800 cursor-pointer transition-all"
                >
                  🗑 Remove Day
                </button>
              </div>

              <input
                placeholder="Day Title"
                value={day.title}
                onChange={(e) => updateTimelineField(i, "title", e.target.value)}
                className="border p-2 rounded w-full mb-2 border-black text-black"
              />

              <h5 className="font-semibold mb-1">Points:</h5>

              {day.points.map((p, j) => (
                <div key={j} className="flex items-center gap-2 mb-2">
                  <input
                    placeholder={`Point ${j + 1}`}
                    value={p}
                    onChange={(e) => updatePoint(i, j, e.target.value)}
                    className="border p-2 rounded w-full border-black text-black"
                  />

                  <button
                    type="button"
                    onClick={() => removePoint(i, j)}
                    className="text-red-600 text-sm hover:text-red-800 cursor-pointer transition-all"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => addPoint(i)}
                className="text-blue-600 text-sm cursor-pointer transition-all"
              >
                + Add Point
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addTimelineDay}
            className="bg-gray-200 text-black border-black px-4 py-2 rounded hover:bg-gray-300 cursor-pointer transition-all"
          >
            + Add Day
          </button>
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className={`mt-6 px-6 py-2 rounded text-white cursor-pointer transition-all ${
            submitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {submitting
            ? editingCity
              ? "Updating..."
              : "Saving..."
            : editingCity
            ? "Update Package"
            : "Save Package"}
        </button>
      </div>

      {/* EXISTING PACKAGES */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-black">Existing Packages</h2>
        <ul className="space-y-3">
          {packages.map((pkg) => (
            <li
              key={pkg.city}
              className="flex justify-between border p-3 rounded-lg bg-white"
            >
              <div>
                <p className="font-bold text-black">
                  {pkg.city}{" "}
                  <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded ml-2">
                    {pkg.type ? pkg.type.charAt(0).toUpperCase() + pkg.type.slice(1) : "N/A"}
                  </span>
                </p>

                <p className="text-sm text-gray-600">{pkg.days}</p>

                {pkg.img && (
                  <img
                    src={pkg.img}
                    alt={pkg.city}
                    className="w-32 h-20 object-cover rounded mt-2"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => startEdit(pkg)}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer transition-all"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletePackage(pkg.city)}
                  className="text-red-500 hover:text-red-700 cursor-pointer transition-all"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
