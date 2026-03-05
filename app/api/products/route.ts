import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "./data";

/**
 * GET /api/products
 * Returns the full list of products, with optional ?category= filtering.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const results = category
    ? PRODUCTS.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    : PRODUCTS;

  return NextResponse.json({ products: results, total: results.length });
}
