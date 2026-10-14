import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import AlonLogo from './AlonLogo'

export default function App() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    // Main background filling the screen
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#0f172a', // Dark slate background
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      
      {/* Interactive Wrapper */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        
        {/* The 3D Logo Circle */}
        <div style={{
          width: '140px', 
          height: '140px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          backgroundColor: '#1e293b',
          cursor: 'pointer',
          // Custom glowing shadow and scale effect on hover
          boxShadow: isHovered ? '0 0 25px rgba(0, 168, 255, 0.5)' : '0 10px 15px rgba(0,0,0,0.3)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <AlonLogo />
          </Canvas>
        </div>

        {/* Custom Info Card (Appears on Hover) */}
        <div style={{
          position: 'absolute',
          top: '160px',
          width: '260px',
          padding: '20px',
          backgroundColor: '#1e293b',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
          // Animation logic for fading in and sliding up
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateY(0)' : 'translateY(-15px)',
          pointerEvents: isHovered ? 'auto' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#00a8ff', fontSize: '1.25rem' }}>
            Agent Alon
          </h3>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.5' }}>
            Data Retrieval Specialist. Optimized for continuous, high-volume data wave analysis.
          </p>
          
          {/* Status Badge */}
          <div style={{ 
            marginTop: '16px', 
            display: 'inline-flex', 
            alignItems: 'center',
            padding: '4px 12px', 
            backgroundColor: 'rgba(16, 185, 129, 0.1)', 
            color: '#34d399', 
            borderRadius: '9999px', 
            fontSize: '0.75rem', 
            fontWeight: '600' 
          }}>
            <span style={{ 
              width: '8px', height: '8px', backgroundColor: '#10b981', 
              borderRadius: '50%', marginRight: '6px' 
            }}></span>
            System Online
          </div>
        </div>

      </div>
    </div>
  )
}