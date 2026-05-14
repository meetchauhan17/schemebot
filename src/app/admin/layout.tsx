import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/layout/AdminSidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // If the path is /admin/login, we don't render the sidebar or check auth
  const c = await cookies();
  const isLoggedIn = c.has("schemebot_admin_session");

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {isLoggedIn && <AdminSidebar />}
      <main className={`flex-1 ${isLoggedIn ? 'ml-64' : ''} min-h-screen`}>
        {children}
      </main>
    </div>
  );
}