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
      - `techniques` (text array, default empty)
      - `yarn_details` (text, required)
      - `images` (text array, default empty)
      - `thumbnail` (text, required)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access to view projects and send messages
    - Add policies for authenticated users to manage projects and read messages

  3. Performance
    - Add indexes on frequently queried columns
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
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'projects' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'contact_messages' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Create policies for projects table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'projects' 
    AND policyname = 'Anyone can view projects'
  ) THEN
    CREATE POLICY "Anyone can view projects"
      ON projects
      FOR SELECT
      TO public
      USING (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'projects' 
    AND policyname = 'Authenticated users can manage projects'
  ) THEN
    CREATE POLICY "Authenticated users can manage projects"
      ON projects
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Create policies for contact_messages table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_messages' 
    AND policyname = 'Anyone can send contact messages'
  ) THEN
    CREATE POLICY "Anyone can send contact messages"
      ON contact_messages
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_messages' 
    AND policyname = 'Authenticated users can read contact messages'
  ) THEN
    CREATE POLICY "Authenticated users can read contact messages"
      ON contact_messages
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS projects_category_idx ON projects (category);
CREATE INDEX IF NOT EXISTS projects_created_at_idx ON projects (created_at DESC);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at DESC);