import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Package from "../../../models/Package";

// -------------------- DELETE --------------------
export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { city } = params;

    const deleted = await Package.findOneAndDelete({ city });
    if (!deleted) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Package deleted successfully" });
  } catch (error) {
    console.error("DELETE /packages/[city] error:", error);
    return NextResponse.json({ error: "Failed to delete package" }, { status: 500 });
  }
}

// -------------------- GET (Single Package) --------------------
export async function GET(req, { params }) {
  const { city } = params;

  try {
    await connectToDatabase();

    const pkg = await Package.findOne({ city: new RegExp(`^${city}$`, "i") });

    if (!pkg) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json(pkg);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// -------------------- PUT (UPDATE PACKAGE) --------------------
export async function PUT(req, { params }) {
  try {
    await connectToDatabase();
    const { city } = params;
    const updatedData = await req.json();

    const updated = await Package.findOneAndUpdate(
      { city },
      updatedData,
      { new: true } // return updated doc
    );

    if (!updated) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Package updated successfully",
      updated,
    });
  } catch (error) {
    console.error("PUT /packages/[city] error:", error);
    return NextResponse.json({ error: "Failed to update package" }, { status: 500 });
  }
}
