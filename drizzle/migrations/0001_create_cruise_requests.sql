CREATE TABLE public.cruise_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  cruise_type text NOT NULL,
  travel_window text NOT NULL,
  travelers text NOT NULL,
  nights text NOT NULL,
  priority text NOT NULL,
  budget text,
  name text NOT NULL,
  email text,
  whatsapp text,
  notes text,
  language text NOT NULL DEFAULT 'es'
);
GRANT ALL ON public.cruise_requests TO service_role;
ALTER TABLE public.cruise_requests ENABLE ROW LEVEL SECURITY;