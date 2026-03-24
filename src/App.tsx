import { useCallback, useState } from 'react'
import { ConditionsSection } from './components/ConditionsSection'
import { ConsultationModal } from './components/ConsultationModal'
import { DashboardSection } from './components/DashboardSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ProvidersSection } from './components/ProvidersSection'
import { SignInModal } from './components/SignInModal'
import { useDemoSession } from './hooks/useDemoSession'
import { useLocalStorageJson } from './hooks/useLocalStorageJson'
import {
  isConsultationArray,
  isDocumentMetaArray,
  isHealthRecordArray,
} from './lib/storageValidators'
import type { Provider } from './types'

export default function App() {
  const { session, signIn, signOut } = useDemoSession()
  const [signInOpen, setSignInOpen] = useState(false)
  const [consultProvider, setConsultProvider] = useState<Provider | null>(null)

  const [records, setRecords] = useLocalStorageJson('docmagis_health_records', [], isHealthRecordArray)
  const [documents, setDocuments] = useLocalStorageJson('docmagis_documents', [], isDocumentMetaArray)
  const [consultations, setConsultations] = useLocalStorageJson(
    'docmagis_consultations',
    [],
    isConsultationArray,
  )

  const sessionLabel = session ? session.displayName : null

  const handleConsultSubmit = useCallback(
    (provider: Provider, payload: { message: string; preferredTime: string }) => {
      setConsultations((prev) => [
        {
          id: crypto.randomUUID(),
          providerId: provider.id,
          providerName: provider.name,
          message: payload.message,
          preferredTime: payload.preferredTime,
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ])
    },
    [setConsultations],
  )

  return (
    <div className="min-h-dvh bg-doc-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-doc-teal-700 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header
        onSignInClick={() => setSignInOpen(true)}
        sessionLabel={sessionLabel}
      />
      <main id="main-content">
        <HeroSection />
        <ProvidersSection onRequestConsultation={(p) => setConsultProvider(p)} />
        <ConditionsSection />
        <DashboardSection
          session={session}
          onOpenSignIn={() => setSignInOpen(true)}
          records={records}
          setRecords={setRecords}
          documents={documents}
          setDocuments={setDocuments}
          consultations={consultations}
        />
      </main>
      <Footer />

      <SignInModal
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        session={session}
        onSignIn={signIn}
        onSignOut={signOut}
      />

      <ConsultationModal
        open={Boolean(consultProvider)}
        provider={consultProvider}
        onClose={() => setConsultProvider(null)}
        onSubmit={(payload) => {
          if (consultProvider) handleConsultSubmit(consultProvider, payload)
        }}
      />
    </div>
  )
}
