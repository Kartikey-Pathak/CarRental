import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Package from "../../../models/Package";

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

export async function GET(req, { params }) {
  const { city } = params;

  try {
    await connectToDatabase();

    // Find a package by city name (case insensitive)
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
