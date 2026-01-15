import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center px-4">
      <h2 className="text-4xl font-bold font-display text-gray-900 mb-4">404 - Página No Encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}
