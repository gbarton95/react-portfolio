export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Hola, soy Gabriela</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <p className="text-gray-700 mb-4">
        Frontend Developer especializada en React y TypeScript.  
        Este es mi meta-currículum interactivo.
      </p>
    </div>
  )
}