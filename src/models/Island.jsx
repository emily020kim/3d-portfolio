/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: vilmariina (https://sketchfab.com/vilmariina)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/floating-island-of-the-potion-brewer-555992efd5c74cf299f5a3ab4acd0a3b
Title: Floating Island of the Potion Brewer
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import islandScene from "../assets/3d/plane.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const islandRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches 
            ?  e.touches[0].clientX 
            : e.clientX;

        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating) {
            const clientX = e.touches 
            ?  e.touches[0].clientX 
            : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            islandRef.current.rotation.y += delta * 0.01 * Math.PI;

            lastX.current = clientX;

            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
            rotationSpeed.current = 0.0125;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
            rotationSpeed.current = -0.0125;
        }
    };

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    };

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }

            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            switch (true) {
                case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    });

    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    return (
        <a.group {...props} ref={islandRef}>
        <group
            position={[-85.271, -858.185, 387.906]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_48.geometry}
                material={materials.Bottom_WoodTiling}
            />
            <mesh
                geometry={nodes.Object_49.geometry}
                material={materials.House_Wood_tiling}
            />
        </group>
        <group
            position={[-354.021, 73.764, 593.537]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_54.geometry}
                material={materials.FirewoodRope}
                position={[211.1, 405.906, -70.106]}
            />
        </group>
        <group
            position={[-388.02, 43.789, 645.444]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_57.geometry}
                material={materials.Bottles}
                position={[245.099, 457.812, -40.131]}
            />
        </group>
        <group
            position={[-97.832, 713.206, -182.745]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_60.geometry}
                material={materials.StonesChimney}
                position={[-10.954, 1.879, -549.18]}
            />
        </group>
        <group
            position={[-492.724, 27.721, -84.427]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_67.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[-529.339, 92.287, 380.564]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_74.geometry}
                material={materials.House_Wood_tiling}
                position={[513.715, 238.204, -213.301]}
            />
            <mesh
                geometry={nodes.Object_76.geometry}
                material={materials.FirewoodRope}
                position={[1.225, -20.385, 76.851]}
                rotation={[1.542, 0, 0]}
                scale={0.511}
            />
            <mesh
                geometry={nodes.Object_78.geometry}
                material={materials.PipeLantern}
                position={[0, -26.788, 33.706]}
            />
        </group>
        <group
            position={[68.458, 195.32, 548.755]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
            <mesh
                geometry={nodes.Object_81.geometry}
                material={materials.House_Wood_tiling}
                position={[512.866, 235.123, -289.451]}
            />
        </group>
        <group
            position={[-440.118, 43, -163.345]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_128.geometry}
                material={materials.CrateBarrel}
                position={[0, 0, -42.374]}
            />
        </group>
        <group position={[89.354, 43, 325.116]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
                geometry={nodes.Object_131.geometry}
                material={materials.CrateBarrel}
                position={[0, 0, -42.374]}
            />
        </group>
        <group position={[162.431, 43, 346.302]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
                geometry={nodes.Object_134.geometry}
                material={materials.CrateBarrel}
                position={[0, 0, -42.374]}
            />
        </group>
        <group position={[162.431, 43, -234.156]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
                geometry={nodes.Object_137.geometry}
                material={materials.CrateBarrel}
                position={[0, 0, -42.374]}
            />
        </group>
        <group
            position={[249.737, 27.721, -84.427]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_140.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[249.737, 27.721, 16.514]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_143.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[249.737, 74.788, -17.896]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_146.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[172.085, 27.721, 536.062]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_155.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[121.792, 27.721, 527.838]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_158.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[222.232, 27.721, 532.427]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh   
                geometry={nodes.Object_161.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[222.232, 74.667, 537.937]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_164.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[172.085, 74.667, 532.427]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_167.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[222.232, 120.345, 532.427]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_170.geometry}
                material={materials.CrateBarrel}
                position={[43.449, -133.238, -27.095]}
            />
        </group>
        <group
            position={[-423.294, 50.923, 588.107]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_175.geometry}
                material={materials.Bottles}
                position={[280.373, 400.476, -47.265]}
            />
        </group>
        <group
            position={[-394.592, 50.424, 611.606]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_178.geometry}
                material={materials.Bottles}
                position={[251.672, 423.974, -46.766]}
            />
        </group>
        <group
            position={[-389.999, 88.509, 615.7]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_181.geometry}
                material={materials.FirewoodRope}
                position={[247.078, 428.069, -84.851]}
            />
        </group>
        <group
            position={[-389.999, 88.509, 615.7]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_184.geometry}
                material={materials.FirewoodRope}
                position={[247.078, 428.069, -84.851]}
            />
        </group>
        <group
            position={[85.088, 148.774, 326.176]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_189.geometry}
                material={materials.FirewoodRope}
                position={[-1.614, 23.202, 1.448]}
            />
        </group>
        <group
            position={[284.216, 43.066, 173.53]}
            rotation={[-Math.PI / 2, 0, 0.194]}
            scale={1.999}
        >
            <group position={[-0.997, 14.484, -55.741]}>
                <mesh
                    geometry={nodes.Object_192.geometry}
                    material={materials.SmalLeaves}
                />
                <mesh
                    geometry={nodes.Object_193.geometry}
                    material={materials.RoundLeaves}
                />
            </group>
        </group>
        <group
            position={[79.821, 96.848, 581.673]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_196.geometry}
                material={materials.Bottles}
                position={[251.672, 423.974, -46.766]}
            />
        </group>
        <group
            position={[120.392, 120.188, 563.604]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_199.geometry}
                material={materials.FirewoodRope}
                position={[211.1, 405.906, -70.106]}
            />
        </group>
        <group
            position={[204.612, 50.923, 624.014]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_202.geometry}
                material={materials.Bottles}
                position={[280.373, 400.476, -47.265]}
            />
        </group>
        <group
            position={[237.907, 88.509, 651.607]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <mesh
                geometry={nodes.Object_205.geometry}
                material={materials.FirewoodRope}
                position={[247.078, 428.069, -84.851]}
            />
        </group>
        <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.House_PlasterWall}
            position={[-36.601, 510.087, 65.762]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Platform_WoodTiling}
            position={[-12.951, -121.014, 123.01]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            
            
            geometry={nodes.Object_8.geometry}
            material={materials.Balloon}
            position={[-82.552, 0.18, 206.967]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Shed_PlasterWall}
            position={[356.877, 4.713, 468.834]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.FirewoodRope}
            position={[185.978, 290.117, 398.143]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.RoofTiles}
            position={[21.832, 743.774, 282.175]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Chimney_PBolts}
            position={[-54.861, 704.58, -179.043]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.RoofTiles}
            position={[61.68, 800.095, 100.584]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.House_Wood_tiling}
            position={[9.188, 214.699, 209.295]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.DoorsAndDoorframes}
            position={[-51.627, 97.282, 188.968]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.WindowGlass}
            position={[9.188, 213.821, 209.295]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.RoofMaterial}
            position={[9.188, 214.699, 209.295]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Grass_base}
            position={[-12.951, -121.014, 123.01]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.Material_5}
            position={[356.877, 4.713, 468.834]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.Shed_Wood_Tiling}
            position={[86.041, 9.267, 551.565]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_34.geometry}
            material={materials.Test_Wood}
            position={[-422.916, 24.23, 588.285]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.stoneHighlights}
            position={[-194.997, 212.165, -143.476]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.stone_wall}
            position={[-198.47, 119.841, -190.385]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.Groundrocks}
            position={[-100.04, 8.848, 258.251]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_42.geometry}
            material={materials.ClothesPipeWater}
            position={[179.956, 258.903, 473.968]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_44.geometry}
            material={materials.FirewoodRope}
            position={[-82.552, 0.18, 206.967]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_46.geometry}
            material={materials.CrateBarrel}
            position={[-88.849, -314.87, 796.32]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_51.geometry}
            material={materials.FirewoodRope}
            position={[-661.684, -435.456, 389.629]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_62.geometry}
            material={materials.Smoke_Chimney}
            position={[-181.102, 908.705, -224.879]}
            rotation={[0, -0.593, 0]}
        />
        <mesh
            geometry={nodes.Object_64.geometry}
            material={materials.ClothesPipeWater}
            position={[-360.408, -786.75, -121.772]}
            rotation={[-2.161, 0.03, 3.096]}
        />
        <mesh
            geometry={nodes.Object_69.geometry}
            material={materials.CabinGlass}
            position={[-81.664, -888.707, 224.153]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_71.geometry}
            material={materials.grasstuft}
            position={[-37.116, 10.343, 661.843]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_83.geometry}
            material={materials.PipeLantern}
            position={[38.589, 162.041, 547.905]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.781}
        />
        <mesh
            geometry={nodes.Object_85.geometry}
            material={materials.FirewoodRope}
            position={[44.992, 196.02, 549.13]}
            rotation={[-Math.PI / 2, -1.542, -Math.PI / 2]}
            scale={0.511}
        />
        <mesh
            geometry={nodes.Object_87.geometry}
            material={materials.FirewoodRope}
            position={[-185.931, -765.964, 407.505]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_89.geometry}
            material={materials.House_Wood_tiling}
            position={[-169.602, -766.665, 390.647]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_91.geometry}
            material={materials.PipeLantern}
            position={[-191.324, -809.109, 411.167]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_93.geometry}
            material={materials.PipeLantern}
            position={[-543.963, -613.11, 341.994]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_95.geometry}
            material={materials.FirewoodRope}
            position={[-538.016, -569.965, 339.325]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_97.geometry}
            material={materials.BottomCabins}
            position={[-415.69, -686.735, 225.637]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_99.geometry}
            material={materials.PipeLantern}
            position={[32.468, 381.77, 220.972]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_101.geometry}
            material={materials.FirewoodRope}
            position={[33.693, 415.749, 214.57]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_103.geometry}
            material={materials.House_Wood_tiling}
            position={[33.318, 415.049, 191.103]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_105.geometry}
            material={materials.House_Wood_tiling}
            position={[-173.413, 415.049, 136.377]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_107.geometry}
            material={materials.PipeLantern}
            position={[-203.282, 381.77, 135.528]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_109.geometry}
            material={materials.FirewoodRope}
            position={[-196.88, 415.749, 136.752]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_111.geometry}
            material={materials.FirewoodRope}
            position={[-63.576, 3.658, 89.061]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_113.geometry}
            material={materials.House_Wood_tiling}
            position={[-175.341, 203.602, -151.708]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_115.geometry}
            material={materials.FirewoodRope}
            position={[-198.808, 204.303, -151.333]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_117.geometry}
            material={materials.PipeLantern}
            position={[-205.211, 170.323, -152.558]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_119.geometry}
            material={materials.House_Wood_tiling}
            position={[8.951, 208.474, 224.312]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_121.geometry}
            material={materials.PipeLantern}
            position={[8.101, 175.195, 254.181]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_123.geometry}
            material={materials.FirewoodRope}
            position={[9.325, 209.175, 247.778]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_125.geometry}
            material={materials.House_Wood_tiling}
            position={[-85.271, -858.185, 387.906]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_148.geometry}
            material={materials.CrateBarrel}
            position={[-143.295, 74.788, 635.039]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_150.geometry}
            material={materials.CrateBarrel}
            position={[-118.898, 27.721, 652.074]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_152.geometry}
            material={materials.CrateBarrel}
            position={[-166.804, 27.721, 647.485]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
            geometry={nodes.Object_172.geometry}
            material={materials.Chimney_PBolts}
            position={[-76.639, -876.754, 588.783]}
            rotation={[0, 0, -Math.PI / 4]}
            scale={0.641}
        />
        <mesh
            geometry={nodes.Object_186.geometry}
            material={materials.Bottles}
            position={[85.068, 114.211, 326.941]}
            rotation={[-Math.PI / 2, 0, 0]}
        />
        </a.group>
  );
}

export default Island;