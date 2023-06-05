import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle, useEffect } from 'react';
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    mobileAndTabletCheck
} from "webgi";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scrollAnimation } from '../lib/scroll-animation';

gsap.registerPlugin(ScrollTrigger);
gsap.set('.jumbotron-section', { y: -1000 });

const WebgiViewer = () => {
    const canvasRef = useRef(null);
    
    const memoizedScrollAnimation = useCallback(
        ( position, target, onUpdate ) => {
            if ( position && target && onUpdate ){
                scrollAnimation( position, target, onUpdate );
            }
        }, []
    )

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
            useRgbm: false,
        })

        
        
        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        // Add plugins individually.
        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)
        await viewer.addPlugin(BloomPlugin)
        await addBasePlugins(viewer)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("Releaf.glb")

        viewer.scene.activeCamera.setCameraOptions( {controlsEnabled: false});

        window.scrollTo( 0,0 );

        let needsupdate = true;

        const onUpdate = () => {
            needsupdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () => {
            if(needsupdate) {
            camera.positionTargetUpdated(true);
            needsupdate = false;
            }
        })

        memoizedScrollAnimation( position, target, onUpdate );
    }, []);

    useEffect(() => {
        setupViewer();
    },[])

    return (
        <div id='webgi-canvas-container'>
            <canvas id='webgi-canvas' ref={canvasRef}></canvas>
        </div>
    )
}

export default WebgiViewer