-- Sol-Nexus Story Planner — Initial Schema
-- Run: supabase db push

-- ── Character notes (one row per character, upserted on save) ──
create table if not exists character_notes (
  character_id  text primary key,
  content       text not null default '',
  updated_at    timestamptz not null default now()
);

-- ── Lore section edits (key = "section_id::subsection_id") ──
create table if not exists lore_edits (
  edit_key    text primary key,
  content     text not null,
  updated_at  timestamptz not null default now()
);

-- ── Custom timeline events added by the user ──
create table if not exists custom_events (
  id          uuid primary key default gen_random_uuid(),
  era_id      text not null,
  event_data  jsonb not null,
  created_at  timestamptz not null default now()
);

-- ── Row Level Security (permissive — single personal app, no auth needed) ──
alter table character_notes enable row level security;
alter table lore_edits       enable row level security;
alter table custom_events    enable row level security;

create policy "allow all" on character_notes for all using (true) with check (true);
create policy "allow all" on lore_edits       for all using (true) with check (true);
create policy "allow all" on custom_events    for all using (true) with check (true);
