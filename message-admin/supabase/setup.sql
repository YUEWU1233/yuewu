-- Run once in Supabase SQL Editor. Compatible with the table already created.
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  message text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now(),
  is_read boolean not null default false
);
alter table public.messages enable row level security;
revoke all on table public.messages from public, anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update, delete on table public.messages to service_role;
create index if not exists messages_created_at_id_idx on public.messages(created_at desc, id desc);
