CREATE TABLE public.early_access_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  role text NOT NULL,
  city text NOT NULL,
  consent boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX early_access_leads_email_key ON public.early_access_leads (lower(email));
GRANT ALL ON public.early_access_leads TO service_role;
ALTER TABLE public.early_access_leads ENABLE ROW LEVEL SECURITY;