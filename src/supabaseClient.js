import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hriykwfusfrruqkmqrkb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaXlrd2Z1c2ZycnVxa21xcmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NDI1NzAsImV4cCI6MjA3OTUxODU3MH0.XkmVeFKvIM1PfkneGsI8xYLaRnxA8G35T1vaylHMBn0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
