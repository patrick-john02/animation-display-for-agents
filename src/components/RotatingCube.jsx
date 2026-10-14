import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AlonLogo() {
  const meshRef = useRef()

  useFrame((state) => {
    // Sped up the time slightly for a more active logo
    const time = state.clock.elapsedTime * 1.5 
    
    if (meshRef.current) {
      const position = meshRef.current.geometry.attributes.position

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i)
        const y = position.getY(i)

        // "A lot of waves" = higher frequency multipliers (e.g., x * 6)
        // Logo scale = much smaller height multiplier (e.g., * 0.08)
        const waveHeight = 
          Math.sin(x * 6 + time) * 0.08 + 
          Math.cos(y * 6 + time) * 0.08
        
        position.setZ(i, waveHeight)
      }

      position.needsUpdate = true
      meshRef.current.geometry.computeVertexNormals()
    }
  })

  return (
    // Rotated to look at it slightly from an angle, making the waves pop
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]}>
      {/* Dense grid (64x64) is required so the tight waves look smooth */}
      <planeGeometry args={[4, 4, 64, 64]} />
      <meshStandardMaterial
        color="#00a8ff" // A vibrant, tech-friendly ocean blue
        wireframe={false} // Turned off wireframe for a solid logo look
        roughness={0.1} // Makes it look a bit glossy/wet
        metalness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}