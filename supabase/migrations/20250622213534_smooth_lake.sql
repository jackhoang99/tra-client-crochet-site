/*
  # Create projects and contact_messages tables

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `category` (text, required)
      - `description` (text, required)
      - `difficulty` (text, default 'Beginner')
      - `time_spent` (text, required)
      - `completed_date` (text, required)
      - `techniques` (text array, default empty array)
      - `yarn_details` (text, required)
      - `images` (text array, default empty array)
      - `thumbnail` (text, required)
      - `created_at` (timestamp with timezone, default now)
      - `updated_at` (timestamp with timezone, default now)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp with timezone, default now)

  2. Security
    - Enable RLS on both tables
    - Add policies for public viewing of projects
    - Add policies for authenticated users to manage projects
    - Add policies for contact message handling

  3. Indexes
    - Add performance indexes for common queries
*/

-- Create projects table
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

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for projects table
CREATE POLICY "Anyone can view projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policies for contact_messages table
CREATE POLICY "Anyone can send contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS projects_category_idx ON projects (category);
CREATE INDEX IF NOT EXISTS projects_created_at_idx ON projects (created_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at DESC);