# IGMCRI Surgery IPD — Supabase version

This module replaces the local JSON-file persistence used by the older IPD prototype with Supabase Postgres + Auth + RLS.

## Included

- Dashboard: inpatient/ICU census and daily activity
- Patient registry with search and editing
- Admission register
- Daily progress notes
- Investigations: haematology, biochemistry, LFT, culture/serology, radiology
- Surgery / operative records
- Discharge summaries
- Audit screen
- Supabase Auth sign-in

## Architecture

- Frontend: `ipd/index.html`
- Database: Supabase Postgres
- Authentication: Supabase Auth
- Authorization: Postgres Row Level Security
- File/version control: GitHub

The browser uses the Supabase **publishable** key. No service-role secret is included in this repository. Access is controlled by RLS and the user's authenticated staff role.

## Supabase project

Project URL:
`https://pnncnljakqrqzocahxhs.supabase.co`

The IPD schema is created by migration `create_ipd_management_schema`.

## Deployment

The file can be served by GitHub Pages or any static web host. Before production use, verify that authorized staff accounts exist and that the Supabase security settings match the hospital's access requirements.

## Clinical safety

This is a software record-keeping system. Clinical content, diagnosis, treatment and discharge decisions remain the responsibility of the treating clinical team. Validation against the department's approved forms and workflows is required before operational use.
