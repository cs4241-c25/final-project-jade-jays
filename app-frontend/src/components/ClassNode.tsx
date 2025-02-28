import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

export default function ClassNode({ data, isConnectable }) {

    console.log(data);

    return (
        <>
            <div style={{ padding: 25, backgroundColor: 'red' }} >
                <div>Node</div>
                <Handle
                    type="source"
                    id="red"
                    position={Position.Bottom}
                    isConnectable={isConnectable}
                    style={{ left: 10 }}
                />
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="blue"
                    isConnectable={isConnectable}
                />
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="orange"
                    isConnectable={isConnectable}
                    style={{ right: 10 }}
                />
            </div>
        </>
    );
}