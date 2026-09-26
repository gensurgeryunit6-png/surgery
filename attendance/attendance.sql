create table if not exists public.attendance_sessions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  unit text not null,
  teacher text not null,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  status text not null default 'active' check (status in ('active','ended'))
);
create index if not exists attendance_sessions_status_idx on public.attendance_sessions(status, started_at desc);

create table if not exists public.attendance_registrations (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.attendance_sessions(id) on delete cascade,
  name text not null,
  regno text not null,
  unit text not null,
  face_image_path text,
  marked_at timestamptz not null default now(),
  unique(session_id, regno)
);
create index if not exists attendance_registrations_session_idx on public.attendance_registrations(session_id, marked_at desc);

alter table public.attendance_sessions enable row level security;
alter table public.attendance_registrations enable row level security;
revoke all on public.attendance_sessions from anon, authenticated;
revoke all on public.attendance_registrations from anon, authenticated;
