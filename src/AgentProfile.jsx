import { Canvas } from '@react-three/fiber'
import AlonLogo from './AlonLogo' // Adjust the import path

export default function AgentProfile() {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-10 w-full max-w-sm mx-auto">
      
      {/* The circular wrapper and Canvas */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.2)] bg-slate-900">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <AlonLogo />
        </Canvas>
      </div>

      {/* The rest of the profile UI */}
      <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        Agent Alon
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-2">
        Data Retrieval Specialist
      </p>

    </div>
  )
}