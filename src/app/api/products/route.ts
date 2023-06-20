import products from '../../../../products.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ products: products })
}