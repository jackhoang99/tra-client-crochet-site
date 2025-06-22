import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          category: string
          description: string
          difficulty: string
          time_spent: string
          completed_date: string
          techniques: string[]
          yarn_details: string
          images: string[]
          thumbnail: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          category: string
          description: string
          difficulty: string
          time_spent: string
          completed_date: string
          techniques: string[]
          yarn_details: string
          images: string[]
          thumbnail: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          category?: string
          description?: string
          difficulty?: string
          time_spent?: string
          completed_date?: string
          techniques?: string[]
          yarn_details?: string
          images?: string[]
          thumbnail?: string
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          created_at?: string
        }
      }
      stats: {
        Row: {
          id: string
          key: string
          value: string
          label: string
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: string
          label: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: string
          label?: string
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}