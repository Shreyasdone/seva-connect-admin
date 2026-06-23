"use client"

import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/supabase"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error("[Supabase] MISSING env vars — NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is undefined. Check .env.local")
} else {
  const projectRef = supabaseUrl.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1] ?? supabaseUrl
  console.log(`[Supabase] Browser client (typed) initialised → project: ${projectRef}`)
}

export function createClient() {
  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseKey
  )
}