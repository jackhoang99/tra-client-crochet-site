/*
  # Add Statistics Table

  1. New Tables
    - `stats`
      - `id` (uuid, primary key)
      - `key` (text, unique) - identifier for the stat (e.g., 'projects_made', 'years_experience')
      - `value` (text) - the display value (e.g., '150+', '3', '25+')
      - `label` (text) - the display label (e.g., 'Projects Made', 'Years Experience')
      - `order_index` (integer) - for ordering the stats
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `stats` table
    - Add policy for public read access
    - Add policy for authenticated users to manage stats

  3. Initial Data
    - Insert the current statistics values
*/

-- Create stats table
CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  label text NOT NULL,
  order_index integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'stats' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create policies for stats table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'stats' 
    AND policyname = 'Anyone can view stats'
  ) THEN
    CREATE POLICY "Anyone can view stats"
      ON stats
      FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'stats' 
    AND policyname = 'Authenticated users can manage stats'
  ) THEN
    CREATE POLICY "Authenticated users can manage stats"
      ON stats
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS stats_key_idx ON stats (key);
CREATE INDEX IF NOT EXISTS stats_order_idx ON stats (order_index);

-- Insert initial statistics data
INSERT INTO stats (key, value, label, order_index) VALUES
  ('projects_made', '150+', 'Projects Made', 1),
  ('years_experience', '3', 'Years Experience', 2),
  ('patterns_created', '25+', 'Patterns Created', 3),
  ('hours_crocheting', '500+', 'Hours of Crocheting', 4)
ON CONFLICT (key) DO NOTHING;