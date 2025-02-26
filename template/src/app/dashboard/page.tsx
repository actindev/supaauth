import { createClient } from '@/lib/supabase-server'

export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div className="bg-[#1C1C1C] rounded-lg border border-[#2E2E2E] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] p-6">
          <h2 className="text-lg font-medium text-text">Welcome back!</h2>
          <p className="mt-2 text-text-secondary">
            You are logged in as: {user?.email}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Users" value="0" />
          <StatCard title="Active Now" value="1" />
          <StatCard title="Response Time" value="24ms" />
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-[#1C1C1C] rounded-lg border border-[#2E2E2E] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] p-6">
      <p className="text-sm font-medium text-text-secondary">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-text">{value}</p>
    </div>
  )
} 