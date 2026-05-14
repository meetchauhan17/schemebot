# 🚀 Deployment Guide — SchemeBot India

Follow these steps to deploy SchemeBot India to Vercel and set up the necessary backend services.

## 1. Supabase Setup (Database)
1. Create a free account at [supabase.com](https://supabase.com).
2. Create a new project named `schemebot-india`.
3. Go to the **SQL Editor** in the Supabase dashboard.
4. Open the `src/database/schema.sql` file from this repository.
5. Paste the SQL content into the editor and click **Run**.
6. This will create the `scheme_views`, `chat_sessions`, and `analytics_events` tables.

## 2. Vercel Deployment
1. Push your code to a GitHub repository.
2. Connect your repository to Vercel at [vercel.com](https://vercel.com).
3. In the **Environment Variables** section, add the following keys:

| Variable | Description |
| :--- | :--- |
| `GROQ_API_KEY` | Your Groq API key for Llama 3 models |
| `NEXT_PUBLIC_SUPABASE_URL` | Found in Supabase Settings > API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Found in Supabase Settings > API |
| `ADMIN_PASSWORD` | The password for the `/admin` portal |

4. Ensure the **Framework Preset** is set to `Next.js`.
5. Click **Deploy**.

## 3. Post-Deployment
1. Visit your live URL.
2. Access `/admin` to verify the dashboard and scheme management.
3. Test the PWA installation on a mobile device.

## Adding New Schemes
- **Method A (Code)**: Add a new entry to `src/data/schemes.ts`.
- **Method B (Admin)**: Use the "Add Scheme" form at `/admin/schemes/new` to generate the JSON, then add it to the code.

## Performance & SEO
- The project is configured with automatic sitemap generation at `/sitemap.xml`.
- Metadata is dynamically generated for every scheme page to ensure high search ranking for specific yojana names.
- Images and static assets are cached via the Service Worker for offline support.
