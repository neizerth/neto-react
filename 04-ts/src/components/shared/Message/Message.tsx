import type { PropsWithChildren } from "react";

export type MessageType = 'info' | 'error' | 'success'

export type MessageProps = PropsWithChildren & {
  type?: MessageType
}

export function Message({ type = 'info', children }: MessageProps) {
  return (
    <div className={`message message_${type}`}>
      {children}
    </div>
  );
}