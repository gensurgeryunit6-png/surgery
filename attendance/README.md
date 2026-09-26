# IGMCRI Smart Class Attendance

Dynamic QR attendance module. Teacher starts a session; QR rotates every 10 seconds; students scan the QR, register, capture a face image, and are marked present only when the Edge Function validates the current session/token. Face capture is not biometric recognition.

Deployment requires an active Supabase project, a private `attendance-faces` Storage bucket, the SQL schema, and the Edge Functions in `attendance/functions/`.
