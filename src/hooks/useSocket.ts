import { useMemo, useEffect, useState } from 'react';
import {io,Socket} from 'socket.io-client';
interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }

export const useSocket = ( serverPath:string ) => {

    const socket:Socket<ServerToClientEvents,ClientToServerEvents> = useMemo( () => io(serverPath, {
        // path: serverPath,
        transports: ["websocket", "polling", "flashsocket"],
        rememberUpgrade: true,
        autoConnect: false,
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        randomizationFactor: 0.5,
        timeout: 10000,
        forceNew: false,
        multiplex: true,
        upgrade: false,
    } ), [ serverPath ] );
    
    const [ online, setOnline ] = useState(false);

    useEffect(() => {
        setOnline( socket.connected );
    }, [ socket ])

    useEffect( () => {
        socket.on('connect', () => {
            console.log('connected');
            setOnline( true );
        })

    }, [ socket ])

    useEffect( () => {

        socket.on('disconnect', () => {
            console.log('disconnected');
            setOnline( false );
        })

    }, [ socket ])

    return {
        socket,
        online
    }
}