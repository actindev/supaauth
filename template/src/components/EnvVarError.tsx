import { AlertTriangle } from 'lucide-react'

export default function EnvVarError() {
  const envVars = `NEXT_PUBLIC_SUPABASE_URL="[Supabase Project URL]"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[Supabase Anon Key]"`

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full bg-background-dark rounded-lg border border-[#2E2E2E] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] p-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-900/20 border border-red-900/30 mx-auto mb-4">
          <AlertTriangle className="w-6 h-6 text-red-500" />
        </div>
        <h1 className="text-xl font-semibold text-center text-text mb-2">
          Missing Environment Variables
        </h1>
        <p className="text-text-secondary text-center mb-6">
          Add the following environment variables to your <code className="text-primary">.env.local</code> file:
        </p>
        <div className="bg-[#1C1C1C] rounded border border-[#2E2E2E] p-4 mb-6 font-mono text-sm overflow-x-auto">
          <pre className="text-amber-500 whitespace-pre">{envVars}</pre>
        </div>
        <div className="space-y-4 text-sm text-text-secondary">
          <p>
            To fix this:
          </p>
          <ol className="list-decimal pl-4 space-y-2">
            <li>Create a <code className="text-primary">.env.local</code> file in your project root</li>
            <li>Copy the above variables and replace the placeholder values</li>
            <li>Get your project values from the{' '}
              <a 
                href="https://supabase.com/dashboard/project/_/settings/api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline"
              >
                Supabase Dashboard
              </a>
            </li>
            <li>Restart your development server</li>
          </ol>
          <p className="pt-4 text-xs">
            Need help? Check the{' '}
            <a 
              href="https://supabase.com/docs/guides/getting-started/local-development#api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              Supabase documentation
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 