/*
  # Create projects table for Yuto's crochet portfolio

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, project name)
      - `category` (text, project category)
      - `description` (text, project description)
      - `difficulty` (text, difficulty level)
      - `time_spent` (text, time taken to complete)
      - `completed_date` (text, completion date)
      - `techniques` (text array, crochet techniques used)
      - `yarn_details` (text, yarn and materials info)
      - `images` (text array, image URLs)
      - `thumbnail` (text, main thumbnail URL)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `projects` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin access for CRUD operations
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL DEFAULT 'Beginner',
  time_spent text NOT NULL,
  completed_date text NOT NULL,
  techniques text[] NOT NULL DEFAULT '{}',
  yarn_details text NOT NULL,
  images text[] NOT NULL DEFAULT '{}',
  thumbnail text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects (portfolio is public)
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated users to manage projects (for admin)
CREATE POLICY "Authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS projects_category_idx ON projects(category);
CREATE INDEX IF NOT EXISTS projects_created_at_idx ON projects(created_at DESC);