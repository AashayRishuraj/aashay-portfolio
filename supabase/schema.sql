-- Run this script in the Supabase SQL Editor.
-- The service-role key is used only by the Next.js server; never expose it in browser code.

create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 2 and 80),
  email text not null check (char_length(email) between 3 and 254),
  subject text not null check (char_length(subject) between 3 and 120),
  message text not null check (char_length(message) between 10 and 4000),
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

-- No anon/authenticated policies are created. Public visitors cannot read or write
-- this table directly. Inserts happen only through the server-side service role.
revoke all on table public.contact_messages from anon, authenticated;
