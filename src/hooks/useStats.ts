import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export interface Stat {
  id: string
  key: string
  value: string
  label: string
  order_index: number
  created_at: string
  updated_at: string
}

export const useStats = () => {
  const [stats, setStats] = useState<Stat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('stats')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setStats(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return { stats, loading, error, refetch: fetchStats }
}