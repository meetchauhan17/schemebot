const fs = require('fs');
const path = require('path');

const structure = [
  'src/app/(main)/chat/page.tsx',
  'src/app/(main)/schemes/[id]/page.tsx',
  'src/app/(main)/schemes/page.tsx',
  'src/app/(main)/saved/page.tsx',
  'src/app/(main)/onboarding/page.tsx',
  'src/app/(main)/dashboard/page.tsx',
  'src/app/(main)/about/page.tsx',
  'src/app/(main)/page.tsx',
  'src/app/admin/schemes/new/page.tsx',
  'src/app/admin/schemes/page.tsx',
  'src/app/admin/layout.tsx',
  'src/app/admin/page.tsx',
  'src/app/api/chat/route.ts',
  'src/app/api/schemes/[id]/route.ts',
  'src/app/api/schemes/route.ts',
  'src/app/api/analytics/route.ts',
  'src/app/api/health/route.ts',
  'src/app/loading.tsx',
  'src/app/error.tsx',
  'src/app/not-found.tsx',
  'src/components/layout/Navbar.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/MobileBottomNav.tsx',
  'src/components/layout/AdminSidebar.tsx',
  'src/components/chat/ChatInterface.tsx',
  'src/components/chat/MessageBubble.tsx',
  'src/components/chat/ChatInput.tsx',
  'src/components/chat/TypingIndicator.tsx',
  'src/components/chat/QuickSuggestions.tsx',
  'src/components/chat/SchemeResultCard.tsx',
  'src/components/chat/VoiceButton.tsx',
  'src/components/schemes/SchemeCard.tsx',
  'src/components/schemes/SchemeGrid.tsx',
  'src/components/schemes/SchemeFilters.tsx',
  'src/components/schemes/SchemeDetail.tsx',
  'src/components/schemes/EligibilityChecker.tsx',
  'src/components/schemes/DocumentChecklist.tsx',
  'src/components/onboarding/OnboardingFlow.tsx',
  'src/components/onboarding/steps/LanguageStep.tsx',
  'src/components/onboarding/steps/BasicInfoStep.tsx',
  'src/components/onboarding/steps/LocationStep.tsx',
  'src/components/onboarding/steps/OccupationStep.tsx',
  'src/components/onboarding/steps/IncomeStep.tsx',
  'src/components/onboarding/steps/CategoryStep.tsx',
  'src/components/onboarding/steps/FamilyStep.tsx',
  'src/components/dashboard/StatsCard.tsx',
  'src/components/dashboard/IndiaMap.tsx',
  'src/components/dashboard/UsageCharts.tsx',
  'src/components/shared/LanguageSelector.tsx',
  'src/components/shared/BookmarkButton.tsx',
  'src/components/shared/ShareButton.tsx',
  'src/components/shared/ImpactCalculator.tsx',
  'src/components/shared/CSCLocator.tsx',
  'src/components/shared/DeadlineTracker.tsx',
  'src/components/shared/ThemeToggle.tsx',
  'src/lib/schemes.ts',
  'src/lib/translator.ts',
  'src/lib/systemPrompt.ts',
  'src/lib/userProfile.ts',
  'src/lib/savedSchemes.ts',
  'src/lib/analytics.ts',
  'src/lib/sharing.ts',
  'src/lib/pdfExport.ts',
  'src/hooks/useChat.ts',
  'src/hooks/useLanguage.ts',
  'src/hooks/useProfile.ts',
  'src/hooks/useSavedSchemes.ts',
  'src/hooks/useVoice.ts',
  'src/hooks/useDebounce.ts',
  'src/data/schemes.ts'
];

structure.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  if (!fs.existsSync(fullPath)) {
    const ext = path.extname(fullPath);
    let content = '';
    if (ext === '.tsx') {
      const name = path.basename(fullPath, '.tsx');
      if (name === 'page' || name === 'layout' || name === 'loading' || name === 'error' || name === 'not-found') {
        const componentName = name.replace(/-./g, x => x[1].toUpperCase());
        content = `export default function ${componentName.charAt(0).toUpperCase() + componentName.slice(1)}() {\n  return <div>Placeholder for ${file}</div>;\n}`;
      } else {
        content = `export function ${name}() {\n  return <div>${name}</div>;\n}`;
      }
    } else if (ext === '.ts') {
      if (fullPath.includes('route.ts')) {
        content = `export async function GET() {\n  return Response.json({ status: "ok" });\n}`;
      } else {
        content = `export const _placeholder = true;`;
      }
    }
    fs.writeFileSync(fullPath, content);
  }
});

console.log('Folder structure created successfully!');
