"use client"

import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error("[Supabase] MISSING env vars — NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is undefined. Check .env.local")
} else {
  // Log the project ref (safe to expose — it's in the URL already)
  const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1] ?? supabaseUrl
  console.log(`[Supabase] Browser client initialised → project: ${projectRef}`)
}

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey)
