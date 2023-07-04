import React from 'react';

function Connection({ type, from, to }) {
    if (!document.querySelector(`.node1`)) {
        return null;
    }
    const getNodePosition = (nodeId) => {
        const node = document.querySelector(`.node${nodeId}`);
        const nodeRect = node.getBoundingClientRect();

        // Calcula el centro del nodo.
        const centerX = nodeRect.left + nodeRect.width / 2;
        const centerY = nodeRect.top + nodeRect.height / 2;

        return {
            x: centerX,
            y: centerY,
        };
    };

    const startPoint = getNodePosition(from);
    const endPoint = getNodePosition(to);

    // Controla la curvatura de la línea.
    const curveFactor = 30;
    const controlPoint1 = {
        x: startPoint.x + curveFactor,
        y: startPoint.y,
    };
    let controlPoint2 = {
        x: endPoint.x - curveFactor,
        y: endPoint.y,
    };

    if (from === 25 && to === 22 && type === 'walk') {
        controlPoint2 = {
            x: (startPoint.x + endPoint.x) / 2,
            y: startPoint.y * 0.8,
        };
    }

    if (from === 25 && to === 26 && type === 'car') {
        controlPoint2 = {
            x: (startPoint.x + endPoint.x) / 2,
            y: 0.85 * (startPoint.y + endPoint.y) / 2 ,
        };
    }

    if (from === 25 && to === 24 && type === 'car') {
        controlPoint2 = {
            x: 0.8 * (startPoint.x + endPoint.x) / 2,
            y: (startPoint.y + endPoint.y) / 2 ,
        };
    }

    if (from === 18 && to === 20 && type === 'bike') {
        controlPoint2 = {
            x: 1.2 * (startPoint.x + endPoint.x) / 2,
            y: (startPoint.y + endPoint.y) / 2 ,
        };
    }

    const pathData = `
        M${startPoint.x},${startPoint.y}
        C${controlPoint1.x},${controlPoint1.y}
        ${controlPoint2.x},${controlPoint2.y}
        ${endPoint.x},${endPoint.y}
    `;
    let connectionColor = '#000';
    if (type === 'walk') {
        connectionColor = 'yellow';
    } // return <path d={pathData} strokeWidth="2" stroke="#000" fill="none" strokeDasharray="5,5" />
    if (type === 'bike') {
        connectionColor = 'green';
    }
    if (type === 'car') {
        connectionColor = 'red';
    } 
    return (
        <svg width="100%" height="100%" style={{pointerEvents: "none"}}>
            <path d={pathData} strokeWidth="2" stroke={connectionColor} fill="none" />
        </svg>
    );
}

export default Connection;