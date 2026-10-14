import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function AlonLogo() {
  const meshRef = useRef() // This is required to attach to the mesh

  useFrame((state) => {
    const time = state.clock.elapsedTime * 1.5 
    
    if (meshRef.current) {
      const position = meshRef.current.geometry.attributes.position

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i)
        const y = position.getY(i)

        // Calculate the waves
        const waveHeight = Math.sin(x * 6 + time) * 0.08 + Math.cos(y * 6 + time) * 0.08
        
        position.setZ(i, waveHeight)
      }

      position.needsUpdate = true
      meshRef.current.geometry.computeVertexNormals()
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]}>
      <planeGeometry args={[4, 4, 64, 64]} />
      <meshStandardMaterial 
        color="#00a8ff" 
        roughness={0.1} 
        metalness={0.2} 
        side={THREE.DoubleSide} 
      />
    </mesh>
  )
}