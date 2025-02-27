import React from 'react';
import {
    ReactFlow
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

export const FlowChart: React.FC = () => {

    const initialNodes = [
        { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
        { id: '2', position: { x: 100, y: 100 }, data: { label: '2' } },
        { id: '3', position: { x: 200, y: 200 }, data: { label: '3' } },
        { id: '4', position: { x: 300, y: 300 }, data: { label: '4' } },
        { id: '5', position: { x: 400, y: 400 }, data: { label: '5' } },
    ];
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
            />
        </div>
    );
};