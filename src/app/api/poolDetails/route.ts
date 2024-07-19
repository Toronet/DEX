// pages/api/pool.ts
import { fetchPoolDetails } from "@/libs/poolDetails";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const poolDetails = await fetchPoolDetails();
    return NextResponse.json({poolDetails})
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error fetching pool details. Please try again." });
  }
}
