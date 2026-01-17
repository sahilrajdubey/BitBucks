# Supabase Setup for Student Registration

## Database Schema

### Table: `student_registrations`

Create this table in your Supabase dashboard (SQL Editor):

```sql
-- Create student_registrations table
CREATE TABLE student_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  registration_number TEXT NOT NULL,
  college_id TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  year TEXT NOT NULL,
  section TEXT NOT NULL,
  branch TEXT NOT NULL,
  preferred_domain TEXT NOT NULL,
  resume_link TEXT NOT NULL,
  why_hire_you TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_student_email ON student_registrations(email);

-- Create index on created_at for sorting
CREATE INDEX idx_student_created_at ON student_registrations(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE student_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow INSERT for anonymous users (for registration)
CREATE POLICY "Allow public insert" ON student_registrations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow SELECT for authenticated users only (for admin viewing)
CREATE POLICY "Allow authenticated select" ON student_registrations
  FOR SELECT
  TO authenticated
  USING (true);
```

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### How to Get Your Supabase Credentials:

1. Go to [https://supabase.com](https://supabase.com)
2. Sign in or create an account
3. Create a new project or select existing project
4. Go to **Settings** → **API**
5. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Table Fields Explanation

| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID | Auto-generated unique identifier |
| `full_name` | TEXT | Student's full name |
| `registration_number` | TEXT | University registration number |
| `college_id` | TEXT | College ID number |
| `email` | TEXT | Personal email (unique) |
| `phone` | TEXT | Phone number with country code |
| `year` | TEXT | Academic year (1st, 2nd, 3rd, 4th) |
| `section` | TEXT | Section (A, B, C, etc.) |
| `branch` | TEXT | Branch/Department |
| `preferred_domain` | TEXT | Preferred team/domain |
| `resume_link` | TEXT | Link to resume/portfolio |
| `why_hire_you` | TEXT | Application essay |
| `created_at` | TIMESTAMP | Registration timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

## Security Notes

- **Row Level Security (RLS)** is enabled to protect data
- Anonymous users can only INSERT (register)
- Only authenticated users can SELECT (view registrations)
- Email field has UNIQUE constraint to prevent duplicate registrations
- All fields are required (NOT NULL)

## Next Steps

1. Run the SQL schema in Supabase SQL Editor
2. Add environment variables to `.env.local`
3. Install Supabase client: `npm install @supabase/supabase-js`
4. The registration form will automatically connect to Supabase
