
import './globals.css';
import Sidebar from '@/components/Sidebar'; 

export const metadata = {
  title: 'eMutua Product Management',
  description: 'Teste Técnico Full Stack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <div className="flex min-h-full">
          {/* Menu Lateral Fixo */}
          <div className="w-72 flex-shrink-0">
            <Sidebar />
          </div>

          {/* Conteúdo Principal */}
          <main className="flex-1 bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}